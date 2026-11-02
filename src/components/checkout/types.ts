import type { CartItem, CartTotals } from "@/lib/cart"

/** Salinan pesanan yang ditampilkan di layar sukses, diambil sebelum keranjang dikosongkan. */
export type OrderReceipt = {
  number: string
  name: string
  paymentLabel: string
  items: readonly CartItem[]
  totals: CartTotals
}
