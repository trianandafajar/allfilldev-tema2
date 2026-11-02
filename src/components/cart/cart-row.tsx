"use client"

import Link from "next/link"
import { Icon } from "@/components/common/icon"
import { SiteImage } from "@/components/common/site-image"
import { CART_MAX_QUANTITY, type CartItem } from "@/lib/cart"
import { formatRupiah } from "@/lib/format"

export type CartRowLabels = {
  /** Setiap label memuat placeholder `{name}` untuk nama produk. */
  increase: string
  decrease: string
  remove: string
}

type CartRowProps = {
  item: CartItem
  labels: CartRowLabels
  onQuantityChange: (slug: string, quantity: number) => void
  onRemove: (slug: string) => void
}

const cellClass = "border-b border-line py-4"
const quantityButtonClass =
  "block cursor-pointer text-heading transition-all duration-300 hover:text-theme disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-heading"

/** Satu baris produk di tabel keranjang (padanan `tr.cart-item`). */
export function CartRow({ item, labels, onQuantityChange, onRemove }: CartRowProps) {
  const { product, quantity, subtotal } = item
  const fill = (template: string) => template.replace("{name}", product.name)

  return (
    <tr>
      <td className={cellClass}>
        <div className="flex items-center gap-4">
          <SiteImage
            src={product.image}
            alt={product.imageAlt}
            className="h-[132px] w-[129px] shrink-0 rounded-[5px] object-contain"
          />
          <Link
            href={`/menu/${product.slug}`}
            className="text-body-text hover:text-theme"
          >
            {product.name}
          </Link>
        </div>
      </td>
      <td className={`${cellClass} text-heading`}>{formatRupiah(product.price)}</td>
      <td className={cellClass}>
        <div className="flex w-[100px] items-center justify-center gap-2.5 rounded-[5px] bg-surface px-5 py-0.5">
          <span className="block text-heading" aria-live="polite">
            {quantity}
          </span>
          <div>
            <button
              type="button"
              className={quantityButtonClass}
              aria-label={fill(labels.increase)}
              disabled={quantity >= CART_MAX_QUANTITY}
              onClick={() => onQuantityChange(product.slug, quantity + 1)}
            >
              <Icon name="caret-up" family="regular" />
            </button>
            <button
              type="button"
              className={quantityButtonClass}
              aria-label={fill(labels.decrease)}
              disabled={quantity <= 1}
              onClick={() => onQuantityChange(product.slug, quantity - 1)}
            >
              <Icon name="caret-down" family="regular" />
            </button>
          </div>
        </div>
      </td>
      <td className={`${cellClass} text-heading`}>{formatRupiah(subtotal)}</td>
      <td className={cellClass}>
        <button
          type="button"
          className="block cursor-pointer text-heading transition-all duration-300 hover:text-theme-2"
          aria-label={fill(labels.remove)}
          onClick={() => onRemove(product.slug)}
        >
          <Icon name="times" family="solid" />
        </button>
      </td>
    </tr>
  )
}
