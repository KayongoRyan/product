import { Link } from "@tanstack/react-router";
import presentationUcpVideo from "@/assets/Presentation UCP.mov";

export function PowergradesLutsBanner() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink text-paper">
      <video
        src={presentationUcpVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/20 to-ink/75" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 md:px-6">
        <div className="flex max-w-4xl flex-col items-center text-center">
          <p className="font-display text-base font-semibold tracking-wide text-paper/95 md:text-2xl">
            Built For The Hybrid Creator
          </p>
          <h2 className="mt-2 font-display text-4xl font-black leading-[1.05] tracking-tight text-paper sm:text-5xl md:text-6xl">
            Powergrades &amp; LUTs
          </h2>
          <Link
            to="/luts"
            className="mt-8 inline-flex border border-paper bg-transparent px-10 py-4 font-display text-xl font-bold text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
