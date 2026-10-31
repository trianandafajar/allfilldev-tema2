import type { BrandSectionProps } from "@/components/sections/home/brand-section"

const baseLogos = [
  "brand/01.svg",
  "brand/02.svg",
  "brand/03.svg",
  "brand/04.svg",
  "brand/05.svg",
  "brand/06.svg",
]

export const brandContent = {
  title: [[{ accent: "5K+" }, " Sponsor Global Bahagia Bersama Kami"]],
  sliderLabel: "Sponsor Foodking",
  // Enam logo diulang dua kali (12 slide) agar loop terasa mulus.
  logos: [...baseLogos, ...baseLogos].map((src, index) => ({
    src,
    alt: `Logo sponsor ${(index % baseLogos.length) + 1}`,
  })),
} satisfies BrandSectionProps
