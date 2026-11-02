import type { CategoryCardData } from "@/components/cards/category-card"
import type { CategorySliderSectionProps } from "@/components/sections/home/category-slider-section"

const categories: CategoryCardData[] = [
  {
    name: "Pizza",
    count: "5 produk",
    image: "food/pizza.png",
    imageAlt: "Pizza keju",
    href: "/toko",
    titleHref: "/toko?kategori=pizza",
  },
  {
    name: "Pasta",
    count: "5 produk",
    image: "food/pasta.png",
    imageAlt: "Seporsi pasta",
    href: "/toko",
    titleHref: "/toko?kategori=nasi-mi-goreng",
  },
  {
    name: "Burger",
    count: "5 produk",
    image: "food/burger.png",
    imageAlt: "Burger daging sapi",
    href: "/toko",
    titleHref: "/toko?kategori=burger",
  },
  {
    name: "Kentang Goreng",
    count: "5 produk",
    image: "food/french-fry.png",
    imageAlt: "Kentang goreng",
    href: "/toko",
    titleHref: "/toko?kategori=kentang-goreng",
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
