import { blogPageContent, blogPosts } from "@/content/blog/posts";
import { faqPageContent } from "@/content/faq/faq-page";
import { galleryPageContent } from "@/content/galeri/gallery-page";
import { contactPageContent } from "@/content/kontak/contact-page";
import { privacyPageContent } from "@/content/legal/privacy";
import { termsPageContent } from "@/content/legal/terms";
import { aboutPageContent } from "@/content/tentang-kami/about-page";
import { teamPageContent } from "@/content/tim/team-page";
import { products } from "@/content/toko/products";

export const siteConfig = {
  name: "Foodking",
  description:
    "Restoran cepat saji dengan ayam goreng krispi, burger, pizza, dan pasta. Pesan antar 30 menit atau reservasi meja.",
  language: "id",
  locale: "id_ID",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  keywords: [
    "restoran cepat saji",
    "ayam goreng krispi",
    "burger",
    "pizza",
    "pesan antar makanan",
    "reservasi meja",
  ],
  category: "food",
  /** Mengikuti token `--theme` dan `--surface` di globals.css (manifest dan meta tidak bisa memakai CSS variable). */
  themeColor: "#00813d",
  backgroundColor: "#f4f1ea",
} as const;

type SitePage = { path: string; title: string; description: string };

/** Halaman publik; masuk ke sitemap dan llms.txt. Detail produk dan artikel diturunkan dari katalog dan daftar artikel. */
export const sitePages: readonly SitePage[] = [
  { path: "/", title: "Beranda", description: siteConfig.description },
  {
    path: "/toko",
    title: "Toko",
    description: "Daftar menu Foodking: ayam goreng, burger, pizza, dan lainnya.",
  },
  ...products.map((product) => ({
    path: `/menu/${product.slug}`,
    title: product.name,
    description: product.description,
  })),
  { path: "/blog", ...blogPageContent.metadata },
  ...blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.excerpt,
  })),
  { path: "/tentang-kami", ...aboutPageContent.metadata },
  { path: "/tim", ...teamPageContent.metadata },
  { path: "/galeri", ...galleryPageContent.metadata },
  { path: "/faq", ...faqPageContent.metadata },
  { path: "/kontak", ...contactPageContent.metadata },
  { path: "/kebijakan-privasi", ...privacyPageContent.metadata },
  { path: "/syarat-ketentuan", ...termsPageContent.metadata },
];
