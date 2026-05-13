import { Hono } from "hono";
import { requireBearerAuth } from "../middleware/auth.js";
import { requireMinimumRole } from "../auth/roles.js";

export function createV1Routes() {
  const r = new Hono();

  r.get("/me", requireBearerAuth, (c) =>
    c.json({
      user_id: c.get("userId"),
      role: c.get("appRole"),
      claims: c.get("jwtPayload"),
      request_id: c.get("requestId"),
    }),
  );

  r.get("/admin/ping", requireBearerAuth, requireMinimumRole("admin"), (c) =>
    c.json({ ok: true, message: "admin access confirmed", user_id: c.get("userId") }),
  );

  return r;
}
