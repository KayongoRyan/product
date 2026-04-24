import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/templates")({
  head: () => ({
    meta: [
      { title: "Templates — Norf Crebions" },
      { name: "description", content: "Squarespace and presentation templates that demand attention." },
      { property: "og:title", content: "Templates — Norf Crebions" },
      { property: "og:description", content: "Squarespace and presentation templates that demand attention." },
    ],
  }),
  component: TemplatesPage,
});

function TemplatesPage() {
  return (
    <main className="min-h-screen bg-paper px-5 py-24 text-ink md:px-10">
      <div className="mx-auto max-w-7xl">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-ink">← Back home</Link>
        <h1 className="mt-6 font-display text-5xl font-black uppercase tracking-tight md:text-7xl">All Templates</h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Browse our full catalog of Squarespace website templates and presentation decks. New drops every month.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <article key={i} className="rounded-2xl border border-ink/15 p-6">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted" />
              <h3 className="mt-4 font-display text-lg font-black uppercase tracking-widest">Template {i + 1}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Coming soon</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
