import { Link } from "@tanstack/react-router";

const templates = [
  {
    id: "template-1",
    name: "Template 01",
    price: "$79",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    alt: "Template 01 preview",
  },
  {
    id: "template-2",
    name: "Template 02",
    price: "$99",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    alt: "Template 02 preview",
  },
  {
    id: "template-3",
    name: "Template 03",
    price: "$129",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    alt: "Template 03 preview",
  },
  {
    id: "template-4",
    name: "Template 04",
    price: "$89",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    alt: "Template 04 preview",
  },
];

export function TemplatesCardsSection() {
  return (
    <section className="bg-paper">
      <div className="mx-auto w-full max-w-[1800px] px-4 pt-8 md:px-6 md:pt-10">
        <span className="w-fit font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
          templates
        </span>
      </div>

      <div className="w-full border-b border-ink" />

      <div className="mx-auto w-full max-w-[1800px] px-4 pb-10 md:px-6 md:pb-12">
        <div className="mt-10 grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex h-full flex-col justify-start sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-[clamp(1.75rem,4.2vw,2.75rem)] font-black tracking-tight text-ink">
              Templates
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/75 md:text-base">
              Browse our ready-made templates and launch your next project in minutes. Pick a design
              you love, add your content, and you're done.
            </p>
          </div>

          {templates.slice(1).map((item, index) =>
            index === 0 ? (
              <div key="templates-shop-all-card" className="block">
                <div className="grid aspect-[4/5] items-start justify-items-center bg-paper pt-3">
                  <Link
                    to="/templates"
                    className="inline-flex items-center justify-center border border-ink bg-ink px-5 py-2.5 font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-transparent hover:text-ink"
                  >
                    Shop all →
                  </Link>
                </div>
                <div className="mt-3 h-[28px]" aria-hidden="true" />
              </div>
            ) : (
              <Link key={item.id} to="/templates" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#eeeeee]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
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
            ),
          )}
        </div>
      </div>
    </section>
  );
}
