import type { CartItem, CartTotals } from "@/lib/cart"
import { formatRupiah } from "@/lib/format"

type OrderSummaryProps = {
  labels: { subtotal: string; shipping: string; total: string }
  items: readonly CartItem[]
  totals: CartTotals
}

const rowClass =
  "flex justify-between gap-4 py-4 text-[18px] font-medium text-heading uppercase not-last:border-b not-last:border-line"

/** Daftar item, subtotal, ongkir, dan total, bergaya baris `.cart-graph`. Judul dan kartu disediakan pemanggil. */
export function OrderSummary({ labels, items, totals }: OrderSummaryProps) {
  const rows = [
    { label: labels.subtotal, value: totals.subtotal },
    { label: labels.shipping, value: totals.shipping },
    { label: labels.total, value: totals.total },
  ]

  return (
    <ul>
      {items.map(({ product, quantity, subtotal }) => (
        <li key={product.slug} className={rowClass}>
          <span>
            {product.name} × {quantity}
          </span>
          <span className="shrink-0">{formatRupiah(subtotal)}</span>
        </li>
      ))}
      {rows.map((row) => (
        <li key={row.label} className={rowClass}>
          <span>{row.label}</span>
          <span className="shrink-0">{formatRupiah(row.value)}</span>
        </li>
      ))}
    </ul>
  )
}
