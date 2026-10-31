import type { CategoryCardData } from "@/components/cards/category-card"
import type { CategorySliderSectionProps } from "@/components/sections/home/category-slider-section"

const categories: CategoryCardData[] = [
  {
    name: "Pizza",
    count: "5 produk",
    image: "food/pizza.png",
    imageAlt: "Pizza keju",
    href: "/menu",
    titleHref: "/menu/pizza",
  },
  {
    name: "Pasta",
    count: "5 produk",
    image: "food/pasta.png",
    imageAlt: "Seporsi pasta",
    href: "/menu",
    titleHref: "/menu/pasta",
  },
  {
    name: "Burger",
    count: "5 produk",
    image: "food/burger.png",
    imageAlt: "Burger daging sapi",
    href: "/menu",
    titleHref: "/menu/burger",
  },
  {
    name: "Kentang Goreng",
    count: "5 produk",
    image: "food/french-fry.png",
    imageAlt: "Kentang goreng",
    href: "/menu",
    titleHref: "/menu/kentang-goreng",
  },
]

export const categorySliderContent: CategorySliderSectionProps = {
  eyebrow: "Renyah di Setiap Gigitan",
  title: "Menu Favorit",
  label: "Kategori makanan",
  prevLabel: "Kategori sebelumnya",
  nextLabel: "Kategori berikutnya",
  // Dua putaran agar loop mulus dengan 4 kartu terlihat sekaligus.
  categories: [...categories, ...categories],
}
