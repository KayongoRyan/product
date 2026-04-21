import { Marquee } from "./Marquee";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink text-paper">
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
      <div className="relative z-10 flex min-h-[80vh] items-center justify-center pt-24">
        <h1
          className="select-none font-display text-[28vw] leading-none tracking-tighter text-paper md:text-[22vw]"
          style={{ textShadow: "0 6px 40px rgba(0,0,0,0.45)" }}
        >
          N<span className="inline-block">Ø</span>
        </h1>
      </div>

      {/* tagline */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-10 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-paper/80">
          Norf Crebions · Studio for the bold
        </p>
        <p className="mt-4 font-display text-2xl font-medium md:text-3xl">
          Stop hiding behind boring designs.
        </p>
      </div>

      {/* products marquee */}
      <div className="relative z-10 border-y-2 border-paper bg-ink py-4">
        <Marquee
          items={["PRODUCTS", "PRODUCTS", "PRODUCTS", "PRODUCTS", "PRODUCTS"]}
          itemClassName="font-display text-5xl md:text-7xl font-black text-stroke-paper tracking-tight"
          separator={<span className="text-primary text-5xl md:text-7xl">●</span>}
        />
      </div>
    </section>
  );
}
