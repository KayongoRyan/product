import { useState } from "react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { apparelProducts, getApparelProductById } from "@/data/apparel";

export const Route = createFileRoute("/apparel/$productId")({
  loader: ({ params }) => {
    const product = getApparelProductById(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  component: ApparelProductDetailsPage,
});

function ApparelProductDetailsPage() {
  const { product } = Route.useLoaderData();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "M");

  return (
    <main className="min-h-screen bg-paper px-4 py-24 text-ink md:px-6">
      <Nav />
      <div className="mx-auto max-w-[1400px]">
        <Link
          to="/apparel"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-ink"
        >
          ← Back to apparel
        </Link>

        <section className="mt-6 grid gap-4 lg:grid-cols-[1fr_1fr_420px]">
          <div className="aspect-[4/5] overflow-hidden bg-[#efefef]">
            <img src={product.image} alt={product.alt} className="h-full w-full object-cover" />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden bg-[#efefef]">
            <video
              src={product.hoverVideo}
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="border border-ink/10 p-6">
            <h1 className="font-display text-2xl font-bold tracking-tight">{product.name}</h1>
            <p className="mt-2 font-mono text-sm">{product.price}</p>

            <div className="mt-8 border-t border-ink/10 pt-5">
              <p className="text-xs uppercase tracking-[0.2em] text-ink/60">Size</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-12 border px-4 py-2 text-xs font-medium ${
                      selectedSize === size
                        ? "border-ink bg-ink text-paper"
                        : "border-ink/20 bg-white text-ink hover:border-ink/50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button
                type="button"
                className="w-full border border-ink bg-transparent px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Add To Cart
              </button>
              <button
                type="button"
                className="w-full border border-ink bg-ink px-4 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink/90"
              >
                Buy It Now
              </button>
            </div>

            <p className="mt-6 border-t border-ink/10 pt-4 text-sm text-ink/70">
              {product.description}
            </p>
          </div>
        </section>

        <section className="mt-10">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink/50">More Apparel</p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {apparelProducts
              .filter((item) => item.id !== product.id)
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item.id}
                  to="/apparel/$productId"
                  params={{ productId: item.id }}
                  className="group"
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
