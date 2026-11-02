import type { IconName } from "@/components/common/icon-glyphs"

/** Item menu navigasi; `children` membentuk dropdown/submenu bertingkat. */
export type NavItem = {
  label: string
  href: string
  children?: readonly NavItem[]
}

/** Tautan sederhana (label + tujuan). */
export type LinkItem = {
  label: string
  href: string
}

/** Tautan media sosial berupa ikon brand. */
export type SocialLink = {
  label: string
  href: string
  icon: IconName
}

/** Gambar galeri pada offcanvas (path relatif terhadap `public/images`). */
export type GalleryImage = {
  src: string
  alt: string
}

/** Satu kolom tautan pada footer. */
export type FooterLinkGroup = {
  title: string
  links: readonly LinkItem[]
}
