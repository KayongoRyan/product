import { Marquee } from "./Marquee";

const packs = [
  { artist: "Billie Eilish", title: "happier than ever", price: "$100", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { artist: "Omah Lay", title: "Holy Ghost", price: "$60", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { artist: "Asake", title: "Worldwide", price: "$30", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80" },
  { artist: "J. Cole", title: "Middlechild", price: "$50", img: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=400&q=80" },
  { artist: "Kendrick Lamar", title: "Not Like Us", price: "$140", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { artist: "ASAP Rocky", title: "Punk Rocky", price: "$40", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" },
  { artist: "Ice Cube", title: "No Vaseline", price: "$50", img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80" },
  { artist: "Rihanna", title: "Work", price: "$120", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80" },
];

export function SoundpacksSection() {
  return (
    <section id="sounds" className="bg-paper">
      {/* Try now marquee */}
      <div className="border-y-2 border-ink bg-primary py-4">
        <Marquee
          items={Array(8).fill("try now")}
          itemClassName="font-display text-4xl md:text-6xl font-black italic lowercase tracking-tight text-primary-foreground"
          separator={<span className="text-ink text-3xl">✺</span>}
          fast
        />
      </div>

      <div className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-7xl p-5 md:p-8">
          <h2 className="font-display text-2xl font-black md:text-3xl">New Soundpacks</h2>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {packs.map((p) => (
              <article key={p.artist} className="group">
                <div className="relative aspect-square overflow-hidden border border-ink/20">
                  <img src={p.img} alt={p.artist} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <button className="absolute bottom-2 right-2 grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    ▶
                  </button>
                </div>
                <div className="mt-2 flex items-start justify-between gap-2">
                  <p className="text-xs">
                    <span className="font-bold">{p.artist}</span> – {p.title}
                  </p>
                  <span className="font-mono text-xs font-bold">{p.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
