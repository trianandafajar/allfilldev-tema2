import type { SortValue } from "@/lib/shop-query"

/** Teks halaman Toko (banner, toolbar, sidebar). */
export const shopPageContent = {
  metadata: {
    title: "Toko",
    description:
      "Pesan ayam goreng krispi, burger, pizza, pasta, dan menu cepat saji Foodking lainnya. Urutkan dan saring menu sesuai selera Anda.",
  },
  banner: {
    title: "Toko",
    crumbs: [{ label: "Beranda", href: "/" }, { label: "Toko" }],
    homeLabel: "Beranda",
  },
  toolbar: {
    filterLabel: "Menyaring",
    filterHref: "/toko",
    sortLabel: "Urutkan:",
    sortAriaLabel: "Urutkan produk",
    gridViewLabel: "Tampilan grid",
    listViewLabel: "Tampilan daftar",
    /** Mis. "Menampilkan 1–5 dari 17 hasil". */
    showing: { prefix: "Menampilkan", of: "dari", suffix: "hasil" },
    sortOptions: [
      { value: "terbaru", label: "Terbaru" },
      { value: "harga-asc", label: "Harga terendah" },
      { value: "harga-desc", label: "Harga tertinggi" },
      { value: "rating", label: "Rating tertinggi" },
      { value: "nama", label: "Nama A–Z" },
    ] satisfies { value: SortValue; label: string }[],
  },
  list: {
    orderLabel: "Pesan Sekarang",
    empty: "Tidak ada produk yang cocok dengan penyaringan Anda.",
    emptyReset: "Hapus semua filter",
  },
  pagination: {
    label: "Halaman produk",
    previous: "Halaman sebelumnya",
    next: "Halaman berikutnya",
  },
  sidebar: {
    categoriesTitle: "Kategori",
    priceTitle: "Filter Harga",
    priceLabel: "Harga:",
    priceSliderLabel: "Rentang harga",
    filterButton: "Filter",
    sizeTitle: "Filter Ukuran",
    newArrivalTitle: "Produk Terbaru",
  },
} as const
