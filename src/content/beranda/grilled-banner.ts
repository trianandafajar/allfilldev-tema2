import type { GrilledBannerSectionProps } from "@/components/sections/home/grilled-banner-section"

export const grilledBannerContent = {
  eyebrow: "Hemat 20%",
  title: [["Promo ", { accent: "Astackin" }, " Hari Ini"]],
  product: {
    name: [["Ayam ", { accent: "Panggang" }]],
    price: "Rp59.000",
    href: "/menu",
  },
  cta: { label: "Pesan Sekarang", href: "/menu/ayam-panggang" },
  image: {
    src: "food/grilled.png",
    alt: "Ayam panggang Foodking dengan kentang goreng dan sayuran segar",
  },
} satisfies GrilledBannerSectionProps
