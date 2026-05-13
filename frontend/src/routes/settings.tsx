import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Norf Crebions" },
      { name: "description", content: "Manage your profile and account settings." },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const { user, profile, loading, signOut, refreshProfile } = useAuth();
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/auth" });
  }, [loading, user, navigate]);

  useEffect(() => {
    setDisplayName(profile?.display_name ?? "");
    setAvatarUrl(profile?.avatar_url ?? "");
  }, [profile]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({ display_name: displayName || null, avatar_url: avatarUrl || null })
      .eq("id", user.id);
    setSaving(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Profile updated");
      await refreshProfile();
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate({ to: "/" });
  };

  if (loading || !user) {
    return (
      <main className="min-h-screen bg-paper px-4 py-24 text-ink md:px-6">
        <Nav />
        <p className="mx-auto max-w-3xl font-mono text-sm text-muted-foreground">Loading…</p>
      </main>
    );
  }

  const initial = (profile?.display_name || user.email || "?").charAt(0).toUpperCase();

  return (
    <main className="min-h-screen bg-paper px-4 py-24 text-ink md:px-6">
      <Nav />
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-ink"
        >
          ← Back home
        </Link>
        <h1 className="mt-6 font-display text-5xl font-black uppercase tracking-tight md:text-7xl">
          Settings
        </h1>
        <p className="mt-4 text-base text-muted-foreground">Manage your profile and account.</p>

        {/* Profile card */}
        <section className="mt-10 rounded-2xl border-2 border-ink/15 bg-paper p-6 md:p-8">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-[1.5px] border-ink bg-primary font-display text-3xl font-black text-primary-foreground shadow-[0_4px_0_0_var(--ink)]">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={displayName || "Avatar"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span>{initial}</span>
              )}
            </div>
            <div className="min-w-0">
              <h2 className="truncate font-display text-2xl font-black uppercase tracking-tight">
                {profile?.display_name || user.email?.split("@")[0]}
              </h2>
              <p className="truncate font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {user.email}
              </p>
            </div>
          </div>

          <dl className="mt-8 grid gap-4 border-t border-ink/10 pt-6 font-mono text-sm md:grid-cols-2">
            <div>
              <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">
                User ID
              </dt>
              <dd className="mt-1 truncate text-ink">{user.id}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">Email</dt>
              <dd className="mt-1 truncate text-ink">{user.email}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Joined
              </dt>
              <dd className="mt-1 text-ink">
                {user.created_at ? new Date(user.created_at).toLocaleDateString() : "—"}
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Last sign-in
              </dt>
              <dd className="mt-1 text-ink">
                {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : "—"}
              </dd>
            </div>
          </dl>
        </section>

        {/* Edit profile */}
        <section className="mt-8 rounded-2xl border-2 border-ink/15 bg-paper p-6 md:p-8">
          <h2 className="font-display text-xl font-black uppercase tracking-tight">Edit profile</h2>
          <form onSubmit={handleSave} className="mt-6 grid gap-5">
            <label className="grid gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Display name
              </span>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your name"
                className="rounded-xl border-2 border-ink/15 bg-paper px-5 py-4 font-mono text-sm focus:border-primary focus:outline-none"
              />
            </label>
            <label className="grid gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Avatar URL
              </span>
              <input
                type="url"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                placeholder="https://…"
                className="rounded-xl border-2 border-ink/15 bg-paper px-5 py-4 font-mono text-sm focus:border-primary focus:outline-none"
              />
            </label>
            <button
              type="submit"
              disabled={saving}
              className="justify-self-start rounded-full bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[0_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save changes"}
            </button>
          </form>
        </section>

        {/* Account actions */}
        <section className="mt-8 rounded-2xl border-2 border-ink/15 bg-paper p-6 md:p-8">
          <h2 className="font-display text-xl font-black uppercase tracking-tight">Account</h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Sign out of your account on this device.
          </p>
          <button
            onClick={handleLogout}
            className="mt-6 rounded-full border-[1.5px] border-ink px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Log out
          </button>
        </section>
      </div>
    </main>
  );
}
