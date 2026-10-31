import type {
  CartPreviewItem,
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
  {
    label: "Toko",
    href: "/toko",
    children: [
      { label: "Grid Produk", href: "/toko" },
      { label: "Daftar Produk", href: "/toko/daftar" },
      { label: "Sidebar Kiri", href: "/toko/sidebar-kiri" },
      { label: "Sidebar Kanan", href: "/toko/sidebar-kanan" },
      { label: "Detail Produk", href: "/toko/detail" },
      { label: "Keranjang", href: "/keranjang" },
      { label: "Checkout", href: "/checkout" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Detail Blog", href: "/blog/detail" },
    ],
  },
  {
    label: "Halaman",
    href: "/tentang-kami",
    children: [
      { label: "Tentang Kami", href: "/tentang-kami" },
      {
        label: "Tim Koki",
        href: "/tim",
        children: [
          { label: "Koki", href: "/tim" },
          { label: "Detail Koki", href: "/tim/detail" },
        ],
      },
      {
        label: "Menu Makanan",
        href: "/menu",
        children: [
          { label: "Menu Makanan 01", href: "/menu" },
          { label: "Menu Makanan 02", href: "/menu/2" },
        ],
      },
      { label: "Galeri", href: "/galeri" },
      { label: "Testimoni", href: "/testimoni" },
      { label: "Reservasi", href: "/reservasi" },
      { label: "FAQ", href: "/faq" },
      { label: "Halaman 404", href: "/404" },
    ],
  },
  { label: "Kontak", href: "/kontak" },
]

export const headerContent = {
  menuLabel: "Menu utama",
  topBar: {
    notice: {
      highlight: "100%",
      text: "Pengiriman aman tanpa kontak langsung dengan kurir",
    },
    trackOrder: { label: "Lacak Pesanan", href: "/lacak-pesanan" } satisfies LinkItem,
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

const cartItems: readonly CartPreviewItem[] = [
  {
    name: "Ayam Panggang",
    price: "Rp45.000",
    href: "/toko/detail",
    image: "shop-food/s2.png",
    imageAlt: "Ayam panggang",
  },
  {
    name: "Ayam Panggang",
    price: "Rp38.000",
    href: "/toko/detail",
    image: "shop-food/s3.png",
    imageAlt: "Ayam panggang",
  },
]

export const cartPreview = {
  label: "Keranjang belanja",
  count: cartItems.length,
  items: cartItems,
  shippingLabel: "Ongkir",
  shippingValue: "Rp10.000",
  totalLabel: "Total",
  totalValue: "Rp93.000",
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
  cta: { label: "Pesan Sekarang", href: "/menu" } satisfies LinkItem,
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
    { label: "Layanan", href: "/tentang-kami" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Berita Terbaru", href: "/blog" },
    { label: "Tim Kami", href: "/tim" },
    { label: "Testimoni", href: "/testimoni" },
  ],
}

const footerAccountLinks: FooterLinkGroup = {
  title: "Akun Saya",
  links: [
    { label: "Profil Saya", href: "/akun" },
    { label: "Riwayat Pesanan", href: "/akun/pesanan" },
    { label: "Daftar Favorit", href: "/akun/favorit" },
    { label: "Lacak Pesanan", href: "/lacak-pesanan" },
    { label: "Keranjang Belanja", href: "/keranjang" },
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
  accountLinks: footerAccountLinks,
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
} as const
