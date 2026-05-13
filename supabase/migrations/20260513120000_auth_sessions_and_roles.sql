-- Idempotent enum for application-level authorization (not the JWT "authenticated" role)
DO $$
BEGIN
  CREATE TYPE public.app_role AS ENUM ('user', 'moderator', 'admin');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END;
$$;

alter table public.profiles
  add column if not exists role public.app_role not null default 'user'::public.app_role;

-- Server-tracked refresh sessions (written only by trusted backend using service role)
create table if not exists public.user_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  refresh_token_hash text not null,
  user_agent text,
  ip_address text,
  expires_at timestamptz not null,
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  last_refreshed_at timestamptz not null default now()
);

create index if not exists user_sessions_user_id_idx on public.user_sessions (user_id);
create index if not exists user_sessions_refresh_hash_idx on public.user_sessions (refresh_token_hash);
create index if not exists user_sessions_active_idx on public.user_sessions (user_id) where revoked_at is null;

alter table public.user_sessions enable row level security;

-- No client policies: sessions are managed exclusively by the backend (service role).

comment on table public.user_sessions is 'Opaque refresh-token sessions; backend verifies JWT and rotates refresh via Supabase GoTrue.';
