import type { Context, Next } from "hono";
import type { Env } from "../config/env.js";

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

function clientKey(c: Context): string {
  const fwd = c.req.header("x-forwarded-for");
  if (fwd) {
    const first = fwd.split(",")[0]?.trim();
    if (first) return `ip:${first}`;
  }
  const real = c.req.header("x-real-ip");
  if (real) return `ip:${real}`;
  return "ip:unknown";
}

export function rateLimitMiddleware(env: Env) {
  const max = env.RATE_LIMIT_MAX;
  const windowMs = env.RATE_LIMIT_WINDOW_MS;

  return async (c: Context, next: Next) => {
    const key = clientKey(c);
    const now = Date.now();
    let b = buckets.get(key);
    if (!b || now >= b.resetAt) {
      b = { count: 0, resetAt: now + windowMs };
      buckets.set(key, b);
    }
    b.count += 1;
    c.header("X-RateLimit-Limit", String(max));
    c.header("X-RateLimit-Remaining", String(Math.max(0, max - b.count)));
    c.header("X-RateLimit-Reset", String(Math.ceil(b.resetAt / 1000)));
    if (b.count > max) {
      return c.json({ error: "Too many requests" }, 429);
    }
    await next();
  };
}
