import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { apparelProducts } from "@/data/apparel";

export function ApparelSection() {
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
    <section className="bg-paper">
      <div className="mx-auto w-full max-w-[1800px] px-4 pt-8 md:px-6 md:pt-10">
        <div className="mb-3 sm:mb-4">
          <span className="w-fit font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
            Apparel
          </span>
        </div>
      </div>

      <div className="w-full border-b border-ink">
        <div className="mx-auto max-w-[1800px] px-4 pb-6 md:px-6 md:pb-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-display text-[clamp(1.75rem,4.2vw,2.75rem)] font-black leading-tight tracking-tight text-ink">
              Apparel
            </h2>
            <Link
              to="/apparel"
              className="inline-flex w-fit shrink-0 items-center justify-center border border-ink bg-ink px-5 py-2.5 font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-transparent hover:text-ink"
            >
              Shop all →
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1800px] px-4 pb-10 md:px-6 md:pb-12">
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </div>
    </section>
  );
}
