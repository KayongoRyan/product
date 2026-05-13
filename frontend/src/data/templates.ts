export type TemplateProduct = {
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

export const templateProducts: TemplateProduct[] = [
  {
    id: "template-1",
    name: "Creator Portfolio Template",
    price: "Rwf 25,000",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80",
    alt: "Template preview with portfolio layout",
    description:
      "A conversion-focused personal brand template with case-study blocks, social proof sections, and clear call-to-actions. Perfect for creators, photographers, and consultants.",
    beforeImage: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    beforeAlt: "Before customization of Creator Portfolio template",
    afterAlt: "After customization of Creator Portfolio template",
  },
  {
    id: "template-2",
    name: "Agency Landing Template",
    price: "Rwf 25,000",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    alt: "Template preview with agency landing layout",
    description:
      "High-clarity agency template designed for service sales. Includes hero offer framing, process timeline, offer stacks, and booking-first navigation.",
    beforeImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    beforeAlt: "Before customization of Agency Landing template",
    afterAlt: "After customization of Agency Landing template",
  },
  {
    id: "template-3",
    name: "Product Launch Template",
    price: "Rwf 25,000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    alt: "Template preview with product launch layout",
    description:
      "Built for digital product drops and campaigns. Features launch countdown sections, feature breakdown modules, pricing FAQs, and urgency-based CTA placement.",
    beforeImage: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    beforeAlt: "Before customization of Product Launch template",
    afterAlt: "After customization of Product Launch template",
  },
  {
    id: "template-4",
    name: "Minimal Storefront Template",
    price: "Rwf 25,000",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    alt: "Template preview with ecommerce storefront layout",
    description:
      "A clean storefront system for fashion and lifestyle brands. Includes collection highlights, editorial image modules, and frictionless purchase flow blocks.",
    beforeImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80",
    beforeAlt: "Before customization of Minimal Storefront template",
    afterAlt: "After customization of Minimal Storefront template",
  },
];

export const getTemplateProductById = (id: string) => templateProducts.find((p) => p.id === id);
