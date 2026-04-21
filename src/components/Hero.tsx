import { Marquee } from "./Marquee";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/10 to-ink/80" />

      {/* huge N∅ */}
      <div className="relative z-10 flex min-h-[88vh] items-center justify-center pt-24 pb-4">
        <h1
          className="select-none font-display text-[28vw] leading-none tracking-tighter text-paper md:text-[22vw]"
          style={{ textShadow: "0 6px 40px rgba(0,0,0,0.45)" }}
        >
          N<span className="inline-block">Ø</span>
        </h1>
      </div>

      {/* products marquee */}
      <div className="relative z-10 border-y border-paper/60 bg-ink py-2">
        <Marquee
          items={["PRODUCTS", "PRODUCTS", "PRODUCTS", "PRODUCTS", "PRODUCTS", "PRODUCTS"]}
          itemClassName="font-display text-2xl md:text-3xl font-normal text-stroke-paper-thin tracking-tight"
          separator={<span className="text-paper/70 text-xl">•</span>}
        />
      </div>
    </section>
  );
}
