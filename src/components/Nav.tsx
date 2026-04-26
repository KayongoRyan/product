import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MenuDrawer } from "./MenuDrawer";
import { useAuth } from "@/hooks/useAuth";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, profile, signOut } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initial = (profile?.display_name || user?.email || "?").charAt(0).toUpperCase();

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-2 transition-colors duration-300 md:px-6 md:py-3 ${
          scrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-3 rounded-full bg-primary px-5 py-3 font-display text-sm font-bold tracking-widest text-primary-foreground shadow-[0_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
        >
          <span className="flex h-4 w-5 flex-col justify-between">
            <span className="h-[2px] w-full bg-ink" />
            <span className="h-[2px] w-full bg-ink" />
            <span className="h-[2px] w-3 bg-ink" />
          </span>
          MENU
        </button>

        {user ? (
          <Link
            to="/settings"
            aria-label="Settings"
            className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-[1.5px] border-ink bg-primary font-display text-base font-black text-primary-foreground shadow-[0_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
          >
            {profile?.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt={profile.display_name ?? "Avatar"}
                className="h-full w-full object-cover"
              />
            ) : (
              <span>{initial}</span>
            )}
          </Link>
        ) : (
          <Link
            to="/auth"
            className={`rounded-full border-[1.5px] px-5 py-3 font-display text-sm font-bold tracking-widest transition-colors ${
              scrolled
                ? "border-paper text-paper hover:bg-paper hover:text-ink"
                : "border-ink text-ink hover:bg-ink hover:text-paper"
            }`}
          >
            CONNECT
          </Link>
        )}
      </header>

      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
