import Link from "next/link"
import { Button } from "@/components/ui/button"
import { checkoutPageContent } from "@/content/checkout/checkout-page"
import { OrderSummary } from "./order-summary"
import type { OrderReceipt } from "./types"

type OrderSuccessProps = { receipt: OrderReceipt }

/** Layar konfirmasi setelah pesanan dibuat: nomor pesanan, ringkasan, dan tombol lanjut. */
export function OrderSuccess({ receipt }: OrderSuccessProps) {
  const { success, summary } = checkoutPageContent
  const { actions } = success

  return (
    <div className="mx-auto max-w-[720px] text-center">
      <h2 className="text-heading">{success.title}</h2>
      <p className="mx-auto mt-4 max-w-[560px]" role="status">
        {success.message.replace("{name}", receipt.name)}
      </p>
      <dl className="mt-8 grid grid-cols-1 gap-4 rounded-[5px] bg-surface p-6 text-left sm:grid-cols-2">
        <div>
          <dt className="text-sm text-body-text uppercase">{success.orderLabel}</dt>
          <dd className="text-[22px] font-bold text-theme-2">{receipt.number}</dd>
        </div>
        <div>
          <dt className="text-sm text-body-text uppercase">{success.paymentLabel}</dt>
          <dd className="text-[22px] font-bold text-heading">{receipt.paymentLabel}</dd>
        </div>
      </dl>
      <div className="mt-8 text-left">
        <h4 className="mb-4 text-heading">{summary.title}</h4>
        <OrderSummary labels={summary} items={receipt.items} totals={receipt.totals} />
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button asChild variant="theme" size="theme" className="rounded-none">
          <Link href={actions.shop.href}>{actions.shop.label}</Link>
        </Button>
        <Button asChild variant="theme-red" size="theme" className="rounded-none">
          <Link href={actions.home.href}>{actions.home.label}</Link>
        </Button>
      </div>
    </div>
  )
}
