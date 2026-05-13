import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { getTemplateProductById, templateProducts } from "@/data/templates";

export const Route = createFileRoute("/templates/$templateId")({
  loader: ({ params }) => {
    const template = getTemplateProductById(params.templateId);
    if (!template) throw notFound();
    return { template };
  },
  component: TemplateDetailPage,
});

function TemplateDetailPage() {
  const { template } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-paper px-4 py-24 text-ink md:px-6">
      <Nav />
      <div className="mx-auto max-w-[1400px]">
        <Link
          to="/templates"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-ink"
        >
          ← Back to Templates
        </Link>

        <section className="mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <div className="aspect-[4/5] overflow-hidden bg-[#efefef]">
              <img src={template.image} alt={template.alt} className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="flex flex-col lg:max-w-xl">
            <h1 className="font-display text-3xl font-black uppercase tracking-tight md:text-4xl">
              {template.name}
            </h1>
            <p className="mt-3 font-mono text-sm font-normal">{template.price}</p>
            <p className="mt-8 text-sm leading-relaxed text-ink/80">{template.description}</p>
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
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink/50">More templates</p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {templateProducts
              .filter((p) => p.id !== template.id)
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item.id}
                  to="/templates/$templateId"
                  params={{ templateId: item.id }}
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
