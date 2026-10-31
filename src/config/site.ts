export const siteConfig = {
  name: "Foodking",
  description:
    "Restoran cepat saji dengan ayam goreng krispi, burger, pizza, dan pasta. Pesan antar 30 menit atau reservasi meja.",
  language: "id",
  locale: "id_ID",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const sitePages = [
  { path: "/", title: "Beranda", description: siteConfig.description },
] as const;
