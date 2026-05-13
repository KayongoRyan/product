import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign In or Sign Up — Norf Crebions" },
      { name: "description", content: "Create an account or log in to Norf Crebions." },
      { property: "og:title", content: "Sign In or Sign Up — Norf Crebions" },
      { property: "og:description", content: "Create an account or log in to Norf Crebions." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) navigate({ to: "/" });
  }, [user, loading, navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: { display_name: displayName || email.split("@")[0] },
          },
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      navigate({ to: "/" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-paper px-4 py-20 font-display">
      <div className="mx-auto max-w-md">
        <Link
          to="/"
          className="font-mono text-xs uppercase tracking-widest text-ink/60 hover:text-ink"
        >
          ← Back home
        </Link>
        <h1 className="mt-6 font-display text-5xl font-black uppercase tracking-tight text-ink">
          {mode === "login" ? "Welcome back" : "Join us"}
        </h1>
        <p className="mt-2 text-sm text-ink/60">
          {mode === "login" ? "Log in to your account." : "Create your Norf Crebions account."}
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {mode === "signup" && (
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-widest text-ink/70">
                Display Name
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full border-b-2 border-ink bg-transparent px-1 py-2 text-base text-ink outline-none focus:border-primary"
                placeholder="Your name"
              />
            </div>
          )}
          <div>
            <label className="mb-1 block text-xs font-bold uppercase tracking-widest text-ink/70">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b-2 border-ink bg-transparent px-1 py-2 text-base text-ink outline-none focus:border-primary"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-bold uppercase tracking-widest text-ink/70">
              Password
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b-2 border-ink bg-transparent px-1 py-2 text-base text-ink outline-none focus:border-primary"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 w-full rounded-full bg-primary px-6 py-3.5 font-display text-sm font-black uppercase tracking-widest text-primary-foreground shadow-[0_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5 disabled:opacity-50"
          >
            {submitting ? "Please wait…" : mode === "login" ? "Log In" : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-ink/70">
          {mode === "login" ? "No account yet?" : "Already a member?"}{" "}
          <button
            type="button"
            onClick={() => {
              setMode(mode === "login" ? "signup" : "login");
              setError("");
            }}
            className="font-bold text-ink underline underline-offset-4 hover:text-primary"
          >
            {mode === "login" ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}
