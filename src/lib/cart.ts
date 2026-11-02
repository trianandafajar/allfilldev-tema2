import type { Product } from "@/types/product"

/**
 * Keranjang belanja. Hanya slug dan jumlah yang disimpan; harga selalu dibaca dari katalog
 * sehingga tidak pernah basi. Fungsi di sini murni, penyimpanan ada di `cart-provider.tsx`
 * (localStorage, kunci `CART_STORAGE_KEY`).
 */
export type CartLine = { slug: string; quantity: number }

export const CART_STORAGE_KEY = "foodking.cart"
export const CART_MAX_QUANTITY = 99
/** Ongkir tetap bila keranjang berisi minimal satu item (rupiah). */
export const CART_SHIPPING = 10000

export const EMPTY_CART: readonly CartLine[] = []

function clampQuantity(quantity: number): number {
  if (!Number.isFinite(quantity)) return 1
  return Math.min(CART_MAX_QUANTITY, Math.max(1, Math.floor(quantity)))
}

export function addLine(lines: readonly CartLine[], slug: string, quantity: number): CartLine[] {
  const amount = clampQuantity(quantity)
  const exists = lines.some((line) => line.slug === slug)
  if (!exists) return [...lines, { slug, quantity: amount }]
  return lines.map((line) =>
    line.slug === slug ? { slug, quantity: clampQuantity(line.quantity + amount) } : line
  )
}

export function setLineQuantity(
  lines: readonly CartLine[],
  slug: string,
  quantity: number
): CartLine[] {
  return lines.map((line) =>
    line.slug === slug ? { slug, quantity: clampQuantity(quantity) } : line
  )
}

export function removeLine(lines: readonly CartLine[], slug: string): CartLine[] {
  return lines.filter((line) => line.slug !== slug)
}

/** Membaca JSON dari storage; membuang data rusak, slug yang tidak ada di katalog, dan duplikat. */
export function parseCart(raw: string | null, catalog: readonly Product[]): CartLine[] {
  if (!raw) return []
  let data: unknown
  try {
    data = JSON.parse(raw)
  } catch {
    return []
  }
  if (!Array.isArray(data)) return []
  const known = new Set(catalog.map((item) => item.slug))
  const lines: CartLine[] = []
  for (const entry of data) {
    if (typeof entry !== "object" || entry === null) continue
    const { slug, quantity } = entry as Record<string, unknown>
    if (typeof slug !== "string" || !known.has(slug)) continue
    if (typeof quantity !== "number") continue
    if (lines.some((line) => line.slug === slug)) continue
    lines.push({ slug, quantity: clampQuantity(quantity) })
  }
  return lines
}

export type CartItem = { product: Product; quantity: number; subtotal: number }

/** Menggabungkan baris keranjang dengan data produk; baris dengan slug tak dikenal dilewati. */
export function resolveCart(lines: readonly CartLine[], catalog: readonly Product[]): CartItem[] {
  const items: CartItem[] = []
  for (const line of lines) {
    const product = catalog.find((item) => item.slug === line.slug)
    if (product) {
      items.push({ product, quantity: line.quantity, subtotal: product.price * line.quantity })
    }
  }
  return items
}

export type CartTotals = { count: number; subtotal: number; shipping: number; total: number }

export function cartTotals(items: readonly CartItem[]): CartTotals {
  const count = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0)
  const shipping = items.length > 0 ? CART_SHIPPING : 0
  return { count, subtotal, shipping, total: subtotal + shipping }
}
