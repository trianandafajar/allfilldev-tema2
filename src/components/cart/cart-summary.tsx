import Link from "next/link"
import { Button } from "@/components/ui/button"
import { formatRupiah } from "@/lib/format"

type CartSummaryProps = {
  title: string
  labels: { subtotal: string; shipping: string; total: string }
  subtotal: number
  shipping: number
  total: number
  checkout: { label: string; href: string }
}

const cellClass = "w-1/2 py-4 text-[18px] font-medium text-heading uppercase"

/** Kotak total keranjang (padanan `.cart-pragh-box` + `.cart-graph`). Rata kanan pada `xl`, selebar setengah kontainer. */
export function CartSummary({
  title,
  labels,
  subtotal,
  shipping,
  total,
  checkout,
}: CartSummaryProps) {
  const rows = [
    { label: labels.subtotal, value: subtotal },
    { label: labels.shipping, value: shipping },
    { label: labels.total, value: total },
  ]

  return (
    <div className="mt-6 pr-[30px] pb-[30px] xl:ml-auto xl:w-[calc(50%-12px)]">
      <div className="rounded-[5px] border border-line p-[30px]">
        <h4 className="mb-[30px] text-center text-heading">{title}</h4>
        <ul className="mb-[30px]">
          {rows.map((row) => (
            <li key={row.label} className="flex not-last:border-b not-last:border-line">
              <span className={cellClass}>{row.label}</span>
              <span className={cellClass}>{formatRupiah(row.value)}</span>
            </li>
          ))}
        </ul>
        <div>
          <Button asChild variant="theme" size="theme" className="rounded-none">
            <Link href={checkout.href}>{checkout.label}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
