import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";

export const Route = createFileRoute("/soundpacks")({
  head: () => ({
    meta: [
      { title: "Soundpacks — Norf Crebions" },
      { name: "description", content: "New soundpacks inspired by your favorite artists." },
      { property: "og:title", content: "Soundpacks — Norf Crebions" },
      { property: "og:description", content: "New soundpacks inspired by your favorite artists." },
    ],
  }),
  component: SoundpacksPage,
});

function SoundpacksPage() {
  return (
    <main className="min-h-screen bg-paper px-4 py-24 text-ink md:px-6">
      <Nav />
      <div className="w-full">
        <Link
          to="/"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-ink"
        >
          ← Back home
        </Link>
        <h1 className="mt-6 font-display text-5xl font-black uppercase tracking-tight md:text-7xl">
          Soundpacks
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Hand-curated samples and loops to power your next track.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            {
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
              price: "$30",
            },
            {
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
              price: "$45",
            },
            {
              img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
              price: "$60",
            },
            {
              img: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=400&q=80",
              price: "$50",
            },
            {
              img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
              price: "$140",
            },
            {
              img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
              price: "$40",
            },
            {
              img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80",
              price: "$55",
            },
            {
              img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80",
              price: "$120",
            },
          ].map((item, i) => (
            <article key={i} className="rounded-2xl border border-ink/15 p-4">
              <div className="aspect-square w-full overflow-hidden rounded-xl bg-muted">
                <img
                  src={item.img}
                  alt={`Pack ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-3 flex items-start justify-between gap-2">
                <h3 className="font-display text-sm font-black uppercase tracking-widest">
                  Pack {i + 1}
                </h3>
                <span className="font-mono text-xs font-normal">{item.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
