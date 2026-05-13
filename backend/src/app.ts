import type { SupabaseClient } from "@supabase/supabase-js";
import { Hono } from "hono";
import type { Env } from "./config/env.js";
import { createSupabaseAdmin } from "./lib/supabase-admin.js";
import { corsMiddleware } from "./middleware/cors.js";
import { rateLimitMiddleware } from "./middleware/rate-limit.js";
import { requestIdMiddleware } from "./middleware/request-id.js";
import { securityHeaders } from "./middleware/security.js";
import { createAuthRoutes } from "./routes/auth.js";
import { createV1Routes } from "./routes/v1.js";

export function createApp(env: Env, admin: SupabaseClient = createSupabaseAdmin(env)) {
  const app = new Hono();

  app.use(async (c, next) => {
    c.set("envConfig", env);
    c.set("supabaseAdmin", admin);
    await next();
  });

  app.use(securityHeaders);
  app.use(requestIdMiddleware);
  app.use(rateLimitMiddleware(env));
  app.use(corsMiddleware(env));

  app.get("/health", (c) =>
    c.json({
      ok: true,
      request_id: c.get("requestId"),
    }),
  );

  app.route("/v1/auth", createAuthRoutes());
  app.route("/v1", createV1Routes());

  return app;
}
