import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/templates", label: "Templates" },
  { to: "/luts", label: "LUTs" },
  { to: "/fashion", label: "Fashion" },
  { to: "/soundpacks", label: "Soundpacks" },
  { to: "/connect", label: "Connect" },
] as const;

export function MenuDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-[70] flex w-[88%] max-w-md flex-col bg-ink text-paper shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-paper/60">
            Navigate
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full border border-paper/20 p-2 text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-2 px-6 pb-12">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={onClose}
              className="group flex items-baseline gap-4 border-b border-paper/10 py-4 font-display text-3xl font-black uppercase tracking-tight transition-colors hover:text-primary md:text-5xl"
            >
              <span className="font-mono text-xs text-paper/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="transition-transform group-hover:translate-x-2">{l.label}</span>
            </Link>
          ))}
        </nav>
        <div className="border-t border-paper/10 px-6 py-5 font-mono text-[10px] uppercase tracking-widest text-paper/40">
          © Norf Crebions
        </div>
      </aside>
    </>
  );
}
