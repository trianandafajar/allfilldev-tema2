/** Satu blok isi artikel. Dirender berurutan oleh `PostBody`. */
export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "image"; /** Path relatif terhadap `public/images`. */ src: string; alt: string }

export type BlogCategory = { slug: string; label: string }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  /** Path gambar sampul relatif terhadap `public/images`. */
  cover: string
  coverAlt: string
  /** Slug kategori; harus ada di `blogCategories`. */
  category: string
  tags: readonly string[]
  author: string
  /** Tanggal terbit format ISO (`2026-03-12`). */
  date: string
  readingMinutes: number
  body: readonly BlogBlock[]
}
