import { cors } from "hono/cors";
import type { Env } from "../config/env.js";

export function corsMiddleware(env: Env) {
  const allow = new Set(env.CORS_ORIGINS);
  return cors({
    origin: (origin) => (origin && allow.has(origin) ? origin : [...allow][0]),
    allowHeaders: ["Authorization", "Content-Type", "X-Request-Id", "X-Session-Id"],
    allowMethods: ["GET", "POST", "DELETE", "OPTIONS"],
    exposeHeaders: ["X-Request-Id", "X-RateLimit-Limit", "X-RateLimit-Remaining", "X-RateLimit-Reset"],
    maxAge: 600,
    credentials: true,
  });
}
