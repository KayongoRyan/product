import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";

export const Route = createFileRoute("/fashion")({
  head: () => ({
    meta: [
      { title: "Fashion — Norf Crebions" },
      { name: "description", content: "Bold streetwear and curated drops from Norf." },
      { property: "og:title", content: "Fashion — Norf Crebions" },
      { property: "og:description", content: "Bold streetwear and curated drops from Norf." },
    ],
  }),
  component: FashionPage,
});

function FashionPage() {
  return (
    <main className="min-h-screen bg-paper px-5 py-24 text-ink md:px-10">
      <Nav />
      <div className="mx-auto max-w-7xl">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-ink">← Back home</Link>
        <h1 className="mt-6 font-display text-5xl font-black uppercase tracking-tight md:text-7xl">Shop Fashion</h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Elevate your wardrobe with bold style. New drops, timeless pieces.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80", price: "$120" },
            { img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80", price: "$95" },
            { img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80", price: "$140" },
            { img: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&q=80", price: "$180" },
            { img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80", price: "$110" },
            { img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80", price: "$85" },
          ].map((item, i) => (
            <article key={i} className="rounded-2xl border border-ink/15 p-6">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-muted">
                <img src={item.img} alt={`Look ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-2">
                <h3 className="font-display text-lg font-black uppercase tracking-widest">Look {i + 1}</h3>
                <span className="font-mono text-sm font-bold">{item.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
