import Link from "next/link"
import { Icon } from "@/components/common/icon"
import { cn } from "@/lib/utils"
import type { ShopCategory } from "@/types/product"
import { SidebarWidget } from "@/components/common/sidebar-widget"

export type CategoryWidgetItem = ShopCategory & {
  /** Tujuan tautan; kategori aktif mengarah ke daftar tanpa kategori. */
  href: string
  active: boolean
}

type CategoryWidgetProps = {
  title: string
  items: readonly CategoryWidgetItem[]
}

/** Daftar kategori dengan ikon Flaticon (`.widget-categories`). */
export function CategoryWidget({ title, items }: CategoryWidgetProps) {
  return (
    <SidebarWidget title={title}>
      <div className="border-b border-line pb-10">
        <ul>
          {items.map((item) => (
            <li key={item.slug} className="mb-5 text-[18px] font-semibold uppercase last:mb-0">
              <Link
                href={item.href}
                aria-current={item.active ? "true" : undefined}
                className={cn(
                  "group/category transition-all duration-400 ease-in-out hover:text-theme",
                  item.active && "text-theme"
                )}
              >
                <Icon
                  name={item.icon}
                  className="mr-5 text-[20px] text-heading group-aria-[current=true]/category:text-theme"
                />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SidebarWidget>
  )
}
