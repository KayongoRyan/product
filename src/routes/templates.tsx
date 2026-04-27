import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";

export const Route = createFileRoute("/templates")({
  head: () => ({
    meta: [
      { title: "Templates — Norf Crebions" },
      { name: "description", content: "Squarespace and presentation templates that demand attention." },
      { property: "og:title", content: "Templates — Norf Crebions" },
      { property: "og:description", content: "Squarespace and presentation templates that demand attention." },
    ],
  }),
  component: TemplatesPage,
});

function TemplatesPage() {
  return (
    <main className="min-h-screen bg-paper px-5 py-24 text-ink md:px-10">
      <Nav />
      <div className="mx-auto max-w-7xl">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-ink">← Back home</Link>
        <h1 className="mt-6 font-display text-5xl font-black uppercase tracking-tight md:text-7xl">All Templates</h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Browse our full catalog of Squarespace website templates and presentation decks. New drops every month.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80", price: "$79" },
            { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", price: "$99" },
            { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", price: "$129" },
            { img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80", price: "$89" },
            { img: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80", price: "$149" },
            { img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80", price: "$109" },
          ].map((item, i) => (
            <article key={i} className="rounded-2xl border border-ink/15 p-6">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted">
                <img src={item.img} alt={`Template ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-2">
                <h3 className="font-display text-lg font-black uppercase tracking-widest">Template {i + 1}</h3>
                <span className="font-mono text-sm font-bold">{item.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
