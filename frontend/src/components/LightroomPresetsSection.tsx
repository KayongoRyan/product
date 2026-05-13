import { Link } from "@tanstack/react-router";
import { lightroomPresets } from "@/data/lightroomPresets";

export function LightroomPresetsSection() {
  return (
    <section className="bg-paper">
      <div className="mx-auto w-full max-w-[1800px] px-4 pt-8 md:px-6 md:pt-10">
        <div className="mb-3 sm:mb-4">
          <span className="w-fit font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
            Presets
          </span>
        </div>
      </div>

      <div className="w-full border-b border-ink">
        <div className="mx-auto max-w-[1800px] px-4 pb-6 md:px-6 md:pb-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-display text-[clamp(1.75rem,4.2vw,2.75rem)] font-black leading-tight tracking-tight text-ink">
              Lightroom Presets
            </h2>
            <Link
              to="/lightroom-presets"
              className="inline-flex w-fit shrink-0 items-center justify-center border border-ink bg-ink px-5 py-2.5 font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-transparent hover:text-ink"
            >
              Shop all →
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1800px] px-4 pb-10 md:px-6 md:pb-12">
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {lightroomPresets.map((item) => (
            <Link
              key={item.id}
              to="/lightroom-presets/$presetId"
              params={{ presetId: item.id }}
              className="block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#eeeeee]">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <h3 className="font-sans text-[11px] font-bold leading-tight text-ink/90 md:text-xs">
                  {item.name}
                </h3>
                <span className="shrink-0 font-mono text-[11px] font-normal text-ink md:text-xs">
                  {item.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
