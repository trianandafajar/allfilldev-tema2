import type { Product, ProductSize } from "@/types/product"

export const SHOP_PATH = "/toko"
export const SHOP_PAGE_SIZE = 5
export const SHOP_PRICE_MIN = 0
export const SHOP_PRICE_MAX = 100000
export const SHOP_PRICE_STEP = 1000

export const sortValues = ["terbaru", "harga-asc", "harga-desc", "rating", "nama"] as const
export type SortValue = (typeof sortValues)[number]
export const DEFAULT_SORT: SortValue = "terbaru"

const sizeValues: readonly ProductSize[] = ["kecil", "sedang", "besar", "ekstra-besar"]

export type ShopParams = {
  urut: SortValue
  halaman: number
  kategori: string | null
  harga: [number, number] | null
  ukuran: ProductSize[]
}

type RawSearchParams = Record<string, string | string[] | undefined>

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value
}

function list(value: string | string[] | undefined): string[] {
  if (value === undefined) return []
  return Array.isArray(value) ? value : [value]
}

export function parseShopParams(
  raw: RawSearchParams,
  categorySlugs: readonly string[]
): ShopParams {
  const urut = sortValues.find((v) => v === first(raw.urut)) ?? DEFAULT_SORT

  const pageNumber = Number.parseInt(first(raw.halaman) ?? "1", 10)
  const halaman = Number.isFinite(pageNumber) && pageNumber > 0 ? pageNumber : 1

  const kategoriRaw = first(raw.kategori)
  const kategori = kategoriRaw && categorySlugs.includes(kategoriRaw) ? kategoriRaw : null

  let harga: ShopParams["harga"] = null
  const hargaMatch = /^(\d+)-(\d+)$/.exec(first(raw.harga) ?? "")
  if (hargaMatch) {
    const a = Number(hargaMatch[1])
    const b = Number(hargaMatch[2])
    const min = Math.max(SHOP_PRICE_MIN, Math.min(a, b))
    const max = Math.min(SHOP_PRICE_MAX, Math.max(a, b))
    if (min > SHOP_PRICE_MIN || max < SHOP_PRICE_MAX) harga = [min, max]
  }

  const ukuran = sizeValues.filter((size) => list(raw.ukuran).includes(size))

  return { urut, halaman, kategori, harga, ukuran }
}

export function filterProducts(items: readonly Product[], params: ShopParams): Product[] {
  return items.filter((item) => {
    if (params.kategori && item.category !== params.kategori) return false
    if (params.harga && (item.price < params.harga[0] || item.price > params.harga[1])) return false
    if (params.ukuran.length > 0 && !params.ukuran.some((size) => item.sizes.includes(size))) return false
    return true
  })
}

export function sortProducts(items: readonly Product[], sort: SortValue): Product[] {
  const copy = [...items]
  switch (sort) {
    case "harga-asc":
      return copy.sort((a, b) => a.price - b.price)
    case "harga-desc":
      return copy.sort((a, b) => b.price - a.price)
    case "rating":
      return copy.sort((a, b) => b.rating - a.rating)
    case "nama":
      return copy.sort((a, b) => a.name.localeCompare(b.name, "id"))
    default:
      return copy
  }
}

export function buildShopHref(params: ShopParams, override: Partial<ShopParams> = {}): string {
  const next = { ...params, ...override }
  const query = new URLSearchParams()
  if (next.urut !== DEFAULT_SORT) query.set("urut", next.urut)
  if (next.kategori) query.set("kategori", next.kategori)
  if (next.harga) query.set("harga", `${next.harga[0]}-${next.harga[1]}`)
  for (const size of next.ukuran) query.append("ukuran", size)
  if (next.halaman > 1) query.set("halaman", String(next.halaman))
  const qs = query.toString()
  return qs ? `${SHOP_PATH}?${qs}` : SHOP_PATH
}

export function withFilterChange(params: ShopParams, override: Partial<ShopParams>): string {
  return buildShopHref(params, { ...override, halaman: 1 })
}
