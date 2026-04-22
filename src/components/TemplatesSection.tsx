type Featured = { title: string; img: string };
type Template = { title: string; images: string[]; bg: string; direction: "up" | "down" };

const websiteFeatured: Featured = {
  title: "WEBSITE TEMPLATES",
  img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=80",
};

const websiteTemplates: Template[] = [
  {
    title: "Future of Private Equity",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80",
    ],
    bg: "bg-[#f5efe2]",
    direction: "up",
  },
  {
    title: "From Dusk Till Dawn",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=700&q=80",
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=700&q=80",
      "https://images.unsplash.com/photo-1494253109108-2e30c049369b?w=700&q=80",
    ],
    bg: "bg-[#e9e4dc]",
    direction: "down",
  },
  {
    title: "Urban Streetwear Hub",
    images: [
      "https://images.unsplash.com/photo-1483721310020-03333e577078?w=700&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=80",
    ],
    bg: "bg-[#1a1a1a]",
    direction: "down",
  },
  {
    title: "Holiday Collection",
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=80",
      "https://images.unsplash.com/photo-1485518882345-15568b007407?w=700&q=80",
    ],
    bg: "bg-[#d8d4cc]",
    direction: "up",
  },
];

const presentationFeatured: Featured = {
  title: "PRESENTATION TEMPLATES",
  img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=900&q=80",
};

const presentationTemplates: Template[] = [
  {
    title: "Pitch Deck Pro",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&q=80",
    ],
    bg: "bg-[#efe9dc]",
    direction: "up",
  },
  {
    title: "Brand Story",
    images: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80",
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=700&q=80",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=700&q=80",
    ],
    bg: "bg-[#e6dfd0]",
    direction: "down",
  },
  {
    title: "Investor Memo",
    images: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80",
    ],
    bg: "bg-[#1a1a1a]",
    direction: "down",
  },
  {
    title: "Quarterly Review",
    images: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80",
    ],
    bg: "bg-[#d4cfc4]",
    direction: "up",
  },
];

function FlowingImages({ images, direction, title }: { images: string[]; direction: "up" | "down"; title: string }) {
  // Duplicate for seamless loop
  const loop = [...images, ...images];
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-x-0 flex flex-col ${direction === "up" ? "flow-up" : "flow-down"}`}>
        {loop.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={title}
            loading="lazy"
            className="w-full aspect-[3/4] object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

function TemplateBlock({
  featured,
  templates,
  featuredSide = "left",
}: {
  featured: Featured;
  templates: Template[];
  featuredSide?: "left" | "right";
}) {
  const isRight = featuredSide === "right";
  return (
    <div
      className={`grid items-center gap-12 md:gap-20 md:grid-cols-[minmax(0,220px)_minmax(0,820px)] md:justify-center`}
    >
      {/* Featured card */}
      <article className={`flex flex-col items-center ${isRight ? "md:order-2" : "md:order-1"}`}>
        <div className="relative w-full max-w-[240px] overflow-hidden rounded-[3px] bg-[#f5efe2]">
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
      <div className={`grid grid-cols-3 gap-6 md:gap-8 h-[420px] md:h-[480px] w-full ${isRight ? "md:order-1" : "md:order-2"}`}>
        <article className={`relative overflow-hidden rounded-[3px] h-full ${templates[0].bg}`}>
          <FlowingImages images={templates[0].images} direction={templates[0].direction} title={templates[0].title} />
        </article>

        <div className="flex flex-col h-full gap-6 md:gap-8">
          <article className={`relative overflow-hidden rounded-[3px] flex-1 ${templates[1].bg}`}>
            <FlowingImages images={templates[1].images} direction={templates[1].direction} title={templates[1].title} />
          </article>
          <article className={`relative overflow-hidden rounded-[3px] flex-1 ${templates[2].bg}`}>
            <FlowingImages images={templates[2].images} direction={templates[2].direction} title={templates[2].title} />
          </article>
        </div>

        <article className={`relative overflow-hidden rounded-[3px] h-full ${templates[3].bg}`}>
          <FlowingImages images={templates[3].images} direction={templates[3].direction} title={templates[3].title} />
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
          <TemplateBlock featured={presentationFeatured} templates={presentationTemplates} featuredSide="right" />
        </div>
      </div>
    </section>
  );
}
