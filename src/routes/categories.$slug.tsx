import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

type CategoryItem = { img: string; price: string };

const categoryData: Record<
  string,
  { title: string; description: string; accent: string; items: CategoryItem[] }
> = {
  "ig-poster": {
    title: "IG Poster",
    description: "Scroll-stopping Instagram posters designed to convert feed traffic into followers.",
    accent: "from-pink-500 to-orange-400",
    items: [
      { img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", price: "$15" },
      { img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80", price: "$18" },
      { img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80", price: "$20" },
      { img: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=800&q=80", price: "$22" },
      { img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80", price: "$25" },
      { img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80", price: "$19" },
    ],
  },
  representation: {
    title: "Representation",
    description: "Pitch decks and personal brand kits to help you show up like a professional.",
    accent: "from-indigo-500 to-purple-500",
    items: [
      { img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80", price: "$45" },
      { img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80", price: "$55" },
      { img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80", price: "$65" },
      { img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", price: "$50" },
      { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80", price: "$60" },
      { img: "https://images.unsplash.com/photo-1460794418188-1bb7dba2720d?w=800&q=80", price: "$70" },
    ],
  },
  flyer: {
    title: "Flyer",
    description: "Print and digital flyer templates for events, drops and pop-ups.",
    accent: "from-yellow-400 to-red-500",
    items: [
      { img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80", price: "$12" },
      { img: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80", price: "$15" },
      { img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80", price: "$18" },
      { img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80", price: "$20" },
      { img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80", price: "$14" },
      { img: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=800&q=80", price: "$22" },
    ],
  },
  invitation: {
    title: "Invitation",
    description: "Editorial invitations for launches, weddings, listening parties and more.",
    accent: "from-emerald-400 to-teal-500",
    items: [
      { img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", price: "$18" },
      { img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", price: "$22" },
      { img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", price: "$25" },
      { img: "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&q=80", price: "$20" },
      { img: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80", price: "$28" },
      { img: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=800&q=80", price: "$24" },
    ],
  },
  brochure: {
    title: "Brochure",
    description: "Tri-fold and bi-fold brochures with bold typography and clean grids.",
    accent: "from-sky-400 to-blue-600",
    items: [
      { img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80", price: "$30" },
      { img: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&q=80", price: "$35" },
      { img: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80", price: "$40" },
      { img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80", price: "$28" },
      { img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80", price: "$45" },
      { img: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=800&q=80", price: "$32" },
    ],
  },
  "business-card": {
    title: "Business Card",
    description: "Memorable business card templates that make a first impression worth keeping.",
    accent: "from-zinc-700 to-zinc-900",
    items: [
      { img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&q=80", price: "$10" },
      { img: "https://images.unsplash.com/photo-1572502007796-7891beba293e?w=800&q=80", price: "$12" },
      { img: "https://images.unsplash.com/photo-1622151834625-8b9ae5d7e15c?w=800&q=80", price: "$15" },
      { img: "https://images.unsplash.com/photo-1626197031507-c17099753214?w=800&q=80", price: "$11" },
      { img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80", price: "$14" },
      { img: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&q=80", price: "$13" },
    ],
  },
  "album-cover": {
    title: "Album Cover",
    description: "Cover art templates engineered for streaming platforms and merch.",
    accent: "from-fuchsia-500 to-rose-500",
    items: [
      { img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80", price: "$35" },
      { img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80", price: "$40" },
      { img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80", price: "$45" },
      { img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80", price: "$50" },
      { img: "https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?w=800&q=80", price: "$38" },
      { img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80", price: "$42" },
    ],
  },
  logo: {
    title: "Logo",
    description: "Wordmarks, monograms and symbol systems ready to be made yours.",
    accent: "from-amber-500 to-yellow-300",
    items: [
      { img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80", price: "$60" },
      { img: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80", price: "$75" },
      { img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&q=80", price: "$90" },
      { img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?w=800&q=80", price: "$65" },
      { img: "https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=800&q=80", price: "$80" },
      { img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80", price: "$70" },
    ],
  },
  banner: {
    title: "Banner",
    description: "Web banners, billboards and social headers in every standard size.",
    accent: "from-lime-400 to-green-600",
    items: [
      { img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80", price: "$20" },
      { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", price: "$25" },
      { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", price: "$30" },
      { img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80", price: "$22" },
      { img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80", price: "$28" },
      { img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", price: "$35" },
    ],
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
            {data.items.map((item, i) => (
              <article
                key={i}
                className="rounded-[3px] border-[1.5px] border-ink/15 bg-paper p-4"
              >
                <div className="aspect-[4/5] w-full overflow-hidden rounded-[3px] bg-muted">
                  <img
                    src={item.img}
                    alt={`${data.title} ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-start justify-between gap-2">
                  <h3 className="font-display text-sm font-black uppercase tracking-widest">
                    {data.title} #{i + 1}
                  </h3>
                  <span className="font-mono text-xs font-bold">{item.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
