import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import nologo from "@/assets/nologo.svg";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const useDarkText = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="relative flex items-center justify-between px-4 py-3 md:px-6">
        <nav className="flex items-center gap-6 md:gap-10">
          <Link
            to="/apparel"
            className={`font-display text-sm font-medium transition-opacity hover:opacity-70 ${
              useDarkText ? "text-ink" : "text-paper"
            }`}
          >
            Apparel
          </Link>
          <Link
            to="/templates"
            className={`font-display text-sm font-medium transition-opacity hover:opacity-70 ${
              useDarkText ? "text-ink" : "text-paper"
            }`}
          >
            Templates
          </Link>
          <Link
            to="/luts"
            className={`font-display text-sm font-medium transition-opacity hover:opacity-70 ${
              useDarkText ? "text-ink" : "text-paper"
            }`}
          >
            LUTs
          </Link>
          <Link
            to="/lightroom-presets"
            className={`font-display text-sm font-medium transition-opacity hover:opacity-70 ${
              useDarkText ? "text-ink" : "text-paper"
            }`}
          >
            Presets
          </Link>
        </nav>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2 transition-opacity hover:opacity-70">
          <img
            src={nologo}
            alt="Norf logo"
            className="h-8 w-8 md:h-9 md:w-9"
            style={{ filter: useDarkText ? "brightness(0)" : "none" }}
          />
        </Link>

        <button
          aria-label="Cart"
          type="button"
          className={`transition-opacity hover:opacity-70 ${useDarkText ? "text-ink" : "text-paper"}`}
        >
          <ShoppingBag className="h-5 w-5" strokeWidth={1.8} />
        </button>
      </div>
    </header>
  );
}
