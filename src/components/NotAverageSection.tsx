import { useState } from "react";

type Card = {
  title: string;
  img: string;
  bg: string;
  textTone: "light" | "dark";
};

const cards: Card[] = [
  {
    title: "Create a Site\nThat Actually Stands Out",
    img: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1200&q=80",
    bg: "bg-[#1a1a1a]",
    textTone: "light",
  },
  {
    title: "Social Media Templates\nThat Demand Attention",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1200&q=80",
    bg: "bg-[#ececec]",
    textTone: "dark",
  },
  {
    title: "Portfolio Layouts\nBuilt to Impress",
    img: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1200&q=80",
    bg: "bg-[#d4c5b0]",
    textTone: "dark",
  },
  {
    title: "Bold Brand Kits\nFor Modern Creators",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1200&q=80",
    bg: "bg-[#2d2d2d]",
    textTone: "light",
  },
  {
    title: "E-commerce Themes\nThat Convert",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
    bg: "bg-[#f5e6d3]",
    textTone: "dark",
  },
  {
    title: "Editorial Layouts\nWith Magazine Energy",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80",
    bg: "bg-[#1a1a1a]",
    textTone: "light",
  },
  {
    title: "Studio Pages\nFor Visual Storytellers",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80",
    bg: "bg-[#e8e2d5]",
    textTone: "dark",
  },
];

const PER_PAGE = 3;

export function NotAverageSection() {
  const pages = Math.ceil(cards.length / PER_PAGE);
  const [page, setPage] = useState(0);

  return (
    <section className="bg-paper px-5 pt-4 pb-20 md:px-10 md:pt-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="font-mono text-sm md:text-base text-ink">
            Stop Hiding Behind Boring Designs—
          </p>
          <p className="font-mono text-sm md:text-base text-ink">
            Create a Site That Makes You Stand Out
          </p>
          <h2 className="mt-6 font-display text-4xl font-black uppercase tracking-tight md:text-6xl">
            Not Your Average
            <br />
            templates
          </h2>
        </div>

        {/* Paged cards */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: pages }).map((_, p) => (
              <div
                key={p}
                className="grid w-full shrink-0 grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
              >
                {cards.slice(p * PER_PAGE, p * PER_PAGE + PER_PAGE).map((card, i) => (
                  <article
                    key={i}
                    className={`relative overflow-hidden rounded-[3px] ${card.bg}`}
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <h3
                        className={`absolute left-6 top-6 z-10 whitespace-pre-line font-mono text-base font-bold leading-tight md:text-lg ${
                          card.textTone === "light" ? "text-paper" : "text-ink"
                        }`}
                      >
                        {card.title}
                      </h3>

                      <img
                        src={card.img}
                        alt={card.title}
                        loading="lazy"
                        className="absolute rounded-[3px] object-cover"
                        style={{
                          left: "1.5rem",
                          right: "1.5rem",
                          top: "5rem",
                          bottom: "4rem",
                        }}
                      />

                      <button className="absolute bottom-6 right-6 z-10 rounded-[3px] bg-primary px-5 py-2.5 font-mono text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
                        Shop Now
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === page ? "w-6 bg-primary" : "w-2 bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
