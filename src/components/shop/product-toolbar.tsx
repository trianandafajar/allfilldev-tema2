"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Icon } from "@/components/common/icon"
import { SiteImage } from "@/components/common/site-image"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export type ProductToolbarProps = {
  filterLabel: string
  filterHref: string
  showing: {
    prefix: string
    range: string
    of: string
    total: number
    suffix: string
  }
  sortLabel: string
  sortAriaLabel: string
  sortValue: string
  sortOptions: { value: string; label: string; href: string }[]
  gridViewLabel: string
  listViewLabel: string
}

const triggerClass =
  "relative h-auto w-[190px] justify-start rounded-none border-line-light bg-transparent px-5 py-[18px] text-[16px] leading-7 uppercase hover:bg-transparent focus-visible:border-line-light focus-visible:ring-0 data-[size=default]:h-auto max-md:py-0 [&>svg]:hidden after:absolute after:top-1/2 after:right-[23px] after:-mt-1.5 after:size-2.5 after:origin-[66%_66%] after:rotate-45 after:border-r after:border-b after:border-body-text after:transition-all after:duration-150 after:ease-in-out after:content-[''] data-[state=open]:after:-rotate-135"

const itemClass =
  "min-h-10 cursor-pointer rounded-none px-2.5 py-0 text-[18px] leading-10 font-normal text-theme uppercase focus:bg-transparent focus:text-theme not-data-[variant=destructive]:focus:**:text-theme data-[state=checked]:font-bold [&>span:first-child]:hidden"

/** Bilah atas daftar produk: penyaring, jumlah hasil, urutan, dan pilihan tampilan (`.woocommerce-notices-wrapper`). */
export function ProductToolbar({
  filterLabel,
  filterHref,
  showing,
  sortLabel,
  sortAriaLabel,
  sortValue,
  sortOptions,
  gridViewLabel,
  listViewLabel,
}: ProductToolbarProps) {
  const router = useRouter()

  function handleSortChange(value: string) {
    const option = sortOptions.find((item) => item.value === value)
    if (option) router.push(option.href)
  }

  return (
    <div className="flex items-center justify-between border border-line px-5 max-md:flex-wrap max-md:justify-center max-md:gap-5 max-md:px-[15px] max-md:py-5">
      <div className="flex items-center gap-[50px] border border-line-light max-md:flex-wrap max-md:gap-[30px]">
        <h5 className="capitalize">
          <Link href={filterHref}>
            <span>
              <SiteImage src="filter.png" alt="" className="mr-2.5" />
            </span>{" "}
            {filterLabel}
          </Link>
        </h5>
        <h5 className="capitalize">
          {showing.prefix} <span className="text-theme">{showing.range}</span>{" "}
          {showing.of} {showing.total} {showing.suffix}
        </h5>
      </div>
      <div className="flex items-center gap-5">
        <h6 className="capitalize">
          {sortLabel}{" "}
          <span className="ml-2.5 text-body-text">
            <Icon name="sort-alt" family="light" />
          </span>
        </h6>
        <Select value={sortValue} onValueChange={handleSortChange}>
          <SelectTrigger aria-label={sortAriaLabel} className={triggerClass}>
            <SelectValue className="mr-3 text-[18px] font-medium text-body-text capitalize max-sm:text-[15px]" />
          </SelectTrigger>
          <SelectContent
            position="popper"
            sideOffset={10}
            className="w-(--radix-select-trigger-width) min-w-0 rounded-[5px] bg-surface shadow-none ring-0"
          >
            {sortOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className={itemClass}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div>
          <span
            role="button"
            aria-label={gridViewLabel}
            aria-disabled="true"
            className="text-theme-2"
          >
            <Icon name="th" family="solid" />
          </span>
        </div>
        <div>
          <span
            role="img"
            aria-label={listViewLabel}
            aria-current="true"
            className="text-heading"
          >
            <Icon name="list" family="solid" />
          </span>
        </div>
      </div>
    </div>
  )
}
