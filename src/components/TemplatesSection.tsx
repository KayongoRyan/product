type Featured = { title: string; img: string };
type Template = { title: string; img: string; bg: string };

const websiteFeatured: Featured = {
  title: "WEBSITE TEMPLATES",
  img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=80",
};

const websiteTemplates: Template[] = [
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
];

const presentationFeatured: Featured = {
  title: "PRESENTATION TEMPLATES",
  img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=900&q=80",
};

const presentationTemplates: Template[] = [
  {
    title: "Pitch Deck Pro",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80",
    bg: "bg-[#efe9dc]",
  },
  {
    title: "Brand Story",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80",
    bg: "bg-[#e6dfd0]",
  },
  {
    title: "Investor Memo",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80",
    bg: "bg-[#1a1a1a]",
  },
  {
    title: "Quarterly Review",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&q=80",
    bg: "bg-[#d4cfc4]",
  },
];

function TemplateBlock({
  featured,
  templates,
}: {
  featured: Featured;
  templates: Template[];
}) {
  return (
    <div className="grid items-center gap-6 md:grid-cols-[minmax(0,260px)_1fr]">
      {/* Featured left card */}
      <article className="flex flex-col items-center">
        <div className="relative w-full max-w-[240px] overflow-hidden rounded-2xl border-2 border-ink bg-[#f5efe2]">
          <div className="aspect-[3/4] w-full">
            <img
              src={featured.img}
              alt={featured.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <h3 className="mt-5 text-center font-display text-base font-black uppercase tracking-widest text-ink">
          {featured.title}
        </h3>
        <button className="mt-3 rounded-full bg-primary px-6 py-2.5 font-display text-xs font-black uppercase tracking-widest text-primary-foreground shadow-[0_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5">
          View More
        </button>
      </article>

      {/* Layout: tall | stacked(2 over 3) | tall */}
      <div className="grid grid-cols-3 gap-3 h-[420px] md:h-[480px]">
        <article className={`group relative overflow-hidden rounded-xl border-2 border-ink h-full ${templates[0].bg}`}>
          <img src={templates[0].img} alt={templates[0].title} loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-primary text-xs text-primary-foreground">↗</div>
        </article>

        <div className="flex flex-col h-full gap-3">
          <article className={`group relative overflow-hidden rounded-xl border-2 border-ink flex-1 ${templates[1].bg}`}>
            <img src={templates[1].img} alt={templates[1].title} loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-primary text-xs text-primary-foreground">↗</div>
          </article>
          <article className={`group relative overflow-hidden rounded-xl border-2 border-ink flex-1 ${templates[2].bg}`}>
            <img src={templates[2].img} alt={templates[2].title} loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-primary text-xs text-primary-foreground">↗</div>
          </article>
        </div>

        <article className={`group relative overflow-hidden rounded-xl border-2 border-ink h-full ${templates[3].bg}`}>
          <img src={templates[3].img} alt={templates[3].title} loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-primary text-xs text-primary-foreground">↗</div>
        </article>
      </div>
    </div>
  );
}

export function TemplatesSection() {
  return (
    <section id="templates" className="bg-paper px-5 py-20 md:px-10">
      <div className="mx-auto max-w-7xl space-y-20">
        {/* Block 1 — Website Templates */}
        <div>
          <div className="mb-12 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              01 — Shop
            </p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase tracking-tight md:text-6xl">
              Shop Squarespace Templates
            </h2>
          </div>
          <TemplateBlock featured={websiteFeatured} templates={websiteTemplates} />
        </div>

        {/* Block 2 — Presentation Templates */}
        <div>
          <TemplateBlock featured={presentationFeatured} templates={presentationTemplates} />
        </div>
      </div>
    </section>
  );
}
