import { aboutContent } from "@/content/beranda/about"

/** Teks halaman Tentang Kami. Section lain dirakit dari konten Beranda dan Tim. */
export const aboutPageContent = {
  metadata: {
    title: "Tentang Kami",
    description:
      "Kenali Foodking: restoran cepat saji sejak 1985 dengan bahan segar, resep orisinal, dan pengantaran cepat 30 menit.",
  },
  banner: {
    title: "Tentang Kami",
    crumbs: [{ label: "Beranda", href: "/" }, { label: "Tentang Kami" }],
  },
  /** Pengantar yang sama dengan Beranda, dengan tombol diarahkan ke Kontak agar tidak menaut ke halamannya sendiri. */
  about: {
    ...aboutContent,
    padding: "default",
    ctaLabel: "Hubungi Kami",
    ctaHref: "/kontak",
  },
  teamAction: { label: "Lihat Semua Tim", href: "/tim" },
  teamPreviewCount: 3,
} as const
