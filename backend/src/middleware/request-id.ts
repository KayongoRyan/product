import { randomUUID } from "node:crypto";
import type { Context, Next } from "hono";

export async function requestIdMiddleware(c: Context, next: Next) {
  const incoming = c.req.header("x-request-id");
  const id = incoming && incoming.length > 0 && incoming.length < 200 ? incoming : randomUUID();
  c.set("requestId", id);
  c.header("X-Request-Id", id);
  await next();
}
