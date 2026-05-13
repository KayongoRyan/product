import type { Env } from "../config/env.js";

export type GoTrueSession = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  user?: unknown;
};

/**
 * Exchanges a refresh token for a new session via Supabase GoTrue (JWT + refresh rotation when enabled).
 */
export async function refreshGoTrueSession(env: Env, refreshToken: string): Promise<GoTrueSession> {
  const base = env.SUPABASE_URL.replace(/\/$/, "");
  const url = `${base}/auth/v1/token?grant_type=refresh_token`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      apikey: env.SUPABASE_ANON_KEY,
      Authorization: `Bearer ${env.SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });

  const body = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  if (!res.ok) {
    const msg =
      typeof body.error_description === "string"
        ? body.error_description
        : typeof body.msg === "string"
          ? body.msg
          : `GoTrue refresh failed (${res.status})`;
    throw new Error(msg);
  }

  const access_token = body.access_token;
  const refresh_token = body.refresh_token;
  const expires_in = body.expires_in;
  const token_type = body.token_type;
  if (
    typeof access_token !== "string" ||
    typeof refresh_token !== "string" ||
    typeof expires_in !== "number" ||
    typeof token_type !== "string"
  ) {
    throw new Error("Unexpected GoTrue token response shape");
  }

  return {
    access_token,
    refresh_token,
    expires_in,
    token_type,
    user: body.user,
  };
}
