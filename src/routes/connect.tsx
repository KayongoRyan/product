import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/connect")({
  head: () => ({
    meta: [
      { title: "Connect — Norf Crebions" },
      { name: "description", content: "Get in touch with Norf Crebions for collabs and inquiries." },
      { property: "og:title", content: "Connect — Norf Crebions" },
      { property: "og:description", content: "Get in touch with Norf Crebions for collabs and inquiries." },
    ],
  }),
  component: ConnectPage,
});

function ConnectPage() {
  return (
    <main className="min-h-screen bg-paper px-5 py-24 text-ink md:px-10">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-ink">← Back home</Link>
        <h1 className="mt-6 font-display text-5xl font-black uppercase tracking-tight md:text-7xl">Let's Connect</h1>
        <p className="mt-4 text-base text-muted-foreground">
          Got a project, collab, or question? Drop us a line.
        </p>
        <form className="mt-10 grid gap-5">
          <input
            type="text"
            placeholder="Your name"
            className="rounded-xl border-2 border-ink/15 bg-paper px-5 py-4 font-mono text-sm focus:border-primary focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-xl border-2 border-ink/15 bg-paper px-5 py-4 font-mono text-sm focus:border-primary focus:outline-none"
          />
          <textarea
            rows={6}
            placeholder="Tell us about your project..."
            className="rounded-xl border-2 border-ink/15 bg-paper px-5 py-4 font-mono text-sm focus:border-primary focus:outline-none"
          />
          <button
            type="submit"
            className="justify-self-start rounded-full bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[0_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
