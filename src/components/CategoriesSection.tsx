import { Link } from "@tanstack/react-router";

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
  return (
    <section className="bg-paper px-5 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-black uppercase tracking-tight md:text-5xl">
            Browse by category
          </h2>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-ink/60 md:block">
            9 collections
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/categories/$slug"
              params={{ slug: c.slug }}
              className="group flex items-center justify-between rounded-[3px] border-[1.5px] border-ink bg-paper px-5 py-5 font-display text-base font-bold uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-paper md:text-lg"
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
