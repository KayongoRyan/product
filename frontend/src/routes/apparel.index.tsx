import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { apparelProducts } from "@/data/apparel";

export const Route = createFileRoute("/apparel/")({
  head: () => ({
    meta: [
      { title: "Apparel — Norf Crebions" },
      { name: "description", content: "Curated apparel and premium essentials from Norf." },
      { property: "og:title", content: "Apparel — Norf Crebions" },
      {
        property: "og:description",
        content: "Curated apparel and premium essentials from Norf.",
      },
    ],
  }),
  component: ApparelPage,
});

function ApparelPage() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const handleCardEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => {});
  };

  const handleCardLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <main className="min-h-screen bg-paper px-4 py-24 text-ink md:px-6">
      <Nav />
      <div className="mx-auto max-w-[1400px]">
        <Link
          to="/"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-ink"
        >
          ← Back home
        </Link>

        <div className="mt-6">
          <h1 className="font-display text-5xl font-black uppercase tracking-tight md:text-7xl">
            Apparel
          </h1>
        </div>

        <section className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {apparelProducts.map((product, index) => (
            <Link
              key={`${product.name}-${index}`}
              to="/apparel/$productId"
              params={{ productId: product.id }}
              className="group"
              onMouseEnter={() => handleCardEnter(index)}
              onMouseLeave={() => handleCardLeave(index)}
              onFocus={() => handleCardEnter(index)}
              onBlur={() => handleCardLeave(index)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#eeeeee]">
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-0"
                />
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={product.hoverVideo}
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <h3 className="font-sans text-[11px] font-bold leading-tight text-ink/90 md:text-xs">
                  {product.name}
                </h3>
                <span className="shrink-0 font-mono text-[11px] font-normal text-ink md:text-xs">
                  {product.price}
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
