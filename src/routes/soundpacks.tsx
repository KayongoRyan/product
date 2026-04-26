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
    <main className="min-h-screen bg-paper px-5 py-24 text-ink md:px-10">
      <Nav />
      <div className="mx-auto max-w-7xl">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-ink">← Back home</Link>
        <h1 className="mt-6 font-display text-5xl font-black uppercase tracking-tight md:text-7xl">Soundpacks</h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Hand-curated samples and loops to power your next track.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <article key={i} className="rounded-2xl border border-ink/15 p-4">
              <div className="aspect-square w-full overflow-hidden rounded-xl bg-muted" />
              <h3 className="mt-3 font-display text-sm font-black uppercase tracking-widest">Pack {i + 1}</h3>
              <p className="mt-1 text-xs text-muted-foreground">Coming soon</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
