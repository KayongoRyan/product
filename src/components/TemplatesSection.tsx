const templates = [
  {
    title: "VARNE",
    tag: "Portfolio",
    bg: "bg-[#1f3a1f]",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=600&q=80",
  },
  {
    title: "FRANCESCO",
    tag: "Editorial",
    bg: "bg-stone-100",
    img: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=600&q=80",
  },
  {
    title: "exGrana",
    tag: "Branding",
    bg: "bg-ink",
    text: "text-paper",
    img: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=600&q=80",
  },
  {
    title: "MANN",
    tag: "Representation",
    bg: "bg-ink",
    text: "text-paper",
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80",
  },
];

export function TemplatesSection() {
  return (
    <section id="templates" className="bg-paper px-5 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              01 — Templates
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Shop Squarespace <br />
              <span className="text-stroke">templates</span>
            </h2>
          </div>
          <button className="hidden rounded-full bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[0_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5 md:inline-block">
            View all
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {templates.map((t) => (
            <article
              key={t.title}
              className={`group relative aspect-[3/4] overflow-hidden rounded-2xl border-2 border-ink ${t.bg} ${t.text ?? "text-ink"}`}
            >
              <img
                src={t.img}
                alt={t.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-90">
                  {t.tag}
                </span>
                <h3 className="font-display text-3xl font-black uppercase leading-none tracking-tight md:text-4xl">
                  {t.title}
                </h3>
              </div>
              <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                ↗
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Stop hiding behind boring designs
          </p>
          <h3 className="mt-3 font-display text-4xl font-black md:text-6xl">
            Not Your Average <br /> templates
          </h3>
        </div>

        {/* Two big cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <FeatureCard
            kicker="Create a Site That Actually Stands Out"
            heading="Creative Designer"
            img="https://images.unsplash.com/photo-1503602642458-232111445657?w=900&q=80"
          />
          <FeatureCard
            kicker="Social Media Templates That Demand Attention"
            heading="ASAN"
            img="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  kicker,
  heading,
  img,
}: {
  kicker: string;
  heading: string;
  img: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-3xl border-2 border-ink bg-ink text-paper">
      <div className="flex items-start justify-between p-6">
        <p className="max-w-[55%] font-mono text-xs uppercase tracking-[0.2em] opacity-90">
          {kicker}
        </p>
      </div>
      <div className="px-6">
        <h4 className="font-display text-5xl font-black leading-[0.9] md:text-7xl">
          {heading}
        </h4>
      </div>
      <div className="relative mt-6 aspect-[16/10] w-full">
        <img src={img} alt={heading} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="flex justify-end p-4">
        <button className="rounded-full bg-primary px-5 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-primary-foreground">
          Shop Now
        </button>
      </div>
    </article>
  );
}
