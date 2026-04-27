import { Link } from "@tanstack/react-router";

const categories = [
  { label: "IG Poster", to: "/categories/ig-poster" as const },
  { label: "Representation", to: "/categories/representation" as const },
  { label: "Flyer", to: "/categories/flyer" as const },
  { label: "Invitation", to: "/categories/invitation" as const },
  { label: "Brochure", to: "/categories/brochure" as const },
  { label: "Business Card", to: "/categories/business-card" as const },
  { label: "Album Cover", to: "/categories/album-cover" as const },
  { label: "Logo", to: "/categories/logo" as const },
  { label: "Banner", to: "/categories/banner" as const },
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
              key={c.to}
              to={c.to}
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
