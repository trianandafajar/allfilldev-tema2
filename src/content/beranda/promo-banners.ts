import type { PromoBannersSectionProps } from "@/components/sections/home/promo-banners-section"

export const promoBannersContent: PromoBannersSectionProps = {
  shapes: {
    left: "shape/chili-shape.png",
    right: "shape/fry-shape.png",
  },
  offer: {
    backgroundImage: "banner/offer-bg.jpg",
    eyebrow: "Renyah di Setiap Gigitan",
    title: ["Super", "Lezat"],
    badge: { src: "offer/50percent-off.png", alt: "Diskon 50 persen" },
    ornament: { src: "shape/burger-text.png", alt: "" },
    mainImage: { src: "food/main-food.png", alt: "Hidangan ayam goreng dan kentang" },
  },
  pizza: {
    backgroundImage: "banner/pizza-bg.jpg",
    headline: { src: "shape/pizza-text.png", alt: "Pizza keju super" },
    accent: "shape/pizza-text-2.png",
    image: { src: "food/pizza-2.png", alt: "Pizza keju dengan topping lengkap" },
  },
}
