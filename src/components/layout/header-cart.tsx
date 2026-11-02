"use client"

import Link from "next/link"
import { useCart } from "@/components/cart/cart-provider"
import { Icon } from "@/components/common/icon"
import { SiteImage } from "@/components/common/site-image"
import { ThemeButton } from "@/components/common/theme-button"
import { formatRupiah } from "@/lib/format"
import type { LinkItem } from "./types"

type HeaderCartProps = {
  label: string
  emptyLabel: string
  removeLabel: string
  shippingLabel: string
  totalLabel: string
  cartButton: LinkItem
  checkoutButton: LinkItem
}

/** Ikon keranjang dengan dropdown pratinjau yang terbuka saat hover. Tersembunyi di bawah `xl`. */
export function HeaderCart({
  label,
  emptyLabel,
  removeLabel,
  shippingLabel,
  totalLabel,
  cartButton,
  checkoutButton,
}: HeaderCartProps) {
  const { items, totals, remove } = useCart()

  return (
    <div className="group/cart relative max-xl:hidden">
      <div className="invisible absolute top-[200%] left-[-70px] z-9999 w-[340px] origin-top rotate-x-90 bg-white px-5 pt-[5px] pb-0 shadow-[0_0_7px_0.5px] shadow-black/15 transition-all duration-500 ease-[ease] group-hover/cart:visible group-hover/cart:rotate-x-0">
        {items.length === 0 ? (
          <p className="py-5 text-center text-[18px] font-semibold text-heading uppercase">
            {emptyLabel}
          </p>
        ) : (
          <>
            <ul className="max-h-[320px] overflow-y-auto">
              {items.map(({ product, quantity }) => (
                <li
                  key={product.slug}
                  className="flex items-center gap-2.5 border-b border-line py-0.5 text-base font-semibold uppercase"
                >
                  <SiteImage src={product.image} alt={product.imageAlt} className="w-[90px]" />
                  <div className="min-w-0 flex-1">
                    <Link href={`/menu/${product.slug}`} className="block p-0 text-xl uppercase">
                      {product.name}
                    </Link>
                    <span className="block text-[18px] font-medium text-heading">
                      {formatRupiah(product.price)} × {quantity}
                    </span>
                  </div>
                  <button
                    type="button"
                    aria-label={`${removeLabel} ${product.name}`}
                    onClick={() => remove(product.slug)}
                    className="size-[18px] shrink-0 cursor-pointer rounded-full bg-theme-2 text-center text-white"
                  >
                    <Icon name="times" family="solid" className="text-[10px] leading-[18px]" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-2.5 flex items-center justify-between">
              <span className="text-[18px] font-semibold text-heading uppercase">
                {shippingLabel} : {formatRupiah(totals.shipping)}
              </span>
              <span className="text-[18px] font-semibold text-heading uppercase">
                {totalLabel} : {formatRupiah(totals.total)}
              </span>
            </div>
          </>
        )}
        <div className="mt-5 mb-6 flex justify-between">
          <ThemeButton href={cartButton.href} className="px-7 py-4 text-sm">
            {cartButton.label}
          </ThemeButton>
          <ThemeButton
            href={checkoutButton.href}
            variant="theme-red"
            className="px-7 py-4 text-sm"
          >
            {checkoutButton.label}
          </ThemeButton>
        </div>
      </div>
      <Link href={cartButton.href} aria-label={label} className="relative">
        <span className="absolute -top-[7px] -right-2 size-4 rounded-full bg-heading text-center text-xs leading-4 font-medium text-white">
          {totals.count}
        </span>
        <Icon name="shopping-basket" className="text-theme-2" />
      </Link>
    </div>
  )
}
