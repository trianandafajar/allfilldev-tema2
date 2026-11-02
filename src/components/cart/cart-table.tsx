import type { CartItem } from "@/lib/cart"
import { CartRow, type CartRowLabels } from "./cart-row"

export type CartTableColumns = {
  product: string
  price: string
  quantity: string
  subtotal: string
  remove: string
}

type CartTableProps = {
  items: readonly CartItem[]
  columns: CartTableColumns
  labels: CartRowLabels
  onQuantityChange: (slug: string, quantity: number) => void
  onRemove: (slug: string) => void
}

/** Tabel isi keranjang (padanan `.cart-items-wrapper`); lebar tetap 700px di bawah `md`, digulir oleh pembungkusnya. */
export function CartTable({
  items,
  columns,
  labels,
  onQuantityChange,
  onRemove,
}: CartTableProps) {
  const headings = [
    columns.product,
    columns.price,
    columns.quantity,
    columns.subtotal,
    columns.remove,
  ]

  return (
    <div className="max-md:w-[700px]">
      <table className="w-full">
        <thead className="border-b border-line">
          <tr>
            {headings.map((heading) => (
              <th
                key={heading}
                scope="col"
                className="pb-4 text-left font-bold text-heading uppercase"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <CartRow
              key={item.product.slug}
              item={item}
              labels={labels}
              onQuantityChange={onQuantityChange}
              onRemove={onRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
