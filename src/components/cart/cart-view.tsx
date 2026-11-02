"use client"

import { cartPageContent } from "@/content/keranjang/cart-page"
import { CartEmpty } from "./cart-empty"
import { useCart } from "./cart-provider"
import { CartPromoFooter } from "./cart-promo-footer"
import { CartSummary } from "./cart-summary"
import { CartTable } from "./cart-table"
import { useHydrated } from "./use-hydrated"

const cardClass =
  "rounded-[5px] p-10 shadow-[0_6px_30px_0] shadow-black/6 max-md:overflow-x-scroll"
const placeholderClass = `${cardClass} flex min-h-[480px] flex-col justify-center`

/**
 * Isi halaman Keranjang. Server dan hidrasi awal merender kotak kosong setinggi keadaan
 * kosong, supaya pengguna yang sudah punya keranjang tidak melihat pesan "kosong" sesaat
 * dan tinggi halaman tidak melompat.
 */
export function CartView() {
  const { items, totals, setQuantity, remove } = useCart()
  const hydrated = useHydrated()
  const { table, promo, summary, empty, loading } = cartPageContent

  if (!hydrated) {
    return (
      <div className={placeholderClass} aria-busy="true">
        <p className="sr-only" role="status">
          {loading}
        </p>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className={placeholderClass}>
        <CartEmpty message={empty.message} action={empty.action} />
      </div>
    )
  }

  return (
    <>
      <div className={cardClass}>
        <CartTable
          items={items}
          columns={table.columns}
          labels={table.labels}
          onQuantityChange={setQuantity}
          onRemove={remove}
        />
        <CartPromoFooter
          label={promo.label}
          placeholder={promo.placeholder}
          submitLabel={promo.submit}
        />
      </div>
      <CartSummary
        title={summary.title}
        labels={summary}
        subtotal={totals.subtotal}
        shipping={totals.shipping}
        total={totals.total}
        checkout={summary.checkout}
      />
    </>
  )
}
