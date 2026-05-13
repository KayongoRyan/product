export type ApparelProduct = {
  id: string;
  name: string;
  price: string;
  image: string;
  hoverVideo: string;
  alt: string;
  sizes: string[];
  description: string;
};

export const apparelProducts: ApparelProduct[] = [
  {
    id: "retro-fit-hat",
    name: "Retro Fit Hat",
    price: "Rwf 20,000",
    image:
      "https://www.aimeleondore.com/cdn/shop/files/SS26AH042_LINENNYYANKEESCAP_JETBLACK_2_600x.jpg?v=1775494641",
    hoverVideo:
      "https://nude-project.com/cdn/shop/videos/c/vp/11ea3b50b45f449f97479490598d50de/11ea3b50b45f449f97479490598d50de.HD-1080p-7.2Mbps-45245999.mp4?v=0",
    alt: "Black baseball hat product shot",
    sizes: ["One Size"],
    description: "Free delivery in Musanze.",
  },
  {
    id: "black-nothing-tshirt",
    name: "Black Nothing T-Shirt",
    price: "Rwf 30,000",
    image:
      "https://sfycdn.speedsize.com/d31641c5-60cb-4a0b-8662-59094f81bb6e/row.representclo.com/cdn/shop/files/5mthc9VPog_vo74AU6OQXLwwwdvZ8TYU220V8QLycKA.jpg?v=1769418167&width=910",
    hoverVideo:
      "https://nude-project.com/cdn/shop/videos/c/vp/11ea3b50b45f449f97479490598d50de/11ea3b50b45f449f97479490598d50de.HD-1080p-7.2Mbps-45245999.mp4?v=0",
    alt: "Black t-shirt product shot",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Free delivery in Musanze.",
  },
  {
    id: "owners-club-tshirt",
    name: "Owners Club T-Shirt",
    price: "Rwf 30,000",
    image:
      "https://sfycdn.speedsize.com/d31641c5-60cb-4a0b-8662-59094f81bb6e/row.representclo.com/cdn/shop/files/KCjUM1W0bHRB6Rh39cdoGDGjnnKYD6BPgRDd0V4URag.jpg?v=1761143108&width=1920",
    hoverVideo:
      "https://nude-project.com/cdn/shop/videos/c/vp/11ea3b50b45f449f97479490598d50de/11ea3b50b45f449f97479490598d50de.HD-1080p-7.2Mbps-45245999.mp4?v=0",
    alt: "Owners club t-shirt product shot",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Free delivery in Musanze.",
  },
  {
    id: "linen-long-sleeve",
    name: "Long-Sleeve Linen Shirt",
    price: "Rwf 40,000",
    image:
      "https://www.aimeleondore.com/cdn/shop/files/SS26CS013_SaintGeorgeCrewneck_MuddyTaupe_2_600x.jpg?v=1775508600",
    hoverVideo:
      "https://nude-project.com/cdn/shop/videos/c/vp/11ea3b50b45f449f97479490598d50de/11ea3b50b45f449f97479490598d50de.HD-1080p-7.2Mbps-45245999.mp4?v=0",
    alt: "Long-sleeve linen shirt product shot",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Free delivery in Musanze.",
  },
];

export const getApparelProductById = (id: string) =>
  apparelProducts.find((product) => product.id === id);
