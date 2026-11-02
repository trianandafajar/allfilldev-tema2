import Link from "next/link"
import { Icon } from "@/components/common/icon"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils"

type PageNavProps = {
  /** Halaman aktif, mulai dari 1. */
  page: number
  pageCount: number
  /** `hrefs[i]` adalah URL halaman ke-(i+1). */
  hrefs: string[]
  /** Label aksesibilitas untuk navigasi. */
  label: string
  previousLabel: string
  nextLabel: string
}

const boxClass =
  "mx-0.5 size-[60px] rounded-full border-0 bg-[color-mix(in_srgb,var(--background),black_3.5%)] p-0 text-[18px] font-bold text-heading transition-all duration-300 ease-in-out hover:bg-theme hover:text-white max-md:mt-2.5 max-md:size-[50px] max-md:text-sm"

/** Navigasi nomor halaman berbentuk bulat dengan panah sebelumnya/berikutnya (`.page-nav-wrap`). */
export function PageNav({
  page,
  pageCount,
  hrefs,
  label,
  previousLabel,
  nextLabel,
}: PageNavProps) {
  if (pageCount < 2) return null

  const previousHref = page > 1 ? hrefs[page - 2] : undefined
  const nextHref = page < pageCount ? hrefs[page] : undefined

  return (
    <Pagination aria-label={label} className="mt-12 text-center">
      <PaginationContent className="gap-0">
        <PaginationItem>
          <PageNavArrow
            href={previousHref}
            label={previousLabel}
            icon="long-arrow-left"
          />
        </PaginationItem>
        {Array.from({ length: pageCount }, (_, index) => {
          const number = index + 1
          const isActive = number === page
          return (
            <PaginationItem key={number}>
              <Button
                asChild
                variant="ghost"
                className={cn(boxClass, isActive && "bg-theme text-white")}
              >
                <Link
                  href={hrefs[index]}
                  aria-current={isActive ? "page" : undefined}
                  data-slot="pagination-link"
                  data-active={isActive}
                >
                  {number}
                </Link>
              </Button>
            </PaginationItem>
          )
        })}
        <PaginationItem>
          <PageNavArrow
            href={nextHref}
            label={nextLabel}
            icon="long-arrow-right"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

type PageNavArrowProps = {
  /** Kosong bila tidak ada halaman tujuan: panah tampil nonaktif. */
  href: string | undefined
  label: string
  icon: "long-arrow-left" | "long-arrow-right"
}

function PageNavArrow({ href, label, icon }: PageNavArrowProps) {
  const glyph = <Icon name={icon} family="light" className="mt-0.5" />

  if (!href) {
    return (
      <span
        role="link"
        aria-disabled="true"
        aria-label={label}
        className={cn(
          boxClass,
          "inline-flex cursor-default items-center justify-center opacity-50 hover:bg-[color-mix(in_srgb,var(--background),black_3.5%)] hover:text-heading"
        )}
      >
        {glyph}
      </span>
    )
  }

  return (
    <Button asChild variant="ghost" className={boxClass}>
      <Link href={href} aria-label={label} data-slot="pagination-link">
        {glyph}
      </Link>
    </Button>
  )
}
