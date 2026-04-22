import { ArrowUpRight } from "lucide-react";

const luts = [
  { name: "HN Signature Cinematic LUTs", price: "$100", img: "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?w=800&q=80", featured: false },
  { name: "Films LUTs V1", price: "$90", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80", featured: true },
  { name: "HN Signature Cinematic LUTs", price: "$120", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80", featured: false },
];

// Diagonal clip carved out of the top-right corner. The 56px notch leaves
// room for the circular arrow button to nest into the cut.
const clipStyle: React.CSSProperties = {
  clipPath:
    "polygon(0 0, calc(100% - 56px) 0, 100% 56px, 100% 100%, 0 100%)",
};

export function LutsSection() {
  return (
    <section id="luts" className="bg-paper px-5 py-20 md:px-10">
      <div className="mx-auto max-w-7xl rounded-3xl border-2 border-ink p-6 md:p-10">
        <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:items-end">
          <h2 className="font-display text-5xl font-black tracking-tight md:text-7xl">LUTS</h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Turns out, a beautiful & strategic website doesn't have to start from scratch.
            Our customers prove that with the right template, you can launch a custom-looking site.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {luts.map((l) => (
            <article key={l.name + l.price} className="group relative">
              {/* Card body with clipped top-right corner */}
              <div
                style={clipStyle}
                className={`relative overflow-hidden rounded-[2rem] p-4 ${
                  l.featured ? "bg-primary" : "bg-muted-foreground/40"
                }`}
              >
                <div className="flex items-start justify-between gap-3 px-2 pb-4 pt-2 pr-16">
                  <p
                    className={`font-display text-xs font-bold uppercase tracking-widest leading-tight ${
                      l.featured ? "text-ink" : "text-paper"
                    }`}
                  >
                    {l.name}
                  </p>
                  <span
                    className={`font-mono text-sm font-bold shrink-0 ${
                      l.featured ? "text-ink" : "text-paper"
                    }`}
                  >
                    {l.price}
                  </span>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={l.img}
                    alt={l.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Circular arrow button anchored into the clipped corner */}
              <button
                aria-label={`Open ${l.name}`}
                className={`absolute right-3 top-3 z-10 grid h-12 w-12 place-items-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:rotate-12 ${
                  l.featured ? "bg-ink text-primary" : "bg-primary text-ink"
                }`}
              >
                <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-display text-3xl font-black uppercase leading-tight md:text-4xl">
            Keep <span className="text-primary [text-shadow:_-1px_-1px_0_var(--ink),1px_-1px_0_var(--ink),-1px_1px_0_var(--ink),1px_1px_0_var(--ink)]">creating</span> until you <br />
            find your <span className="text-primary [text-shadow:_-1px_-1px_0_var(--ink),1px_-1px_0_var(--ink),-1px_1px_0_var(--ink),1px_1px_0_var(--ink)]">audience</span>
          </p>
          <button className="mt-6 rounded-full bg-primary px-8 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground">
            More LUTs
          </button>
        </div>
      </div>
    </section>
  );
}
