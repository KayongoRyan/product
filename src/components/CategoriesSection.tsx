import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { label: "IG Poster", slug: "ig-poster" },
  { label: "Representation", slug: "representation" },
  { label: "Flyer", slug: "flyer" },
  { label: "Invitation", slug: "invitation" },
  { label: "Brochure", slug: "brochure" },
  { label: "Business Card", slug: "business-card" },
  { label: "Album Cover", slug: "album-cover" },
  { label: "Logo", slug: "logo" },
  { label: "Banner", slug: "banner" },
];

export function CategoriesSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-paper px-5 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-black uppercase tracking-tight md:text-5xl">
            Browse by category
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous categories"
              className="rounded-[3px] border-[1.5px] border-ink bg-paper p-2 transition-all hover:bg-ink hover:text-paper"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next categories"
              className="rounded-[3px] border-[1.5px] border-ink bg-paper p-2 transition-all hover:bg-ink hover:text-paper"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 md:gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/categories/$slug"
              params={{ slug: c.slug }}
              className="group flex w-[calc(50%-0.375rem)] shrink-0 snap-start items-center justify-between rounded-[3px] border-[1.5px] border-ink bg-paper px-5 py-5 font-display text-base font-bold uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-paper sm:w-[calc(33.333%-0.5rem)] md:text-lg"
            >
              <span>{c.label}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
