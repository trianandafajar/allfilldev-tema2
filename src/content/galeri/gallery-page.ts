/** Teks dan data halaman Galeri. Foto contoh; ganti dengan foto gerai dan hidangan asli. */
export const galleryPageContent = {
  metadata: {
    title: "Galeri",
    description:
      "Lihat suasana gerai dan hidangan Foodking: burger, pizza, ayam goreng krispi, dan momen dari dapur kami.",
  },
  banner: {
    title: "Galeri",
    crumbs: [{ label: "Beranda", href: "/" }, { label: "Galeri" }],
  },
  openLabel: "Perbesar foto",
  closeLabel: "Tutup foto",
  items: [
    { src: "galeri/04.jpg", alt: "Meja hidangan Foodking dengan burger dan kentang goreng" },
    { src: "galeri/05.jpg", alt: "Pizza keju yang baru keluar dari oven" },
    { src: "galeri/06.jpg", alt: "Ayam goreng krispi disajikan dengan saus" },
    { src: "galeri/07.jpg", alt: "Koki Foodking menyiapkan pesanan di dapur" },
    { src: "galeri/08.jpg", alt: "Suasana ruang makan Foodking saat jam makan siang" },
    { src: "galeri/09.jpg", alt: "Paket combo burger, kentang, dan minuman dingin" },
  ],
} as const
