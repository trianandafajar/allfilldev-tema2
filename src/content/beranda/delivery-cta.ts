import type { DeliveryCtaSectionProps } from "@/components/sections/home/delivery-cta-section"

export const deliveryCtaContent = {
  eyebrow: "Renyah di Setiap Gigitan",
  title: [
    ["Tantangan ", { accent: "Pengiriman" }],
    "Cepat 30 Menit",
  ],
  cta: { label: "Pesan Sekarang", href: "/menu/ayam-panggang" },
  image: { src: "delivery-man.png" },
} satisfies DeliveryCtaSectionProps
