import type { BlogPost } from "@/types/blog"

export const BLOG_PATH = "/blog"
export const BLOG_PAGE_SIZE = 4

export type BlogParams = {
  halaman: number
  kategori: string | null
  tag: string | null
  q: string
}

type RawSearchParams = Record<string, string | string[] | undefined>

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value
}

/** Membaca query string Blog. Kategori yang tidak dikenal diabaikan; tag dan pencarian dipangkas. */
export function parseBlogParams(
  raw: RawSearchParams,
  categorySlugs: readonly string[],
  tags: readonly string[]
): BlogParams {
  const pageNumber = Number.parseInt(first(raw.halaman) ?? "1", 10)
  const halaman = Number.isFinite(pageNumber) && pageNumber > 0 ? pageNumber : 1

  const kategoriRaw = first(raw.kategori)
  const kategori = kategoriRaw && categorySlugs.includes(kategoriRaw) ? kategoriRaw : null

  const tagRaw = first(raw.tag)
  const tag = tagRaw && tags.includes(tagRaw) ? tagRaw : null

  const q = (first(raw.q) ?? "").trim().slice(0, 80)

  return { halaman, kategori, tag, q }
}

export function filterPosts(items: readonly BlogPost[], params: BlogParams): BlogPost[] {
  const needle = params.q.toLocaleLowerCase("id")
  return items.filter((post) => {
    if (params.kategori && post.category !== params.kategori) return false
    if (params.tag && !post.tags.includes(params.tag)) return false
    if (needle) {
      const haystack = `${post.title} ${post.excerpt}`.toLocaleLowerCase("id")
      if (!haystack.includes(needle)) return false
    }
    return true
  })
}

export function buildBlogHref(params: BlogParams, override: Partial<BlogParams> = {}): string {
  const next = { ...params, ...override }
  const query = new URLSearchParams()
  if (next.q) query.set("q", next.q)
  if (next.kategori) query.set("kategori", next.kategori)
  if (next.tag) query.set("tag", next.tag)
  if (next.halaman > 1) query.set("halaman", String(next.halaman))
  const qs = query.toString()
  return qs ? `${BLOG_PATH}?${qs}` : BLOG_PATH
}

/** Tautan filter: mengganti filter selalu kembali ke halaman 1. */
export function withBlogFilter(params: BlogParams, override: Partial<BlogParams>): string {
  return buildBlogHref(params, { ...override, halaman: 1 })
}
