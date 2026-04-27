import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";

export const Route = createFileRoute("/luts")({
  head: () => ({
    meta: [
      { title: "LUTs — Norf Crebions" },
      { name: "description", content: "Cinematic LUTs for video creators and filmmakers." },
      { property: "og:title", content: "LUTs — Norf Crebions" },
      { property: "og:description", content: "Cinematic LUTs for video creators and filmmakers." },
    ],
  }),
  component: LutsPage,
});

function LutsPage() {
  return (
    <main className="min-h-screen bg-paper px-5 py-24 text-ink md:px-10">
      <Nav />
      <div className="mx-auto max-w-7xl">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-ink">← Back home</Link>
        <h1 className="mt-6 font-display text-5xl font-black uppercase tracking-tight md:text-7xl">All LUTs</h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Color grade your footage with cinematic looks crafted by Norf.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { img: "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?w=800&q=80", price: "$29" },
            { img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80", price: "$39" },
            { img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80", price: "$49" },
            { img: "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=800&q=80", price: "$25" },
            { img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80", price: "$35" },
            { img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80", price: "$45" },
          ].map((item, i) => (
            <article key={i} className="rounded-2xl border border-ink/15 p-6">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted">
                <img src={item.img} alt={`LUT Pack ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-2">
                <h3 className="font-display text-lg font-black uppercase tracking-widest">LUT Pack {i + 1}</h3>
                <span className="font-mono text-sm font-bold">{item.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
