import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const categoryData: Record<
  string,
  { title: string; description: string; accent: string }
> = {
  "ig-poster": {
    title: "IG Poster",
    description: "Scroll-stopping Instagram posters designed to convert feed traffic into followers.",
    accent: "from-pink-500 to-orange-400",
  },
  representation: {
    title: "Representation",
    description: "Pitch decks and personal brand kits to help you show up like a professional.",
    accent: "from-indigo-500 to-purple-500",
  },
  flyer: {
    title: "Flyer",
    description: "Print and digital flyer templates for events, drops and pop-ups.",
    accent: "from-yellow-400 to-red-500",
  },
  invitation: {
    title: "Invitation",
    description: "Editorial invitations for launches, weddings, listening parties and more.",
    accent: "from-emerald-400 to-teal-500",
  },
  brochure: {
    title: "Brochure",
    description: "Tri-fold and bi-fold brochures with bold typography and clean grids.",
    accent: "from-sky-400 to-blue-600",
  },
  "business-card": {
    title: "Business Card",
    description: "Memorable business card templates that make a first impression worth keeping.",
    accent: "from-zinc-700 to-zinc-900",
  },
  "album-cover": {
    title: "Album Cover",
    description: "Cover art templates engineered for streaming platforms and merch.",
    accent: "from-fuchsia-500 to-rose-500",
  },
  logo: {
    title: "Logo",
    description: "Wordmarks, monograms and symbol systems ready to be made yours.",
    accent: "from-amber-500 to-yellow-300",
  },
  banner: {
    title: "Banner",
    description: "Web banners, billboards and social headers in every standard size.",
    accent: "from-lime-400 to-green-600",
  },
};

export const Route = createFileRoute("/categories/$slug")({
  loader: ({ params }) => {
    const data = categoryData[params.slug];
    if (!data) throw notFound();
    return { data };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.data.title} — Norf Crebions` },
          { name: "description", content: loaderData.data.description },
          { property: "og:title", content: `${loaderData.data.title} — Norf Crebions` },
          { property: "og:description", content: loaderData.data.description },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <main className="min-h-screen bg-paper px-5 py-24 text-ink md:px-10">
      <Nav />
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-5xl font-black uppercase">Category not found</h1>
        <Link to="/" className="mt-6 inline-block underline">Go home</Link>
      </div>
    </main>
  ),
  errorComponent: ({ error }) => (
    <main className="min-h-screen bg-paper px-5 py-24 text-ink md:px-10">
      <Nav />
      <p className="mx-auto max-w-3xl text-center">Something went wrong: {error.message}</p>
    </main>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { data } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Nav />
      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Link to="/" className="font-mono text-xs uppercase tracking-widest text-ink/60 hover:text-ink">
            ← Back home
          </Link>

          <div
            className={`mt-6 rounded-[3px] bg-gradient-to-br ${data.accent} p-10 text-paper md:p-16`}
          >
            <h1 className="font-display text-5xl font-black uppercase tracking-tight md:text-7xl">
              {data.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg">{data.description}</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <article
                key={i}
                className="rounded-[3px] border-[1.5px] border-ink/15 bg-paper p-4"
              >
                <div className="aspect-[4/5] w-full rounded-[3px] bg-muted" />
                <h3 className="mt-3 font-display text-sm font-black uppercase tracking-widest">
                  {data.title} #{i + 1}
                </h3>
                <p className="mt-1 text-xs text-ink/60">Coming soon</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
