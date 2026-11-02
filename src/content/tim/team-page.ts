/** Teks halaman Tim dan judul section tim yang dipakai ulang di halaman lain. */
export const teamSectionContent = {
  eyebrow: "Tim Kami",
  title: "Bertemu Koki Foodking",
  socialLabel: "Profil sosial",
} as const

export const teamPageContent = {
  metadata: {
    title: "Tim Kami",
    description:
      "Kenali koki dan tim dapur Foodking yang menyiapkan burger, pizza, dan ayam goreng krispi setiap hari.",
  },
  banner: {
    title: "Tim Kami",
    crumbs: [{ label: "Beranda", href: "/" }, { label: "Tim" }],
  },
} as const
