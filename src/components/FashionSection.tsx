type Look = {
  img: string;
  alt: string;
  // desktop absolute placement
  pos: string;
  size: string;
  rotate: string;
  z: string;
  // organic clipping per card
  radius: string;
};

const looks: Look[] = [
  // Left cluster
  {
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80",
    alt: "Earth-tone bomber jacket look",
    pos: "lg:left-[2%] lg:top-[6%]",
    size: "lg:w-[19%] lg:h-[42%]",
    rotate: "lg:-rotate-[3deg]",
    z: "lg:z-20",
    radius: "[border-radius:42%_58%_38%_62%/55%_45%_55%_45%]",
  },
  {
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900&q=80",
    alt: "Streetwear silhouette",
    pos: "lg:left-[18%] lg:top-[22%]",
    size: "lg:w-[22%] lg:h-[64%]",
    rotate: "lg:rotate-[2deg]",
    z: "lg:z-30",
    radius: "[border-radius:60%_40%_55%_45%/45%_55%_45%_55%]",
  },
  // Center focal
  {
    img: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=1100&q=80",
    alt: "Editorial portrait — focal look",
    pos: "lg:left-1/2 lg:top-[8%] lg:-translate-x-1/2",
    size: "lg:w-[26%] lg:h-[78%]",
    rotate: "lg:rotate-0",
    z: "lg:z-40",
    radius: "[border-radius:38%_62%_45%_55%/50%_50%_50%_50%]",
  },
  // Right cluster
  {
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=80",
    alt: "Patterned bold look",
    pos: "lg:right-[18%] lg:top-[18%]",
    size: "lg:w-[22%] lg:h-[60%]",
    rotate: "lg:-rotate-[2deg]",
    z: "lg:z-30",
    radius: "[border-radius:55%_45%_60%_40%/55%_45%_55%_45%]",
  },
  {
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    alt: "Tailored outerwear detail",
    pos: "lg:right-[2%] lg:top-[10%]",
    size: "lg:w-[19%] lg:h-[40%]",
    rotate: "lg:rotate-[3deg]",
    z: "lg:z-20",
    radius: "[border-radius:50%_50%_38%_62%/45%_55%_45%_55%]",
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
    alt: "Accessory detail",
    pos: "lg:right-[4%] lg:bottom-[4%]",
    size: "lg:w-[17%] lg:h-[34%]",
    rotate: "lg:-rotate-[4deg]",
    z: "lg:z-10",
    radius: "[border-radius:60%_40%_50%_50%/40%_60%_40%_60%]",
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

        {/* Editorial asymmetrical composition */}
        <div className="mt-14">
          {/* Mobile / tablet: stacked horizontal scroll preserving hierarchy */}
          <div className="flex gap-4 overflow-x-auto pb-4 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[looks[2], looks[1], looks[3], looks[0], looks[4], looks[5]].map((l, i) => (
              <div
                key={i}
                className={`relative shrink-0 overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out hover:scale-[1.05] ${l.radius} ${
                  i === 0 ? "h-[420px] w-[260px]" : "h-[340px] w-[210px]"
                }`}
              >
                <img src={l.img} alt={l.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>

          {/* Desktop: absolute editorial composition */}
          <div className="relative hidden h-[640px] w-full lg:block">
            {looks.map((l, i) => (
              <div
                key={i}
                className={`group absolute overflow-hidden shadow-[0_30px_60px_-25px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:z-50 hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_40px_80px_-25px_rgba(0,0,0,0.5)] ${l.pos} ${l.size} ${l.rotate} ${l.z} ${l.radius}`}
              >
                <img
                  src={l.img}
                  alt={l.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            ))}
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
