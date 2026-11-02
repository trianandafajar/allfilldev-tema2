import type { SpecialBannersSectionProps } from "@/components/sections/home/special-banners-section"

export const specialBannersContent: SpecialBannersSectionProps = {
  burger: {
    backgroundImage: "banner/burger-bg.png",
    kicker: "Hari Ini",
    title: "Spesial",
    product: { highlight: "Burger", after: "Sapi" },
    productHref: "/toko",
    cta: { label: "Pesan Sekarang", href: "/menu/burger-sapi" },
    image: { src: "food/big-burger.png", alt: "Burger sapi berukuran besar" },
    textShape: "shape/pizza-text-2.png",
    ornament: "shape/burger-text.png",
  },
  offer: {
    backgroundImage: "banner/pepsi-bg.png",
    eyebrow: "Renyah di Setiap Gigitan",
    title: ["Paket Makanan", "Cepat Saji"],
    description: [
      "Aroma menggugah selera dari",
      "burger yang baru dipanggang",
    ],
    cta: { label: "Pesan Sekarang", href: "/menu/paket-cepat-saji" },
    badge: { src: "offer/50percent-off-3.png", alt: "Diskon 50 persen" },
    mainImage: { src: "food/roller-box.png", alt: "Paket makanan cepat saji" },
  },
}
