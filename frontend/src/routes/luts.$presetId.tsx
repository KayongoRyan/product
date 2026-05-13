import { useEffect, useMemo, useState } from "react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { getLightroomPresetById, lightroomPresets } from "@/data/lightroomPresets";

export const Route = createFileRoute("/luts/$presetId")({
  loader: ({ params }) => {
    const preset = getLightroomPresetById(params.presetId);
    if (!preset) throw notFound();
    return { preset };
  },
  component: LutsPresetDetailPage,
});

function LutsPresetDetailPage() {
  const { preset } = Route.useLoaderData();

  const gallery = useMemo(
    () =>
      [
        { src: preset.image, alt: preset.alt, thumbLabel: "Main image" },
        { src: preset.beforeImage, alt: preset.beforeAlt, thumbLabel: "Before" },
        { src: preset.afterImage, alt: preset.afterAlt, thumbLabel: "After" },
      ] as const,
    [preset],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const active = gallery[activeIndex] ?? gallery[0];

  useEffect(() => {
    setActiveIndex(0);
  }, [preset.id]);

  return (
    <main className="min-h-screen bg-paper px-4 py-24 text-ink md:px-6">
      <Nav />
      <div className="mx-auto max-w-[1400px]">
        <Link
          to="/luts"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-ink"
        >
          ← Back to Powergrades &amp; LUTs
        </Link>

        <section className="mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex gap-3 sm:gap-4">
            <div
              className="flex w-[52px] shrink-0 flex-col gap-2 sm:w-16"
              role="tablist"
              aria-label="Gallery images"
            >
              {gallery.map((item, index) => (
                <button
                  key={item.thumbLabel}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-label={`Show ${item.thumbLabel}`}
                  onClick={() => setActiveIndex(index)}
                  className={`aspect-square overflow-hidden rounded-md bg-[#efefef] ${
                    activeIndex === index
                      ? "ring-[3px] ring-ink ring-offset-0"
                      : "ring-1 ring-ink/20 hover:ring-2 hover:ring-ink/50"
                  }`}
                >
                  <img
                    src={item.src}
                    alt=""
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </button>
              ))}
            </div>

            <div className="min-w-0 flex-1">
              <div className="aspect-[4/5] overflow-hidden bg-[#efefef]">
                <img src={active.src} alt={active.alt} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:max-w-xl">
            <h1 className="font-display text-3xl font-black uppercase tracking-tight md:text-4xl">
              {preset.name}
            </h1>
            <p className="mt-3 font-mono text-sm font-normal">{preset.price}</p>
            <p className="mt-8 text-sm leading-relaxed text-ink/80">{preset.description}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="border border-ink bg-transparent px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Add to cart
              </button>
              <button
                type="button"
                className="border border-ink bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/90"
              >
                Buy now
              </button>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink/50">More presets</p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {lightroomPresets
              .filter((p) => p.id !== preset.id)
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item.id}
                  to="/luts/$presetId"
                  params={{ presetId: item.id }}
                  className="group block"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[#efefef]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}
