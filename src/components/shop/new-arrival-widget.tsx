import Link from "next/link"
import { Icon } from "@/components/common/icon"
import { SiteImage } from "@/components/common/site-image"
import { cn } from "@/lib/utils"
import { SidebarWidget } from "@/components/common/sidebar-widget"

const MAX_RATING = 5

export type NewArrivalItem = {
  name: string
  href: string
  /** Path gambar relatif terhadap `public/images`. */
  thumb: string
  /** Jumlah bintang menyala (0-5). */
  rating: number
  /** Harga setelah diskon (tampil merah). */
  price: string
  /** Harga normal. */
  originalPrice: string
}

type NewArrivalWidgetProps = {
  title: string
  items: readonly NewArrivalItem[]
}

/** Daftar produk terbaru dengan thumbnail, bintang, dan harga (`.popular-food-posts`). */
export function NewArrivalWidget({ title, items }: NewArrivalWidgetProps) {
  return (
    <SidebarWidget title={title}>
      <div>
        {items.map((item) => (
          <div
            key={item.href}
            className="mb-5 flex items-start overflow-hidden pb-5 last:mb-0 last:pb-0"
          >
            <SiteImage
              src={item.thumb}
              alt=""
              className="mr-5 size-20 shrink-0 object-cover"
            />
            <div className="min-w-0 flex-1 overflow-hidden">
              <div
                role="img"
                aria-label={`Rating ${item.rating} dari ${MAX_RATING}`}
                className="mb-[3px] text-[14px]"
              >
                {Array.from({ length: MAX_RATING }, (_, i) => (
                  <Icon
                    key={i}
                    name="star"
                    family="solid"
                    className={cn(i < item.rating ? "text-theme-3" : "text-body-text opacity-30")}
                  />
                ))}
              </div>
              <h4 className="mb-[3px] capitalize">
                <Link href={item.href} className="hover:text-theme">
                  {item.name}
                </Link>
              </h4>
              <div className="flex gap-2.5 text-base font-medium">
                <span className="text-theme-2">{item.price}</span>
                <span>{item.originalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SidebarWidget>
  )
}
