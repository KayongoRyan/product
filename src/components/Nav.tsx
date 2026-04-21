import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between p-5 transition-colors duration-300 md:p-7 ${
        scrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <button className="flex items-center gap-3 rounded-full bg-primary px-5 py-3 font-display text-sm font-bold tracking-widest text-primary-foreground shadow-[0_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5">
        <span className="flex h-4 w-5 flex-col justify-between">
          <span className="h-[2px] w-full bg-ink" />
          <span className="h-[2px] w-full bg-ink" />
          <span className="h-[2px] w-3 bg-ink" />
        </span>
        MENU
      </button>
      <a
        href="#connect"
        className="rounded-full border-[1.5px] border-paper px-5 py-3 font-display text-sm font-bold tracking-widest text-paper transition-colors hover:bg-paper hover:text-ink"
      >
        CONNECT
      </a>
    </header>
  );
}
