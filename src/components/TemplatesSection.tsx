const featured = {
  title: "WEBSITE TEMPLATES",
  img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=80",
};

const templates = [
  {
    title: "Future of Private Equity",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
    bg: "bg-[#f5efe2]",
  },
  {
    title: "From Dusk Till Dawn",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=700&q=80",
    bg: "bg-[#e9e4dc]",
  },
  {
    title: "Urban Streetwear Hub",
    img: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=700&q=80",
    bg: "bg-[#1a1a1a]",
  },
  {
    title: "Holiday Collection",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=80",
    bg: "bg-[#d8d4cc]",
  },
  {
    title: "Editorial Studio",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700&q=80",
    bg: "bg-[#ece6d8]",
  },
];

export function TemplatesSection() {
  return (
    <section id="templates" className="bg-paper px-5 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            01 — Shop
          </p>
          <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight md:text-6xl">
            Shop Squarespace Templates
          </h2>
        </div>

        {/* Single horizontal row: featured + templates */}
        <div className="-mx-5 overflow-x-auto pb-4 md:-mx-10">
          <div className="flex items-start gap-4 px-5 md:gap-6 md:px-10">
            {/* Featured card */}
            <article className="flex w-[240px] flex-shrink-0 flex-col items-center md:w-[300px]">
              <div className="relative w-full overflow-hidden rounded-2xl border-2 border-ink bg-[#f5efe2]">
                <div className="aspect-[3/4] w-full">
                  <img
                    src={featured.img}
                    alt={featured.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <h3 className="mt-5 text-center font-display text-base font-black uppercase tracking-widest text-ink md:text-lg">
                {featured.title}
              </h3>
              <button className="mt-3 rounded-full bg-primary px-6 py-2.5 font-display text-xs font-black uppercase tracking-widest text-primary-foreground shadow-[0_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5">
                View More
              </button>
            </article>

            {/* Template cards */}
            {templates.map((t) => (
              <article
                key={t.title}
                className={`group relative aspect-[3/4] w-[220px] flex-shrink-0 overflow-hidden rounded-2xl border-2 border-ink md:w-[260px] ${t.bg}`}
              >
                <img
                  src={t.img}
                  alt={t.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                  ↗
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
