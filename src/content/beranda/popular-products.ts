import type { PopularProductsSectionProps } from "@/components/sections/home/popular-products-section"
import { products } from "@/content/toko/products"
import { formatRupiah } from "@/lib/format"

/** Urutan produk di beranda; data diambil dari katalog Toko. */
const featuredSlugs = [
  "roti-isi-daging-sapi",
  "burger-daging-jumbo",
  "pasta-oriental",
  "pizza-keju-spesial",
  "paket-combo-hemat",
  "roti-isi-ayam-crispy",
  "ayam-panggang",
  "burger-keju-lezat",
] as const

/** Kartu yang tampil menyala (seperti saat hover) pada template. */
const activeSlug = "burger-daging-jumbo"

const featured = featuredSlugs.map((slug) => {
  const item = products.find((p) => p.slug === slug)
  if (!item) throw new Error(`Produk "${slug}" tidak ada di katalog Toko`)
  return item
})

/** Menu favorit. Harga diskon = harga normal dikurangi 5%. */
export const popularProductsContent: PopularProductsSectionProps = {
  eyebrow: "Renyah di Setiap Gigitan",
  title: "Menu Favorit",
  addToCartLabel: "Tambah ke Keranjang",
  addedLabel: "Ditambahkan ke keranjang",
  favoriteLabel: "Simpan ke favorit",
  viewMoreLabel: "Lihat Selengkapnya",
  viewMoreHref: "/toko",
  products: featured.map((item) => ({
    slug: item.slug,
    name: item.name,
    href: `/menu/${item.slug}`,
    image: item.image,
    imageAlt: item.imageAlt,
    discountLabel: "-5%",
    price: formatRupiah(item.price),
    originalPrice: formatRupiah(item.originalPrice),
    rating: item.rating,
    ...(item.slug === activeSlug ? { active: true } : {}),
  })),
}
