import Link from "next/link"
import { Icon } from "@/components/common/icon"
import { SiteImage } from "@/components/common/site-image"
import { ThemeButton } from "@/components/common/theme-button"
import type { CartPreviewItem, LinkItem } from "./types"

type HeaderCartProps = {
  label: string
  count: number
  items: readonly CartPreviewItem[]
  shippingLabel: string
  shippingValue: string
  totalLabel: string
  totalValue: string
  cartButton: LinkItem
  checkoutButton: LinkItem
}

/** Ikon keranjang dengan dropdown pratinjau yang terbuka saat hover. Tersembunyi di bawah `xl`. */
export function HeaderCart({
  label,
  count,
  items,
  shippingLabel,
  shippingValue,
  totalLabel,
  totalValue,
  cartButton,
  checkoutButton,
}: HeaderCartProps) {
  return (
    <div className="group/cart relative max-xl:hidden">
      <div className="invisible absolute top-[200%] left-[-70px] z-9999 w-[340px] origin-top rotate-x-90 bg-white px-5 pt-[5px] pb-0 shadow-[0_0_7px_0.5px] shadow-black/15 transition-all duration-500 ease-[ease] group-hover/cart:visible group-hover/cart:rotate-x-0">
        {items.map((item, index) => (
          <ul key={`${item.image}-${index}`}>
            <li className="flex items-center gap-2.5 border-b border-line py-0.5 text-base font-semibold uppercase">
              <SiteImage src={item.image} alt={item.imageAlt} className="w-[90px]" />
              <div>
                <Link
                  href={item.href}
                  className="relative p-0 text-xl uppercase after:absolute after:top-[15px] after:right-[-88px] after:size-[18px] after:rounded-full after:bg-theme-2 after:text-center after:font-fa after:text-[10px] after:leading-[18px] after:font-black after:text-white after:content-['\f00d']"
                >
                  {item.name}
                </Link>
                <span className="block text-[18px] font-medium text-heading">
                  {item.price}
                </span>
              </div>
            </li>
          </ul>
        ))}
        <div className="mt-2.5 flex items-center justify-between">
          <span className="text-[18px] font-semibold text-heading uppercase">
            {shippingLabel} : {shippingValue}
          </span>
          <span className="text-[18px] font-semibold text-heading uppercase">
            {totalLabel} : {totalValue}
          </span>
        </div>
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
          {count}
        </span>
        <Icon name="shopping-basket" className="text-theme-2" />
      </Link>
    </div>
  )
}
