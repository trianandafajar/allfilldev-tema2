import type { CountdownPromoSectionProps } from "@/components/sections/home/countdown-promo-section"

export const countdownPromoContent = {
  eyebrow: "Renyah di Setiap Gigitan",
  title: ["Hot Wing Ayam KFC", "& Kentang Goreng"],
  description: [
    "Tortilla gandum berisi potongan ayam pedas, saus keju,",
    "tomat, dan keju lembut",
  ],
  countdown: {
    targetDate: "2026-12-31T23:59:59+07:00",
    labels: { days: "Hari", hours: "Jam", minutes: "Menit", seconds: "Detik" },
  },
  cta: { label: "Pesan Sekarang", href: "/menu/ayam-panggang" },
  image: {
    src: "food/kfc.png",
    alt: "Hot wing ayam krispi dengan kentang goreng",
  },
} satisfies CountdownPromoSectionProps
