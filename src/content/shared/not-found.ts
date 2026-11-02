/** Teks halaman 404. */
export const notFoundContent = {
  metadata: { title: "Halaman Tidak Ditemukan" },
  banner: {
    title: "Halaman Tidak Ditemukan",
    crumbs: [{ label: "Beranda", href: "/" }, { label: "404" }],
  },
  code: "404",
  heading: "Ups, halaman ini tidak ada",
  message:
    "Alamat yang Anda buka mungkin salah ketik atau halamannya sudah dipindahkan. Kembali ke beranda atau lihat menu kami.",
  actions: {
    home: { label: "Kembali ke Beranda", href: "/" },
    shop: { label: "Lihat Menu", href: "/toko" },
  },
} as const
