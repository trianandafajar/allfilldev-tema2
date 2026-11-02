import type { ReactNode } from "react"

type ProductMetaRowProps = {
  label: string
  children: ReactNode
}

/** Baris rincian produk (SKU, kategori, tag): label di kiri, nilai bergeser 100px (`.details-info`). */
export function ProductMetaRow({ label, children }: ProductMetaRowProps) {
  return (
    <h6 className="relative not-last:mb-2.5">
      <span className="absolute top-0.5 left-0 text-[18px] font-semibold uppercase">{label}</span>
      <span className="ml-[100px] text-[18px] font-semibold text-heading uppercase">{children}</span>
    </h6>
  )
}
