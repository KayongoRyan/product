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
          <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-ink">
            ▶
          </div>
          <h2 className="text-center font-display text-4xl font-black tracking-tight md:text-6xl">
            Elevate Your Style With <br /> Bold Fashion
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-5">
          {looks.map((l, i) => (
            <div
              key={i}
              className={`relative aspect-[3/4] overflow-hidden rounded-3xl border-2 border-ink ${i === 1 || i === 3 ? "md:aspect-[3/5]" : ""}`}
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

        <div className="mt-12 grid gap-8 border-t-2 border-ink pt-8 md:grid-cols-2">
          <p className="text-sm text-muted-foreground">
            <span className="mr-2 font-display text-xl font-black text-ink">"</span>
            Turns out, a beautiful & strategic website doesn't have to start from scratch.
          </p>
          <div className="flex items-start justify-between">
            <div>
              <p className="font-display text-3xl font-black">01</p>
              <p className="mt-2 text-sm">
                Setup your fashion with the latest trend
              </p>
            </div>
            <span className="text-2xl">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
