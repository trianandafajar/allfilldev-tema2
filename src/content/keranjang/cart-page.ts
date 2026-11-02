/** Teks halaman Keranjang. Placeholder `{name}` diganti nama produk. */
export const cartPageContent = {
  metadata: {
    title: "Keranjang Belanja",
    description:
      "Periksa menu pilihan Anda, ubah jumlah pesanan, lalu lanjutkan ke checkout untuk memesan makanan Foodking.",
  },
  banner: {
    title: "Keranjang Belanja",
    crumbs: [{ label: "Beranda", href: "/" }, { label: "Keranjang" }],
  },
  loading: "Memuat keranjang belanja...",
  table: {
    columns: {
      product: "Produk",
      price: "Harga",
      quantity: "Jumlah",
      subtotal: "Subtotal",
      remove: "Hapus",
    },
    labels: {
      increase: "Tambah jumlah {name}",
      decrease: "Kurangi jumlah {name}",
      remove: "Hapus {name} dari keranjang",
    },
  },
  promo: {
    label: "Kode promo",
    placeholder: "Kode promo",
    submit: "Terapkan Kode",
  },
  summary: {
    title: "Total Keranjang",
    subtotal: "Subtotal",
    shipping: "Ongkir",
    total: "Total",
    checkout: { label: "Checkout", href: "/checkout" },
  },
  empty: {
    message: "Keranjang belanja Anda masih kosong.",
    action: { label: "Lanjut Belanja", href: "/toko" },
  },
} as const
