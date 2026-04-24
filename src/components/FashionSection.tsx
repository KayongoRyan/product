type Look = {
  img: string;
  alt: string;
  pos: string;
  size: string;
  rotate: string;
  z: string;
  shadow: string;
};

const looks: Look[] = [
  // ---------- LEFT CLUSTER (3 cards) ----------
  // Left #1 — far left, top
  {
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80",
    alt: "Earth-tone bomber jacket look",
    pos: "lg:left-[1%] lg:top-[4%]",
    size: "lg:w-[16%] lg:h-[42%]",
    rotate: "lg:-rotate-[3deg]",
    z: "lg:z-10",
    shadow: "shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)]",
  },
  // Left #2 — inner left, middle (taller)
  {
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900&q=80",
    alt: "Streetwear silhouette",
    pos: "lg:left-[18%] lg:top-[18%]",
    size: "lg:w-[18%] lg:h-[58%]",
    rotate: "lg:rotate-[2deg]",
    z: "lg:z-20",
    shadow: "shadow-[0_28px_55px_-22px_rgba(0,0,0,0.42)]",
  },
  // Left #3 — far left, bottom
  {
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    alt: "Tailored outerwear detail",
    pos: "lg:left-[3%] lg:bottom-[4%]",
    size: "lg:w-[15%] lg:h-[38%]",
    rotate: "lg:rotate-[1deg]",
    z: "lg:z-10",
    shadow: "shadow-[0_18px_40px_-22px_rgba(0,0,0,0.32)]",
  },

  // ---------- CENTER FOCAL (1 card) ----------
  {
    img: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=1100&q=80",
    alt: "Editorial portrait — focal look",
    pos: "lg:left-[38%] lg:top-[2%]",
    size: "lg:w-[24%] lg:h-[92%]",
    rotate: "lg:rotate-0",
    z: "lg:z-40",
    shadow: "shadow-[0_40px_80px_-25px_rgba(0,0,0,0.55)]",
  },

  // ---------- RIGHT CLUSTER (3 cards) ----------
  // Right #1 — inner right, top
  {
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=80",
    alt: "Patterned bold look",
    pos: "lg:right-[18%] lg:top-[6%]",
    size: "lg:w-[17%] lg:h-[44%]",
    rotate: "lg:-rotate-[2deg]",
    z: "lg:z-20",
    shadow: "shadow-[0_28px_55px_-22px_rgba(0,0,0,0.42)]",
  },
  // Right #2 — far right, middle (taller)
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
    alt: "Accessory detail",
    pos: "lg:right-[1%] lg:top-[22%]",
    size: "lg:w-[16%] lg:h-[56%]",
    rotate: "lg:rotate-[3deg]",
    z: "lg:z-10",
    shadow: "shadow-[0_22px_45px_-22px_rgba(0,0,0,0.38)]",
  },
  // Right #3 — inner right, bottom
  {
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    alt: "Minimal layered look",
    pos: "lg:right-[20%] lg:bottom-[2%]",
    size: "lg:w-[16%] lg:h-[40%]",
    rotate: "lg:-rotate-[1deg]",
    z: "lg:z-20",
    shadow: "shadow-[0_22px_45px_-22px_rgba(0,0,0,0.4)]",
  },
];

export function FashionSection() {
  return (
    <section id="fashion" className="bg-paper px-5 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex flex-col items-center justify-center gap-12">
          <div className="relative h-24 w-24 shrink-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:h-32 md:w-32">
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
              <div className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper md:h-14 md:w-14">
                ▶
              </div>
            </div>
          </div>
          <h2 className="text-center font-display text-4xl font-black tracking-tight md:text-6xl">
            Elevate your style <br /> with Norf
          </h2>
        </div>

        {/* Editorial asymmetrical composition: 3 left · 1 center · 3 right */}
        <div className="mt-14">
          {/* Mobile / tablet: editorial stacked sections — Left trio · Focal · Right trio */}
          <div className="lg:hidden">
            <div className="flex flex-col gap-6">
              {/* LEFT trio — horizontal scroll */}
              <div>
                <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.3em] text-ink/50">
                  ← Left Looks
                </span>
                <div className="flex gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {[looks[0], looks[1], looks[2]].map((l, i) => (
                    <div
                      key={`l-${i}`}
                      className={`relative shrink-0 overflow-hidden rounded-xl shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out hover:scale-[1.03] ${
                        i === 1 ? "h-[300px] w-[180px]" : "h-[260px] w-[160px]"
                      }`}
                    >
                      <img src={l.img} alt={l.alt} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* CENTER focal — dominant, centered */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-[340px]">
                  <span className="mb-3 block text-center text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                    ★ Focal Look
                  </span>
                  <div className="group relative h-[480px] w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out hover:scale-[1.03]">
                    <img
                      src={looks[3].img}
                      alt={looks[3].alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT trio — horizontal scroll */}
              <div>
                <span className="mb-3 block text-right text-[10px] font-bold uppercase tracking-[0.3em] text-ink/50">
                  Right Looks →
                </span>
                <div className="flex justify-end gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {[looks[4], looks[5], looks[6]].map((l, i) => (
                    <div
                      key={`r-${i}`}
                      className={`relative shrink-0 overflow-hidden rounded-xl shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out hover:scale-[1.03] ${
                        i === 1 ? "h-[300px] w-[180px]" : "h-[260px] w-[160px]"
                      }`}
                    >
                      <img src={l.img} alt={l.alt} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: 5-column · 3-row grid — 3 left (col 1) · focal (cols 2-4, rows 2) · 3 right (col 5) */}
          <div className="hidden lg:grid lg:grid-cols-5 lg:grid-rows-3 lg:gap-5 lg:h-[640px] lg:w-full">
            {/* LEFT trio — column 1 */}
            <div className="group col-start-1 row-start-1 overflow-hidden rounded-xl shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:scale-[1.03]">
              <img src={looks[0].img} alt={looks[0].alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="group col-start-1 row-start-2 overflow-hidden rounded-xl shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:scale-[1.03]">
              <img src={looks[1].img} alt={looks[1].alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="group col-start-1 row-start-3 overflow-hidden rounded-xl shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:scale-[1.03]">
              <img src={looks[2].img} alt={looks[2].alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>

            {/* CENTER focal — reduced size, only middle row, columns 2-4 */}
            <div className="group col-start-3 row-start-2 overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-[1.03]">
              <img src={looks[3].img} alt={looks[3].alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>

            {/* RIGHT trio — column 5 */}
            <div className="group col-start-5 row-start-1 overflow-hidden rounded-xl shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:scale-[1.03]">
              <img src={looks[4].img} alt={looks[4].alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="group col-start-5 row-start-2 overflow-hidden rounded-xl shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:scale-[1.03]">
              <img src={looks[5].img} alt={looks[5].alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="group col-start-5 row-start-3 overflow-hidden rounded-xl shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:scale-[1.03]">
              <img src={looks[6].img} alt={looks[6].alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
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
