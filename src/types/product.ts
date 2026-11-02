export type ProductSize = "kecil" | "sedang" | "besar" | "ekstra-besar"

export type Product = {
  slug: string
  name: string
  category: string
  price: number
  originalPrice: number
  maxPrice: number
  rating: number
  sizes: ProductSize[]
  description: string
  image: string
  imageAlt: string
  listImage: string
}

export type ShopCategory = {
  slug: string
  label: string
  icon:
    | "flaticon-burger"
    | "flaticon-chicken"
    | "flaticon-french-fries"
    | "flaticon-pizza"
    | "flaticon-sandwich"
    | "flaticon-bread"
    | "flaticon-rice"
    | "flaticon-hotdog"
}

export type ProductGalleryImage = { src: string; alt: string }

export type ProductReview = {
  author: string
  /** Tanggal dan jam siap tampil. */
  date: string
  rating: number
  text: string
  /** Path avatar relatif terhadap `public/images`. */
  avatar: string
}

/** Data turunan untuk halaman detail produk. */
export type ProductDetail = {
  gallery: ProductGalleryImage[]
  sku: string
  categoryLabel: string
  categoryHref: string
  tags: string[]
  /** Baris tabel "Informasi Tambahan". */
  specs: { label: string; value: string }[]
  reviews: ProductReview[]
  related: string[]
}
