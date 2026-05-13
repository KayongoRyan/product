import type { SupabaseClient } from "@supabase/supabase-js";
import { sha256Hex } from "../lib/crypto.js";

export async function insertSessionRow(params: {
  admin: SupabaseClient;
  userId: string;
  refreshToken: string;
  expiresAt: Date;
  userAgent: string | undefined;
  ipAddress: string | undefined;
}): Promise<{ id: string }> {
  const hash = sha256Hex(params.refreshToken);
  const { data, error } = await params.admin
    .from("user_sessions")
    .insert({
      user_id: params.userId,
      refresh_token_hash: hash,
      user_agent: params.userAgent ?? null,
      ip_address: params.ipAddress ?? null,
      expires_at: params.expiresAt.toISOString(),
    })
    .select("id")
    .single();

  if (error || !data?.id) {
    throw new Error(error?.message ?? "Failed to persist session");
  }
  return { id: data.id as string };
}

export async function revokeSession(params: {
  admin: SupabaseClient;
  sessionId: string;
  userId: string;
}): Promise<boolean> {
  const { data, error } = await params.admin
    .from("user_sessions")
    .update({ revoked_at: new Date().toISOString() })
    .eq("id", params.sessionId)
    .eq("user_id", params.userId)
    .is("revoked_at", null)
    .select("id")
    .maybeSingle();

  if (error) throw new Error(error.message);
  return !!data;
}

export async function revokeAllSessionsForUser(admin: SupabaseClient, userId: string): Promise<void> {
  const { error } = await admin
    .from("user_sessions")
    .update({ revoked_at: new Date().toISOString() })
    .eq("user_id", userId)
    .is("revoked_at", null);
  if (error) throw new Error(error.message);
}

export async function listActiveSessions(admin: SupabaseClient, userId: string) {
  const { data, error } = await admin
    .from("user_sessions")
    .select("id, user_agent, ip_address, created_at, last_refreshed_at, expires_at")
    .eq("user_id", userId)
    .is("revoked_at", null)
    .order("last_refreshed_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data ?? [];
}
