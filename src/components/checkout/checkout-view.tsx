"use client"

import { useState } from "react"
import { CartEmpty } from "@/components/cart/cart-empty"
import { useCart } from "@/components/cart/cart-provider"
import { useHydrated } from "@/components/cart/use-hydrated"
import { checkoutPageContent } from "@/content/checkout/checkout-page"
import { CheckoutForm } from "./checkout-form"
import { OrderSuccess } from "./order-success"
import type { OrderReceipt } from "./types"

const placeholderClass = "flex min-h-[480px] flex-col justify-center"

/**
 * Isi halaman Checkout. Server dan hidrasi awal merender kotak kosong, supaya keranjang
 * yang sudah terisi tidak berkedip sebagai "kosong". Setelah pesanan dibuat, keranjang
 * dikosongkan dan salinan pesanan tetap tampil di layar sukses.
 */
export function CheckoutView() {
  const { items, totals, clear } = useCart()
  const hydrated = useHydrated()
  const [receipt, setReceipt] = useState<OrderReceipt | null>(null)
  const { loading, empty } = checkoutPageContent

  function handlePlaceOrder(next: OrderReceipt) {
    setReceipt(next)
    clear()
  }

  if (receipt) return <OrderSuccess receipt={receipt} />

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

  return <CheckoutForm items={items} totals={totals} onPlaceOrder={handlePlaceOrder} />
}
