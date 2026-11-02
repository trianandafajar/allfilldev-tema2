"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { checkoutPageContent } from "@/content/checkout/checkout-page"
import type { CartItem, CartTotals } from "@/lib/cart"
import {
  isEmail,
  isPhone,
  isPostalCode,
  readText,
  type FieldErrors,
} from "@/lib/validation"
import { OrderSummary } from "./order-summary"
import { PaymentMethods } from "./payment-methods"
import { ShippingFields, type ShippingFieldName } from "./shipping-fields"
import type { OrderReceipt } from "./types"

type CheckoutFormProps = {
  items: readonly CartItem[]
  totals: CartTotals
  onPlaceOrder: (receipt: OrderReceipt) => void
}

const REQUIRED_FIELDS: readonly ShippingFieldName[] = [
  "name",
  "phone",
  "email",
  "address",
  "city",
  "postalCode",
]

/** Nomor pesanan contoh. Dipanggil dari event handler, bukan saat render. */
function createOrderNumber(prefix: string): string {
  return `${prefix}-${Date.now().toString(36).toUpperCase()}`
}

/**
 * Form checkout: data pengiriman, metode pembayaran, dan ringkasan pesanan.
 * Hanya tampilan; tidak ada data yang dikirim ke server. Titik sambung ke backend
 * ada di `handleSubmit`, tepat sebelum `onPlaceOrder`.
 */
export function CheckoutForm({ items, totals, onPlaceOrder }: CheckoutFormProps) {
  const { shipping, payment, summary, success } = checkoutPageContent
  const [errors, setErrors] = useState<FieldErrors<ShippingFieldName>>({})
  const [paymentValue, setPaymentValue] = useState<string>(payment.defaultValue)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const next: FieldErrors<ShippingFieldName> = {}

    for (const name of REQUIRED_FIELDS) {
      if (!readText(data, name)) next[name] = shipping.errors.required
    }
    if (!next.email && !isEmail(readText(data, "email"))) next.email = shipping.errors.email
    if (!next.phone && !isPhone(readText(data, "phone"))) next.phone = shipping.errors.phone
    if (!next.postalCode && !isPostalCode(readText(data, "postalCode"))) {
      next.postalCode = shipping.errors.postalCode
    }

    setErrors(next)
    const firstInvalid = REQUIRED_FIELDS.find((name) => next[name])
    if (firstInvalid) {
      const control = form.elements.namedItem(firstInvalid)
      if (control instanceof HTMLElement) control.focus()
      return
    }

    const method = payment.options.find((option) => option.value === paymentValue)
    onPlaceOrder({
      number: createOrderNumber(success.orderPrefix),
      name: readText(data, "name"),
      paymentLabel: method?.label ?? "",
      items,
      totals,
    })
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-5 lg:col-span-4 xl:col-span-3">
          <PaymentMethods
            legend={payment.legend}
            options={payment.options}
            value={paymentValue}
            onValueChange={setPaymentValue}
          />
        </div>
        <div className="md:col-span-7 lg:col-span-8 xl:col-span-9">
          <div className="mb-6 rounded-[5px] p-8 shadow-[0_6px_30px_0] shadow-black/6 max-sm:p-3.5">
            <h4 className="mb-8 text-heading">{shipping.title}</h4>
            <ShippingFields fields={shipping.fields} errors={errors} />
          </div>
          <div className="rounded-[5px] p-8 shadow-[0_6px_30px_0] shadow-black/6 max-sm:p-3.5">
            <h4 className="mb-8 text-heading">{summary.title}</h4>
            <OrderSummary labels={summary} items={items} totals={totals} />
            <div className="mt-6">
              <Button type="submit" variant="theme" size="theme" className="rounded-none">
                {summary.submit}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
