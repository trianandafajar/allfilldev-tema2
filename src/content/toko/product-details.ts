import { formatRupiah } from "@/lib/format"
import { CART_SHIPPING } from "@/lib/cart"
import type { Product, ProductDetail, ProductReview } from "@/types/product"
import { productSizeLabels, products, shopCategories } from "./products"

/** Teks halaman detail produk (`/menu/<slug>`). */
export const productDetailContent = {
  banner: { title: "Detail Produk", homeLabel: "Beranda", shopLabel: "Toko" },
  gallery: {
    imageLabel: (index: number, name: string) => `${name}, gambar ${index}`,
    thumbnailLabel: (index: number) => `Tampilkan gambar ${index}`,
    zoomLabel: "Buka gambar ukuran penuh",
  },
  summary: {
    reviewCount: (count: number) => `( ${count} Ulasan )`,
    quantityLabel: "Jumlah:",
    quantityInputLabel: "Jumlah produk",
    decreaseLabel: "Kurangi jumlah",
    increaseLabel: "Tambah jumlah",
    addToCart: "Tambah ke Keranjang",
    addedLabel: "Ditambahkan ke keranjang",
    favoriteLabel: "Simpan ke favorit",
    shippingLabel: "Biaya pengiriman:",
    shippingValue: formatRupiah(CART_SHIPPING),
    skuLabel: "SKU:",
    categoriesLabel: "Kategori:",
    tagsLabel: "Tag:",
    discountLabel: "-5%",
  },
  tabs: {
    ariaLabel: "Informasi produk",
    description: "Deskripsi",
    additional: "Informasi Tambahan",
    reviews: (count: number) => `Ulasan (${count})`,
  },
  description: {
    heading: "Cita rasa yang bikin ketagihan",
    paragraphs: (name: string, summary: string) => [
      `${summary} Setiap porsi ${name} dimasak segar saat dipesan, sehingga tekstur dan rasanya tetap terjaga sampai ke meja Anda.`,
      "Kami memilih bahan berkualitas dan bumbu yang diracik sendiri di dapur Foodking. Cocok disantap sendiri, bersama keluarga, atau sebagai pelengkap menu lain saat berkumpul dengan teman.",
    ],
    moreHeading: "Rincian Lainnya",
    details: [
      "Dimasak segar setiap hari dari bahan pilihan",
      "Bumbu racikan sendiri dengan rasa yang konsisten",
      "Disajikan hangat dengan saus pilihan",
      "Pesan antar cepat dalam 30 menit",
      "Kemasan rapat agar tetap renyah di perjalanan",
      "Tersedia pilihan ukuran sesuai selera",
      "Harga sudah termasuk diskon 5%",
      "Bisa dipesan untuk acara dan pesta kecil",
    ],
  },
  additional: {
    servings: { label: "Porsi", value: "1–2 orang" },
    prepTime: { label: "Waktu penyajian", value: "10–15 menit" },
    serving: { label: "Penyajian", value: "Panas, langsung dari dapur" },
    sizes: { label: "Ukuran tersedia" },
    priceRange: { label: "Rentang harga" },
  },
  reviews: {
    emptyLabel: "Belum ada ulasan.",
    formTitle: "Tulis ulasan",
    ratePrompt: "Beri nilai produk ini *",
    namePlaceholder: "Nama lengkap",
    emailPlaceholder: "Alamat email",
    messagePlaceholder: "Tulis ulasan Anda",
    nameLabel: "Nama lengkap",
    emailLabel: "Alamat email",
    messageLabel: "Ulasan",
    submit: "Kirim Ulasan",
    ratingLabel: (rating: number) => `Rating ${rating} dari 5`,
  },
  related: {
    eyebrow: "Renyah di Setiap Gigitan",
    title: "Produk Terkait",
  },
} as const

const reviews: readonly ProductReview[] = [
  {
    author: "Rina Maharani",
    date: "27 Juni 2026 pukul 17.44",
    rating: 5,
    text: "Porsinya pas dan rasanya konsisten. Pesanan sampai masih hangat dan kemasannya rapi. Pasti pesan lagi.",
    avatar: "shop-food/review/01.jpg",
  },
  {
    author: "Bagas Pratama",
    date: "21 Juni 2026 pukul 12.10",
    rating: 4,
    text: "Enak dan bumbunya terasa. Tambahan sausnya juga pas. Semoga tiap pesanan selalu secepat ini.",
    avatar: "shop-food/review/02.jpg",
  },
  {
    author: "Sinta Dewi",
    date: "15 Juni 2026 pukul 19.30",
    rating: 5,
    text: "Cocok untuk makan bareng keluarga. Anak-anak suka, kami sudah tiga kali pesan menu ini.",
    avatar: "shop-food/review/03.jpg",
  },
]

const RELATED_COUNT = 4

/** Produk terkait: kategori yang sama dulu, sisanya dari produk terbaru. */
function relatedSlugs(product: Product): string[] {
  const sameCategory = products.filter(
    (item) => item.slug !== product.slug && item.category === product.category
  )
  const others = products.filter(
    (item) => item.slug !== product.slug && item.category !== product.category
  )
  return [...sameCategory, ...others].slice(0, RELATED_COUNT).map((item) => item.slug)
}

export function getProduct(slug: string): Product | undefined {
  return products.find((item) => item.slug === slug)
}

export function getProductDetail(product: Product): ProductDetail {
  const category = shopCategories.find((item) => item.slug === product.category)
  const categoryLabel = category?.label ?? product.category
  const { additional } = productDetailContent
  const alt = product.imageAlt

  return {
    // Foto tambahan memakai aset template sebagai pengganti sampai foto produk tersedia.
    gallery: [
      { src: product.image, alt },
      { src: product.listImage, alt },
      { src: "shop-food/details-1.png", alt },
      { src: "shop-food/s1.png", alt },
    ],
    sku: `FK-${product.slug.toUpperCase()}`,
    categoryLabel,
    categoryHref: `/toko?kategori=${product.category}`,
    tags: [categoryLabel, "Cepat Saji", "Pesan Antar"],
    specs: [
      additional.servings,
      additional.prepTime,
      additional.serving,
      {
        label: additional.sizes.label,
        value: product.sizes.map((size) => productSizeLabels[size]).join(", "),
      },
      {
        label: additional.priceRange.label,
        value: `${formatRupiah(product.price)} – ${formatRupiah(product.maxPrice)}`,
      },
    ],
    reviews: [...reviews],
    related: relatedSlugs(product),
  }
}
