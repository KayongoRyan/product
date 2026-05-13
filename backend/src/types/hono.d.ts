import type { SupabaseClient } from "@supabase/supabase-js";
import type { JWTPayload } from "jose";
import type { Env } from "../config/env.js";
import type { AppRole } from "../auth/roles.js";

declare module "hono" {
  interface ContextVariableMap {
    envConfig: Env;
    supabaseAdmin: SupabaseClient;
    requestId: string;
    userId?: string;
    appRole?: AppRole;
    jwtPayload?: JWTPayload;
  }
}
