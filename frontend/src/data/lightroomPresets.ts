export type LightroomPreset = {
  id: string;
  name: string;
  price: string;
  image: string;
  alt: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
};

export const lightroomPresets: LightroomPreset[] = [
  {
    id: "pack-1",
    name: "Desert Gold Pack",
    price: "Rwf 8,000",
    image:
      "https://images.squarespace-cdn.com/content/v1/665fa962d40d976d38f2e791/1717649010237-K17MQMMUHOLK8WBEICPV/Film+Inspired+Presets.png?format=1000w",
    alt: "Warm cinematic landscape graded with desert tones",
    description:
      "Film-inspired warmth with lifted shadows and golden mids. Built for travel, desert light, and late-afternoon skin tones. Includes desktop + mobile XMP and DNG-friendly adjustments.",
    beforeImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
    beforeAlt: "Landscape before Desert Gold preset",
    afterAlt: "Landscape after Desert Gold preset",
  },
  {
    id: "pack-2",
    name: "Midnight Teal Pack",
    price: "Rwf 8,000",
    image:
      "https://images.squarespace-cdn.com/content/v1/665fa962d40d976d38f2e791/0b61cb20-8c13-4215-a062-9a86f8ea18e4/06+Kyoto.png?format=750w",
    alt: "Cool night street scene color grade preview",
    description:
      "Cool shadows, restrained highlights, and a subtle teal push in the mids—ideal for neon streets, night markets, and moody interiors. One-click base with tweak-friendly tone curves.",
    beforeImage: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80",
    beforeAlt: "City night before Midnight Teal preset",
    afterAlt: "City night after Midnight Teal preset",
  },
  {
    id: "pack-3",
    name: "Coastal Fade Pack",
    price: "Rwf 8,000",
    image:
      "https://images.squarespace-cdn.com/content/v1/665fa962d40d976d38f2e791/1717631049683-OFX64YY4C1BDGQ1DIZDZ/v1+Presets.png?format=750w",
    alt: "Ocean horizon with soft fade LUT look",
    description:
      "Soft rolloff in the highlights, airy blues, and gentle fade toward the shadows. Made for coastlines, open sky, and editorial portraits in bright sun.",
    beforeImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1439405326854-014607f0d800?w=1200&q=80",
    beforeAlt: "Coastal scene before Coastal Fade preset",
    afterAlt: "Coastal scene after Coastal Fade preset",
  },
  {
    id: "pack-4",
    name: "Studio Contrast Pack",
    price: "Rwf 8,000",
    image:
      "https://www.lookslikefilm.com/wp-content/uploads/2022/07/Molly_Brian_Elopement_137-1.jpeg",
    alt: "High-contrast studio portrait grade",
    description:
      "Punchy contrast with clean skin separation and controlled blacks. Use for studio strobes, elopements, and fashion-adjacent work where structure matters more than haze.",
    beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80",
    beforeAlt: "Portrait before Studio Contrast preset",
    afterAlt: "Portrait after Studio Contrast preset",
  },
];

export const getLightroomPresetById = (id: string) => lightroomPresets.find((p) => p.id === id);
