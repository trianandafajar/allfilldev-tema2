import Link from "next/link"
import { Icon } from "@/components/common/icon"
import { cn } from "@/lib/utils"
import type { NavItem } from "./types"

type DesktopNavProps = {
  items: readonly NavItem[]
  ariaLabel: string
}

type NavListProps = {
  items: readonly NavItem[]
  level: number
  className?: string
}

const submenuClass =
  "absolute z-99999 min-w-[240px] origin-top translate-y-[10px] bg-white text-heading shadow-[0_0_10px_0] shadow-black/20 invisible opacity-0 transition-all duration-400 ease-in-out [li:hover>&]:visible [li:hover>&]:translate-y-0 [li:hover>&]:opacity-100"

const topLinkClass =
  "relative inline-block py-[30px] text-left text-[18px] font-semibold text-heading uppercase transition-all duration-400 ease-in-out [li:hover>&]:text-theme-2"

const subLinkClass =
  "relative z-11 inline-block w-full border-b border-black/7 px-[25px] py-[11px] text-left text-[18px] font-semibold text-heading uppercase transition-all duration-400 ease-in-out [li:hover>&]:bg-theme-2 [li:hover>&]:text-white"

function NavList({ items, level, className }: NavListProps) {
  const isTop = level === 0

  return (
    <ul className={className}>
      {items.map((item) => (
        <li
          key={`${item.href}-${item.label}`}
          className={
            isTop
              ? "relative me-[30px] inline-block last:me-0"
              : "relative m-0 block w-full p-0 [&:last-child>a]:border-b-0"
          }
        >
          <Link href={item.href} className={isTop ? topLinkClass : subLinkClass}>
            {item.label}
            {item.children ? (
              <Icon name="angle-down" family="solid" className="ml-[5px] text-[15px]" />
            ) : null}
          </Link>
          {item.children ? (
            <NavList
              items={item.children}
              level={level + 1}
              className={cn(
                submenuClass,
                level === 0 ? "start-0 top-full" : "start-full top-0"
              )}
            />
          ) : null}
        </li>
      ))}
    </ul>
  )
}

/** Menu desktop dengan dropdown/submenu yang terbuka saat hover. */
export function DesktopNav({ items, ariaLabel }: DesktopNavProps) {
  return (
    <nav aria-label={ariaLabel}>
      <NavList items={items} level={0} className="mb-0" />
    </nav>
  )
}
