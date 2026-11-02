import Form from "next/form"
import Link from "next/link"
import { Icon } from "@/components/common/icon"
import { SidebarWidget } from "@/components/common/sidebar-widget"
import { SiteImage } from "@/components/common/site-image"
import { cn } from "@/lib/utils"

export type BlogSidebarProps = {
  /** Tujuan form pencarian (halaman daftar blog). */
  searchAction: string
  searchValue: string
  titles: {
    search: string
    categories: string
    recent: string
    tags: string
  }
  searchLabel: string
  searchPlaceholder: string
  searchButton: string
  categories: readonly { label: string; count: number; href: string; active: boolean }[]
  recent: readonly { title: string; href: string; cover: string; date: string }[]
  tags: readonly { label: string; href: string; active: boolean }[]
}

/** Sidebar blog: pencarian, kategori, artikel terbaru, dan tag. Dipakai di daftar dan detail artikel. */
export function BlogSidebar({
  searchAction,
  searchValue,
  titles,
  searchLabel,
  searchPlaceholder,
  searchButton,
  categories,
  recent,
  tags,
}: BlogSidebarProps) {
  return (
    <aside>
      <SidebarWidget title={titles.search}>
        <Form action={searchAction} className="relative">
          <input
            type="search"
            name="q"
            defaultValue={searchValue}
            aria-label={searchLabel}
            placeholder={searchPlaceholder}
            className="h-[56px] w-full bg-heading/[4.5%] pr-14 pl-5 text-[16px] font-medium text-body-text outline-none placeholder:text-body-text/70 focus-visible:ring-2 focus-visible:ring-theme/40"
          />
          <button
            type="submit"
            aria-label={searchButton}
            className="absolute top-0 right-0 h-[56px] w-14 cursor-pointer text-heading transition-colors hover:text-theme-2"
          >
            <Icon name="search" />
          </button>
        </Form>
      </SidebarWidget>

      <SidebarWidget title={titles.categories}>
        <ul>
          {categories.map((item) => (
            <li key={item.label} className="not-last:mb-3">
              <Link
                href={item.href}
                aria-current={item.active ? "true" : undefined}
                className={cn(
                  "flex items-center justify-between bg-heading/[4.5%] px-5 py-3 text-[18px] font-semibold uppercase transition-colors duration-400 hover:bg-theme hover:text-white",
                  item.active && "bg-theme text-white"
                )}
              >
                <span>{item.label}</span>
                <span>({item.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </SidebarWidget>

      <SidebarWidget title={titles.recent}>
        <ul>
          {recent.map((item) => (
            <li key={item.href} className="flex items-center gap-4 not-last:mb-5">
              <SiteImage
                src={item.cover}
                alt=""
                className="size-20 shrink-0 object-cover"
              />
              <div className="min-w-0">
                <p className="text-sm text-body-text">{item.date}</p>
                <h4 className="text-[18px] leading-snug">
                  <Link href={item.href} className="hover:text-theme-2">
                    {item.title}
                  </Link>
                </h4>
              </div>
            </li>
          ))}
        </ul>
      </SidebarWidget>

      <SidebarWidget title={titles.tags}>
        <ul className="flex flex-wrap gap-2.5">
          {tags.map((tag) => (
            <li key={tag.label}>
              <Link
                href={tag.href}
                aria-current={tag.active ? "true" : undefined}
                className={cn(
                  "inline-block bg-heading/[4.5%] px-4 py-2 text-base font-semibold capitalize transition-colors duration-400 hover:bg-theme hover:text-white",
                  tag.active && "bg-theme text-white"
                )}
              >
                {tag.label}
              </Link>
            </li>
          ))}
        </ul>
      </SidebarWidget>
    </aside>
  )
}
