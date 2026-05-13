import { z } from "zod";
import { decodeJwt } from "jose";
import type { Context } from "hono";
import { Hono } from "hono";
import { refreshGoTrueSession } from "../auth/gotrue.js";
import { requireBearerAuth } from "../middleware/auth.js";
import {
  insertSessionRow,
  listActiveSessions,
  revokeAllSessionsForUser,
  revokeSession,
} from "../services/session-store.js";

const refreshBody = z.object({
  refresh_token: z.string().min(1),
});

const logoutBody = z
  .object({
    session_id: z.string().uuid().optional(),
    revoke_all: z.boolean().optional(),
  })
  .optional();

function clientIp(c: Context): string | undefined {
  const xff = c.req.header("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim();
  return c.req.header("x-real-ip") ?? undefined;
}

export function createAuthRoutes() {
  const r = new Hono();

  r.post("/refresh", async (c) => {
    const env = c.get("envConfig");
    const admin = c.get("supabaseAdmin");
    let body: unknown;
    try {
      body = await c.req.json();
    } catch {
      return c.json({ error: "Invalid JSON body" }, 400);
    }
    const parsed = refreshBody.safeParse(body);
    if (!parsed.success) {
      return c.json({ error: "Invalid body", issues: parsed.error.flatten() }, 400);
    }

    try {
      const session = await refreshGoTrueSession(env, parsed.data.refresh_token);
      const claims = decodeJwt(session.access_token);
      const sub = typeof claims.sub === "string" ? claims.sub : undefined;
      if (!sub) {
        return c.json({ error: "Invalid token response from identity provider" }, 502);
      }

      const previousSessionId = c.req.header("x-session-id");
      if (previousSessionId) {
        await revokeSession({
          admin,
          sessionId: previousSessionId,
          userId: sub,
        }).catch(() => undefined);
      }

      const expiresAt = new Date(Date.now() + session.expires_in * 1000);
      let sessionRowId: string | undefined;
      try {
        const row = await insertSessionRow({
          admin,
          userId: sub,
          refreshToken: session.refresh_token,
          expiresAt,
          userAgent: c.req.header("user-agent"),
          ipAddress: clientIp(c),
        });
        sessionRowId = row.id;
      } catch (e) {
        // Table may not exist until migration is applied — still return tokens.
        console.warn("[auth/refresh] session persistence skipped:", e);
      }

      return c.json({
        access_token: session.access_token,
        refresh_token: session.refresh_token,
        expires_in: session.expires_in,
        token_type: session.token_type,
        session_id: sessionRowId,
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : "Refresh failed";
      return c.json({ error: "Refresh rejected", detail: message }, 401);
    }
  });

  r.get("/sessions", requireBearerAuth, async (c) => {
    const admin = c.get("supabaseAdmin");
    const userId = c.get("userId")!;
    try {
      const sessions = await listActiveSessions(admin, userId);
      return c.json({ sessions });
    } catch (e) {
      const message = e instanceof Error ? e.message : "List failed";
      return c.json({ error: message }, 500);
    }
  });

  r.delete("/sessions/:sessionId", requireBearerAuth, async (c) => {
    const admin = c.get("supabaseAdmin");
    const userId = c.get("userId")!;
    const sessionId = c.req.param("sessionId");
    if (!sessionId) {
      return c.json({ error: "Missing session id" }, 400);
    }
    try {
      const ok = await revokeSession({ admin, sessionId, userId });
      if (!ok) return c.json({ error: "Session not found or already revoked" }, 404);
      return c.json({ ok: true });
    } catch (e) {
      const message = e instanceof Error ? e.message : "Revoke failed";
      return c.json({ error: message }, 500);
    }
  });

  r.post("/logout", requireBearerAuth, async (c) => {
    const admin = c.get("supabaseAdmin");
    const userId = c.get("userId")!;
    let body: unknown;
    try {
      body = await c.req.json().catch(() => ({}));
    } catch {
      body = {};
    }
    const parsed = logoutBody.safeParse(body);
    if (!parsed.success) {
      return c.json({ error: "Invalid body", issues: parsed.error.flatten() }, 400);
    }
    const revokeAll = parsed.data?.revoke_all === true;
    try {
      if (revokeAll) {
        await revokeAllSessionsForUser(admin, userId);
        return c.json({ ok: true, revoked: "all_sessions" });
      }
      const sessionId = parsed.data?.session_id ?? c.req.header("x-session-id");
      if (!sessionId) {
        return c.json({ error: "Provide session_id or revoke_all: true" }, 400);
      }
      const ok = await revokeSession({ admin, sessionId, userId });
      if (!ok) return c.json({ error: "Session not found or already revoked" }, 404);
      return c.json({ ok: true, revoked: sessionId });
    } catch (e) {
      const message = e instanceof Error ? e.message : "Logout failed";
      return c.json({ error: message }, 500);
    }
  });

  return r;
}
