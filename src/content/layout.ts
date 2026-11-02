import type {
  FooterLinkGroup,
  GalleryImage,
  LinkItem,
  NavItem,
  SocialLink,
} from "@/components/layout/types"
import { contact } from "./contact"

/** Teks dan data untuk header, offcanvas, footer, dan preloader. */

export const siteLogo = {
  src: "logo/logo.svg",
  alt: "Logo Foodking",
  homeLabel: "Foodking, kembali ke beranda",
} as const

export const preloaderContent = {
  text: "FOODKING",
  label: "Memuat",
} as const

export const navItems: readonly NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Toko", href: "/toko" },
  { label: "Tim", href: "/tim" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
]

export const headerContent = {
  menuLabel: "Menu utama",
  topBar: {
    notice: {
      highlight: "100%",
      text: "Pengiriman aman tanpa kontak langsung dengan kurir",
    },
    searchLabel: "Cari",
    searchPlaceholder: "Cari",
  },
  cta: { label: "Hubungi Kami", href: "/kontak" } satisfies LinkItem,
  openMenuLabel: "Buka menu",
} as const

export const topBarSocialLinks: readonly SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook-f" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "Vimeo", href: "#", icon: "vimeo-v" },
  { label: "Pinterest", href: "#", icon: "pinterest-p" },
]

export const offcanvasSocialLinks: readonly SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook-f" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "LinkedIn", href: "#", icon: "linkedin-in" },
]

export const cartPreview = {
  label: "Keranjang belanja",
  emptyLabel: "Keranjang masih kosong",
  removeLabel: "Hapus",
  shippingLabel: "Ongkir",
  totalLabel: "Total",
  cartButton: { label: "Lihat Keranjang", href: "/keranjang" } satisfies LinkItem,
  checkoutButton: { label: "Checkout", href: "/checkout" } satisfies LinkItem,
} as const

const offcanvasGallery: readonly (readonly GalleryImage[])[] = [
  [
    { src: "header/01.jpg", alt: "Foto galeri Foodking 1" },
    { src: "header/02.jpg", alt: "Foto galeri Foodking 2" },
    { src: "header/03.jpg", alt: "Foto galeri Foodking 3" },
  ],
  [
    { src: "header/04.jpg", alt: "Foto galeri Foodking 4" },
    { src: "header/05.jpg", alt: "Foto galeri Foodking 5" },
    { src: "header/06.jpg", alt: "Foto galeri Foodking 6" },
  ],
]

export const offcanvasContent = {
  title: "Menu navigasi",
  closeLabel: "Tutup menu",
  expandLabel: "Buka submenu",
  about:
    "Foodking menyajikan burger, pizza, dan ayam goreng yang dimasak segar setiap hari. Pesan langsung dari sini atau mampir ke gerai kami.",
  gallery: offcanvasGallery,
  contactTitle: "Info Kontak",
  contactItems: [
    {
      icon: "map-marker-alt",
      family: "light",
      text: contact.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`,
    },
    {
      icon: "envelope",
      family: "light",
      text: contact.email,
      href: contact.emailHref,
    },
    { icon: "clock", family: "light", text: contact.hours },
    {
      icon: "phone",
      family: "regular",
      text: contact.phone,
      href: contact.phoneHref,
    },
  ],
  cta: { label: "Pesan Sekarang", href: "/toko" } satisfies LinkItem,
} as const

/** Pecah alamat menjadi baris jalan dan kode pos (lima digit di akhir) agar kode pos bisa diberi warna. */
function splitAddress(address: string) {
  const match = address.match(/^(.*?)[\s,]*(\d{5})$/)
  return match
    ? { street: match[1], postalCode: match[2] }
    : { street: address, postalCode: "" }
}

const footerQuickLinks: FooterLinkGroup = {
  title: "Tautan Cepat",
  links: [
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Blog", href: "/blog" },
    { label: "Tim Kami", href: "/tim" },
    { label: "Galeri", href: "/galeri" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontak", href: "/kontak" },
  ],
}

export const footerContent = {
  brand: {
    description:
      "Kami percaya makanan yang dimasak sepenuh hati bisa menghadirkan hal luar biasa.",
    emailPrompt: "Tertarik bekerja sama dengan kami?",
  },
  socialLinks: topBarSocialLinks,
  quickLinks: footerQuickLinks,
  address: {
    title: "Alamat:",
    ...splitAddress(contact.address),
    hoursTitle: "Jam Buka:",
    hours: contact.hours,
  },
  app: {
    title: "Unduh Aplikasi",
    prompt: "Tersedia di App Store dan Google Play",
    stores: [
      {
        src: "app-store.png",
        alt: "Unduh di App Store",
        href: "#",
      },
      {
        src: "google-play.png",
        alt: "Dapatkan di Google Play",
        href: "#",
      },
    ],
    supportLabel: "Layanan Pelanggan 24 Jam",
  },
  payment: {
    src: "card.png",
    alt: "Metode pembayaran yang diterima",
  },
  copyright: {
    prefix: "© Hak Cipta",
    year: "2026",
    brand: "Foodking",
    brandHref: "/",
    suffix: ". Semua Hak Dilindungi.",
  },
  legalLinks: [
    { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
    { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
  ] satisfies readonly LinkItem[],
} as const
