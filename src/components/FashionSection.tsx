const looks = [
  { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80", w: "row-span-1" },
  { img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80", w: "row-span-2" },
  { img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80", w: "row-span-1" },
  { img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80", w: "row-span-2" },
  { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80", w: "row-span-1" },
];

export function FashionSection() {
  return (
    <section id="fashion" className="bg-paper px-5 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-6">
          <div className="relative h-24 w-24 shrink-0">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_12s_linear_infinite]">
              <defs>
                <path id="fashion-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <text className="fill-ink font-display text-[11px] font-bold uppercase tracking-[0.2em]">
                <textPath href="#fashion-circle" startOffset="0">
                  Norf New Merch • Let's Shop •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper">
                ▶
              </div>
            </div>
          </div>
          <h2 className="text-center font-display text-4xl font-black tracking-tight md:text-6xl">
            Elevate Your Style With <br /> Bold Fashion
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-5">
          {looks.map((l, i) => (
            <div
              key={i}
              className={`relative aspect-[3/4] overflow-hidden rounded-tl-[2.5rem] rounded-tr-[2.5rem] ${i === 1 || i === 3 ? "md:aspect-[3/5]" : ""}`}
            >
              <img src={l.img} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button className="rounded-full bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[0_4px_0_0_var(--ink)]">
            Explore More →
          </button>
        </div>

        <div className="mt-16 overflow-hidden rounded-[28px] bg-ink px-8 py-16 text-paper shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] md:px-20 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left content */}
            <div className="flex flex-col gap-8">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl font-semibold text-primary">01</span>
                <span className="text-xs uppercase tracking-[0.3em] text-paper/60">
                  Setup your fashion with the latest trend
                </span>
              </div>

              <h3 className="font-display text-5xl font-black leading-[1.05] tracking-tight md:text-[64px]">
                Elevate your wardrobe <br />
                with <span className="text-primary">bold</span> style
              </h3>

              <p className="max-w-md text-base leading-relaxed text-paper/70">
                Turns out, a beautiful & strategic wardrobe doesn't have to start from
                scratch. Curated drops, timeless pieces, ready when you are.
              </p>

              <div>
                <button className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-ink shadow-[0_8px_24px_-8px_rgba(229,164,67,0.6)] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_12px_28px_-8px_rgba(229,164,67,0.8)]">
                  Explore More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>

            {/* Right image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-paper/10">
              <img
                src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=1000&q=80"
                alt="Fashion model in studio"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
