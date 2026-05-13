import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { lightroomPresets } from "@/data/lightroomPresets";

export const Route = createFileRoute("/luts/")({
  head: () => ({
    meta: [
      { title: "Powergrades & LUTs — Norf Crebions" },
      { name: "description", content: "Shop powergrades and LUTs for bold cinematic color." },
      { property: "og:title", content: "Powergrades & LUTs — Norf Crebions" },
      {
        property: "og:description",
        content: "Shop powergrades and LUTs for bold cinematic color.",
      },
    ],
  }),
  component: LutsPage,
});

function LutsPage() {
  return (
    <main className="min-h-screen bg-paper px-4 py-24 text-ink md:px-6">
      <Nav />
      <div className="mx-auto max-w-[1400px]">
        <Link
          to="/"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-ink"
        >
          ← Back home
        </Link>

        <div className="mt-6">
          <h1 className="font-display text-5xl font-black uppercase tracking-tight md:text-7xl">
            Powergrades &amp; LUTs
          </h1>
        </div>

        <section className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {lightroomPresets.map((preset) => (
            <Link
              key={preset.id}
              to="/luts/$presetId"
              params={{ presetId: preset.id }}
              className="block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#eeeeee]">
                <img
                  src={preset.image}
                  alt={preset.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <h3 className="font-sans text-[11px] font-bold leading-tight text-ink/90 md:text-xs">
                  {preset.name}
                </h3>
                <span className="shrink-0 font-mono text-[11px] font-normal text-ink md:text-xs">
                  {preset.price}
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
