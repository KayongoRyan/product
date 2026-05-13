import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { LightroomPresetsSection } from "@/components/LightroomPresetsSection";
import { PowergradesLutsBanner } from "@/components/PowergradesLutsBanner";
import { ApparelSection } from "@/components/ApparelSection";
import { TemplatesCardsSection } from "@/components/TemplatesCardsSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Norf Crebions — Templates, LUTs, Sounds & Bold Apparel" },
      {
        name: "description",
        content:
          "Stop hiding behind boring designs. Shop Squarespace templates, cinematic LUTs, soundpacks and bold apparel from Norf Crebions.",
      },
      { property: "og:title", content: "Norf Crebions — Bold Creative Studio" },
      {
        property: "og:description",
        content: "Templates, LUTs, soundpacks and apparel that demand attention.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Nav />
      <Hero />
      <ApparelSection />
      <TemplatesCardsSection />
      <PowergradesLutsBanner />
      <LightroomPresetsSection />
      <Footer />
    </main>
  );
}
