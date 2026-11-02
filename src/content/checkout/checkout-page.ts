/** Teks halaman Checkout. Placeholder `{name}` diganti nama pembeli. */
export const checkoutPageContent = {
  metadata: {
    title: "Checkout",
    description:
      "Isi data pengiriman dan pilih metode pembayaran untuk menyelesaikan pesanan makanan Foodking Anda.",
  },
  banner: {
    title: "Checkout",
    crumbs: [
      { label: "Beranda", href: "/" },
      { label: "Keranjang", href: "/keranjang" },
      { label: "Checkout" },
    ],
  },
  loading: "Memuat halaman checkout...",
  empty: {
    message: "Keranjang Anda kosong, belum ada yang bisa dipesan.",
    action: { label: "Lihat Menu", href: "/toko" },
  },
  shipping: {
    title: "Alamat Pengiriman",
    fields: {
      name: { label: "Nama lengkap", placeholder: "Nama lengkap" },
      phone: { label: "Nomor telepon", placeholder: "Nomor telepon" },
      email: { label: "Email", placeholder: "Email Anda" },
      address: { label: "Alamat lengkap", placeholder: "Alamat lengkap" },
      city: { label: "Kota", placeholder: "Kota" },
      postalCode: { label: "Kode pos", placeholder: "Kode pos" },
      note: { label: "Catatan untuk kurir atau dapur (opsional)", placeholder: "Catatan (opsional)" },
    },
    errors: {
      required: "Wajib diisi.",
      email: "Format email belum benar.",
      phone: "Nomor telepon harus 8–16 digit.",
      postalCode: "Kode pos harus 5 digit angka.",
    },
  },
  payment: {
    legend: "Pilih salah satu",
    defaultValue: "cod",
    options: [
      { value: "cod", label: "Bayar di Tempat (COD)" },
      { value: "transfer", label: "Transfer Bank" },
      { value: "ewallet", label: "E-Wallet / QRIS" },
    ],
  },
  summary: {
    title: "Ringkasan Pesanan",
    subtotal: "Subtotal",
    shipping: "Ongkir",
    total: "Total",
    submit: "Buat Pesanan",
  },
  success: {
    title: "Pesanan Diterima",
    message: "Terima kasih, {name}. Kami sudah menerima pesanan Anda dan segera menyiapkannya.",
    orderLabel: "Nomor pesanan",
    orderPrefix: "FK",
    paymentLabel: "Pembayaran",
    actions: {
      shop: { label: "Pesan Lagi", href: "/toko" },
      home: { label: "Kembali ke Beranda", href: "/" },
    },
  },
} as const
