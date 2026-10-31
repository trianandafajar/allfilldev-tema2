import type { HeroSectionProps } from "@/components/sections/home/hero-section"

const cta = { label: "Pesan Sekarang", href: "/menu/ayam-goreng-krispi" }
const eyebrow = "Renyah di Setiap Gigitan"
const image = { src: "hero/chiken.png", alt: "Ayam goreng krispi" }

export const heroContent: HeroSectionProps = {
  label: "Promo utama",
  backgroundImage: "hero/hero-bg.jpg",
  backTitle: "Cepat Saji",
  decorations: [
    { placement: "top-left", src: "hero/chilli-shape.png" },
    { placement: "bottom-left", src: "hero/fire-shape.png" },
    { placement: "top-right", src: "hero/chilli-shape-2.png" },
    { placement: "bottom-right", src: "hero/chilli-shape-3.png" },
    { placement: "badge", src: "hero/offer-shape.png" },
  ],
  slides: [
    {
      eyebrow,
      title: { before: "Ayam", highlight: "Goreng", after: "Lezat" },
      cta,
      image,
    },
    {
      eyebrow,
      title: { before: "Ayam", highlight: "Goreng", after: "Mantap" },
      cta,
      image,
    },
    {
      eyebrow,
      title: { before: "Ayam", highlight: "Goreng", after: "Favorit" },
      cta,
      image,
    },
    {
      eyebrow,
      title: { before: "Ayam", highlight: "Goreng", after: "Lezat" },
      cta,
      image,
    },
  ],
}
