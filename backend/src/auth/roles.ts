import type { Context, Next } from "hono";

export const APP_ROLES = ["user", "moderator", "admin"] as const;
export type AppRole = (typeof APP_ROLES)[number];

const ORDER: Record<AppRole, number> = {
  user: 0,
  moderator: 1,
  admin: 2,
};

export function parseAppRole(value: unknown): AppRole {
  if (typeof value === "string" && (APP_ROLES as readonly string[]).includes(value)) {
    return value as AppRole;
  }
  return "user";
}

/**
 * Requires the resolved profile role to be at least `min` in the hierarchy.
 */
export function requireMinimumRole(min: AppRole) {
  return async (c: Context, next: Next) => {
    const role = c.get("appRole");
    if (!role || ORDER[role] < ORDER[min]) {
      return c.json({ error: "Forbidden", required: min }, 403);
    }
    await next();
  };
}

/**
 * Requires an exact role (any of the listed roles passes).
 */
export function requireAnyRole(...allowed: AppRole[]) {
  const set = new Set(allowed);
  return async (c: Context, next: Next) => {
    const role = c.get("appRole");
    if (!role || !set.has(role)) {
      return c.json({ error: "Forbidden", allowed }, 403);
    }
    await next();
  };
}
