import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TemplatesSection } from "@/components/TemplatesSection";
import { LutsSection } from "@/components/LutsSection";
import { FashionSection } from "@/components/FashionSection";
import { SoundpacksSection } from "@/components/SoundpacksSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Norf Crebions — Templates, LUTs, Sounds & Bold Fashion" },
      {
        name: "description",
        content:
          "Stop hiding behind boring designs. Shop Squarespace templates, cinematic LUTs, soundpacks and bold fashion from Norf Crebions.",
      },
      { property: "og:title", content: "Norf Crebions — Bold Creative Studio" },
      {
        property: "og:description",
        content: "Templates, LUTs, soundpacks and fashion that demand attention.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Nav />
      <Hero />
      <TemplatesSection />
      <LutsSection />
      <FashionSection />
      <SoundpacksSection />
      <Footer />
    </main>
  );
}
