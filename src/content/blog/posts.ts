import type { BlogCategory, BlogPost } from "@/types/blog"

/** Kategori blog. Urutan di sini menjadi urutan di sidebar. */
export const blogCategories: readonly BlogCategory[] = [
  { slug: "tips-dapur", label: "Tips Dapur" },
  { slug: "menu-baru", label: "Menu Baru" },
  { slug: "kisah-kami", label: "Kisah Kami" },
  { slug: "info-pelanggan", label: "Info Pelanggan" },
]

/**
 * Artikel blog, terbaru lebih dulu. Isi adalah teks contoh; ganti dengan artikel asli.
 * Gambar sampul adalah foto contoh dari template.
 */
export const blogPosts: readonly BlogPost[] = [
  {
    slug: "rahasia-ayam-goreng-krispi",
    title: "Rahasia Ayam Goreng Krispi yang Tetap Renyah Sampai Gigitan Terakhir",
    excerpt:
      "Kulit renyah dan daging tetap juicy bukan kebetulan. Ini tahapan yang kami lakukan di dapur, dari marinasi sampai penirisan.",
    cover: "blog/post-1.jpg",
    coverAlt: "Potongan ayam goreng krispi berwarna keemasan",
    category: "tips-dapur",
    tags: ["ayam goreng", "resep", "dapur"],
    author: "Rizky Pratama",
    date: "2026-10-20",
    readingMinutes: 4,
    body: [
      {
        type: "paragraph",
        text: "Ayam goreng krispi terlihat sederhana, tetapi hasilnya ditentukan oleh beberapa langkah kecil yang dikerjakan dengan disiplin. Berikut yang kami pegang di dapur Foodking.",
      },
      { type: "heading", text: "Marinasi yang cukup waktu" },
      {
        type: "paragraph",
        text: "Bumbu perlu waktu untuk meresap. Potongan ayam direndam dalam bumbu dan sedikit buttermilk agar dagingnya empuk, lalu didiamkan di dalam lemari pendingin sebelum digoreng.",
      },
      {
        type: "list",
        items: [
          "Gunakan ayam yang sudah dingin, bukan beku setengah mencair",
          "Tepung dibumbui sendiri, jangan hanya bumbu di daging",
          "Tekan tepung ke permukaan ayam supaya menempel rapat",
        ],
      },
      { type: "heading", text: "Suhu minyak dan penirisan" },
      {
        type: "paragraph",
        text: "Minyak yang terlalu dingin membuat tepung menyerap minyak, sedangkan yang terlalu panas membuat luarnya gosong sementara dalamnya belum matang. Kami menjaga suhu stabil dan menggoreng dalam porsi kecil.",
      },
      {
        type: "quote",
        text: "Setelah diangkat, tiriskan di rak kawat, jangan di atas tisu. Uap yang terjebak akan melembekkan kulitnya.",
      },
    ],
  },
  {
    slug: "burger-baru-bulan-ini",
    title: "Kenalan dengan Burger Baru: Daging Sapi, Keju Leleh, Saus Rahasia",
    excerpt:
      "Menu burger terbaru kami hadir dengan roti panggang mentega dan saus racikan dapur. Cocok untuk makan siang yang mengenyangkan.",
    cover: "blog/post-2.jpg",
    coverAlt: "Burger daging sapi dengan keju dan selada",
    category: "menu-baru",
    tags: ["burger", "menu baru"],
    author: "Dewi Lestari",
    date: "2026-10-08",
    readingMinutes: 3,
    body: [
      {
        type: "paragraph",
        text: "Setelah beberapa bulan uji coba resep, burger baru kami akhirnya masuk menu tetap. Patty daging sapi dibumbui sederhana supaya rasa dagingnya tetap menonjol.",
      },
      {
        type: "image",
        src: "blog/post-inner.jpg",
        alt: "Burger baru Foodking disajikan di atas kertas minyak",
      },
      { type: "heading", text: "Apa saja isinya" },
      {
        type: "list",
        items: [
          "Patty daging sapi yang dipanggang di atas plat panas",
          "Keju cheddar leleh dan irisan acar",
          "Roti brioche dipanggang dengan mentega",
          "Saus racikan dapur dengan sedikit rasa asap",
        ],
      },
      {
        type: "paragraph",
        text: "Burger ini bisa dipesan satuan atau paket bersama kentang goreng dan minuman. Cek halaman Toko untuk pilihan paket terbaru.",
      },
    ],
  },
  {
    slug: "cara-pesan-antar-30-menit",
    title: "Cara Memesan Antar Foodking Supaya Sampai dalam 30 Menit",
    excerpt:
      "Beberapa kebiasaan kecil saat memesan bisa mempercepat pesanan Anda tiba: alamat jelas, nomor aktif, dan waktu pesan yang tepat.",
    cover: "blog/post-3.jpg",
    coverAlt: "Kurir Foodking membawa kotak pesanan",
    category: "info-pelanggan",
    tags: ["pesan antar", "tips"],
    author: "Hendra Kusuma",
    date: "2026-09-25",
    readingMinutes: 3,
    body: [
      {
        type: "paragraph",
        text: "Target antar 30 menit kami berlaku untuk alamat dalam jangkauan. Anda bisa membantu kurir sampai lebih cepat dengan beberapa hal berikut.",
      },
      {
        type: "list",
        items: [
          "Tulis alamat selengkap mungkin, termasuk patokan dan nomor rumah",
          "Pastikan nomor telepon aktif agar kurir bisa menghubungi Anda",
          "Pesan sedikit lebih awal dari jam makan siang atau makan malam yang padat",
          "Pilih metode pembayaran yang sudah siap saat pesanan tiba",
        ],
      },
      { type: "heading", text: "Jika pesanan terlambat" },
      {
        type: "paragraph",
        text: "Hubungi kami lewat nomor di halaman Kontak dan sebutkan nomor pesanan. Tim kami akan memeriksa posisi kurir dan mengabari Anda.",
      },
    ],
  },
  {
    slug: "dari-warung-kecil-ke-dapur-modern",
    title: "Dari Warung Kecil ke Dapur Modern: Kisah Foodking",
    excerpt:
      "Foodking dimulai dari satu gerobak dan satu resep ayam. Inilah perjalanan kami dan hal yang tetap kami jaga sampai sekarang.",
    cover: "blog/post-4.jpg",
    coverAlt: "Dapur Foodking dengan koki yang sedang bekerja",
    category: "kisah-kami",
    tags: ["kisah", "dapur"],
    author: "Budi Santoso",
    date: "2026-09-10",
    readingMinutes: 5,
    body: [
      {
        type: "paragraph",
        text: "Cerita kami dimulai dari dapur rumahan dengan satu resep keluarga. Pelanggan datang karena rasa, lalu kembali karena pelayanan yang ramah.",
      },
      {
        type: "quote",
        text: "Kami percaya makanan yang dimasak sepenuh hati bisa menghadirkan hal luar biasa.",
      },
      { type: "heading", text: "Yang tidak berubah" },
      {
        type: "paragraph",
        text: "Dapur kami bertambah besar, tetapi cara kerjanya tetap sama: bahan segar dipasok setiap hari, resep dijaga konsisten, dan setiap pesanan diperiksa sebelum keluar dari dapur.",
      },
      {
        type: "list",
        items: [
          "Bahan segar dipasok setiap hari",
          "Resep orisinal yang dijaga konsisten",
          "Pesanan diperiksa sebelum dikirim",
        ],
      },
    ],
  },
  {
    slug: "pizza-di-rumah-tips-menghangatkan",
    title: "Pizza Sisa? Begini Cara Menghangatkannya Tanpa Jadi Alot",
    excerpt:
      "Microwave sering membuat dasar pizza lembek. Coba cara menghangatkan ini supaya keju kembali leleh dan pinggirannya renyah.",
    cover: "blog/01.jpg",
    coverAlt: "Irisan pizza keju yang meleleh",
    category: "tips-dapur",
    tags: ["pizza", "tips"],
    author: "Agus Wijaya",
    date: "2026-08-28",
    readingMinutes: 2,
    body: [
      {
        type: "paragraph",
        text: "Pizza hari ini sering jadi camilan besok. Supaya rasanya tidak turun, hindari microwave dan pakai wajan atau oven.",
      },
      { type: "heading", text: "Dengan wajan" },
      {
        type: "list",
        items: [
          "Panaskan wajan anti lengket dengan api kecil",
          "Letakkan irisan pizza, tutup rapat selama dua sampai tiga menit",
          "Angkat saat dasar renyah dan keju sudah meleleh",
        ],
      },
      {
        type: "paragraph",
        text: "Untuk oven atau oven listrik, panaskan di suhu sedang selama sepuluh menit di atas loyang yang sudah dipanaskan.",
      },
    ],
  },
  {
    slug: "combo-keluarga-hemat",
    title: "Paket Combo Keluarga: Makan Berempat Tanpa Bikin Dompet Kering",
    excerpt:
      "Paket combo terbaru dirancang untuk berbagi. Satu pesanan cukup untuk empat orang, dengan pilihan ayam, burger, dan minuman.",
    cover: "blog/02.jpg",
    coverAlt: "Paket combo berisi ayam, burger, kentang, dan minuman",
    category: "menu-baru",
    tags: ["combo", "keluarga", "promo"],
    author: "Maya Anggraini",
    date: "2026-08-12",
    readingMinutes: 3,
    body: [
      {
        type: "paragraph",
        text: "Makan bersama keluarga seharusnya praktis. Karena itu kami menyusun paket combo yang sudah memuat lauk, pendamping, dan minuman dalam satu pesanan.",
      },
      {
        type: "list",
        items: [
          "Ayam goreng krispi dan burger dalam satu paket",
          "Kentang goreng porsi besar untuk berbagi",
          "Minuman dingin untuk semua orang",
        ],
      },
      {
        type: "paragraph",
        text: "Pesan lewat halaman Toko, lalu selesaikan di Checkout. Untuk pesanan acara yang lebih besar, hubungi kami minimal satu hari sebelumnya.",
      },
    ],
  },
]

export const blogPageContent = {
  metadata: {
    title: "Blog",
    description:
      "Tips dapur, menu baru, dan kisah di balik Foodking. Baca artikel terbaru dari tim kami.",
  },
  banner: {
    title: "Blog",
    crumbs: [{ label: "Beranda", href: "/" }, { label: "Blog" }],
  },
  list: {
    readMore: "Baca Selengkapnya",
    readingTime: "menit baca",
    empty: "Tidak ada artikel yang cocok dengan pencarian Anda.",
    emptyReset: "Lihat semua artikel",
    resultsFor: "Hasil untuk",
  },
  pagination: {
    label: "Halaman artikel",
    previous: "Halaman sebelumnya",
    next: "Halaman berikutnya",
  },
  sidebar: {
    searchTitle: "Cari Artikel",
    searchLabel: "Kata kunci",
    searchPlaceholder: "Cari artikel",
    searchButton: "Cari",
    categoriesTitle: "Kategori",
    recentTitle: "Artikel Terbaru",
    tagsTitle: "Tag Populer",
  },
} as const

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getCategory(slug: string): BlogCategory | undefined {
  return blogCategories.find((category) => category.slug === slug)
}

/** Artikel terkait: kategori sama lebih dulu, lalu yang terbaru; tidak termasuk artikel itu sendiri. */
export function getRelatedPosts(post: BlogPost, count = 3): BlogPost[] {
  const others = blogPosts.filter((item) => item.slug !== post.slug)
  const sameCategory = others.filter((item) => item.category === post.category)
  const rest = others.filter((item) => item.category !== post.category)
  return [...sameCategory, ...rest].slice(0, count)
}

/** Semua tag unik, diurutkan dari yang paling sering dipakai. */
export function getAllTags(): string[] {
  const counts = new Map<string, number>()
  for (const post of blogPosts) {
    for (const tag of post.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1)
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "id"))
    .map(([tag]) => tag)
}
