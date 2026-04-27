import { Link } from "@tanstack/react-router";
import robot from "@/assets/3d-robot.jpg";
import device from "@/assets/3d-device.jpg";
import astronaut from "@/assets/3d-astronaut.jpg";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  img: string;
  bg: string;
  ring: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Nova Bot",
    category: "Mascot · Character",
    description: "A glossy 3D character mascot built for tech brands and product launches.",
    img: robot,
    bg: "bg-[#fff7e6]",
    ring: "ring-amber-300",
  },
  {
    number: "02",
    title: "Holo Device",
    category: "Product · Isometric",
    description: "Isometric device render with floating UI cards — perfect for app keynotes.",
    img: device,
    bg: "bg-[#fde7f3]",
    ring: "ring-pink-300",
  },
  {
    number: "03",
    title: "Drift Astronaut",
    category: "Editorial · Scene",
    description: "Soft pastel astronaut scene for editorial covers, banners and hero art.",
    img: astronaut,
    bg: "bg-[#e8f0ff]",
    ring: "ring-indigo-300",
  },
];

export function TemplatesSection() {
  return (
    <section id="3d" className="bg-paper px-5 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-block rounded-full border-[1.5px] border-ink px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.25em]">
              Featured · 3D
            </span>
            <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl">
              Crafted in 3D <br />
              <span className="italic text-primary">three projects</span> · one studio
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink/70 md:text-base">
            From characters to devices to editorial scenes — bespoke 3D renders that move pixels and people.
          </p>
        </div>

        {/* Projects grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.number}
              className={`group relative overflow-hidden rounded-[3px] border-[1.5px] border-ink ${p.bg} p-5 transition-transform duration-500 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs font-bold tracking-widest text-ink/60">
                  {p.number} / 03
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/60">
                  {p.category}
                </span>
              </div>

              <div className={`mt-4 aspect-square w-full overflow-hidden rounded-[3px] bg-paper ring-2 ${p.ring}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="mt-5 flex items-end justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-black uppercase tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-ink/70">{p.description}</p>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-paper transition-transform group-hover:rotate-45">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-[3px] border-[1.5px] border-ink bg-ink px-6 py-5 text-paper md:flex-row md:px-8">
          <p className="font-display text-lg font-black uppercase tracking-widest">
            Need a custom 3D project?
          </p>
          <Link
            to="/connect"
            className="rounded-full bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
          >
            Start a project →
          </Link>
        </div>
      </div>
    </section>
  );
}
