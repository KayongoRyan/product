import * as jose from "jose";
import type { Env } from "../config/env.js";

export type VerifiedAccessToken = {
  sub: string;
  payload: jose.JWTPayload;
};

let jwks: ReturnType<typeof jose.createRemoteJWKSet> | undefined;

function getJwks(env: Env): ReturnType<typeof jose.createRemoteJWKSet> {
  if (!jwks) {
    const base = env.SUPABASE_URL.replace(/\/$/, "");
    jwks = jose.createRemoteJWKSet(new URL(`${base}/auth/v1/.well-known/jwks.json`));
  }
  return jwks;
}

export function jwtIssuer(env: Env): string {
  return `${env.SUPABASE_URL.replace(/\/$/, "")}/auth/v1`;
}

/**
 * Validates a Supabase-issued access token (ES256 JWKS from GoTrue).
 */
export async function verifySupabaseAccessToken(
  env: Env,
  token: string,
): Promise<VerifiedAccessToken> {
  const issuer = jwtIssuer(env);
  const { payload } = await jose.jwtVerify(token, getJwks(env), {
    issuer,
    algorithms: ["ES256"],
  });

  const sub = typeof payload.sub === "string" ? payload.sub : undefined;
  if (!sub) {
    throw new Error('Access token is missing a valid "sub" claim');
  }

  return { sub, payload };
}
