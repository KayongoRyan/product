import type { Context, Next } from "hono";
import { verifySupabaseAccessToken } from "../auth/jwt.js";
import { parseAppRole } from "../auth/roles.js";

async function resolveBearerProfile(c: Context, token: string) {
  const env = c.get("envConfig");
  const admin = c.get("supabaseAdmin");
  const { sub, payload } = await verifySupabaseAccessToken(env, token);
  const { data, error } = await admin.from("profiles").select("role").eq("id", sub).maybeSingle();
  if (error) throw error;
  c.set("userId", sub);
  c.set("appRole", parseAppRole(data?.role));
  c.set("jwtPayload", payload);
}

/**
 * Requires a valid Supabase access token and loads `profiles.role` into context.
 */
export async function requireBearerAuth(c: Context, next: Next) {
  const h = c.req.header("Authorization");
  if (!h?.startsWith("Bearer ")) {
    return c.json({ error: "Unauthorized", detail: "Missing Authorization: Bearer" }, 401);
  }
  const raw = h.slice(7).trim();
  if (!raw) {
    return c.json({ error: "Unauthorized", detail: "Empty bearer token" }, 401);
  }
  try {
    await resolveBearerProfile(c, raw);
  } catch (e) {
    const detail = e instanceof Error ? e.message : "Invalid token";
    return c.json({ error: "Unauthorized", detail }, 401);
  }
  await next();
}

/**
 * Anonymous requests pass through. If a Bearer token is present it must be valid.
 */
export async function optionalBearerAuth(c: Context, next: Next) {
  const h = c.req.header("Authorization");
  if (!h?.startsWith("Bearer ")) {
    await next();
    return;
  }
  const raw = h.slice(7).trim();
  if (!raw) {
    return c.json({ error: "Unauthorized", detail: "Empty bearer token" }, 401);
  }
  try {
    await resolveBearerProfile(c, raw);
  } catch (e) {
    const detail = e instanceof Error ? e.message : "Invalid token";
    return c.json({ error: "Unauthorized", detail }, 401);
  }
  await next();
}
