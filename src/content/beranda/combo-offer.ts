import type { ComboOfferSectionProps } from "@/components/sections/home/combo-offer-section"

export const comboOfferContent: ComboOfferSectionProps = {
  eyebrow: "Renyah di Setiap Gigitan",
  title: "Paket Combo Terlaris Diskon",
  titleAccent: "20%",
  description:
    "Paket hemat favorit pelanggan: hangat, renyah, dan mengenyangkan seluruh keluarga.",
  background: "bg-image/bg.jpg",
  decorImage: "shape/drinks.png",
  tabsLabel: "Pilihan paket combo",
  defaultOffer: "pizza",
  offers: [
    {
      value: "ayam",
      image: "offer/chicken.png",
      title: "Diskon 30% 4 pcs ayam crispy & 8 pcs sayap",
    },
    {
      value: "pizza",
      image: "offer/pizza.png",
      title: "Diskon 20% pizza lezat plus minuman",
    },
    {
      value: "burger",
      image: "offer/burger.png",
      title: "2 pcs burger plus minuman & saus",
    },
  ],
  showcase: {
    background: "banner/comboo-bg.jpg",
    textImage: "shape/combo-pizza-text.png",
    foodImage: "food/big-pizza.png",
    foodAlt: "Pizza besar dengan topping lengkap",
    badgeImage: "offer/50percent-off-2.png",
    vegetableImage: "shape/vegetable.png",
  },
}
