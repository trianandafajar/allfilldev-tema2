"use client"

import type { ReactNode } from "react"
import { useScrolled } from "@/hooks/use-scrolled"
import { cn } from "@/lib/utils"

type StickyHeaderBarProps = {
  /** Jarak scroll (px) sebelum header menempel di atas layar. */
  threshold?: number
  className?: string
  children: ReactNode
}

/**
 * Pembungkus header utama. Setelah scroll melewati `threshold`, header menjadi
 * `fixed` dan menandai dirinya `data-sticky="true"` agar anak bisa menyesuaikan gaya.
 */
export function StickyHeaderBar({
  threshold = 250,
  className,
  children,
}: StickyHeaderBarProps) {
  const sticky = useScrolled(threshold)

  return (
    <div
      id="header-sticky"
      data-sticky={sticky}
      className={cn(
        "group/sticky overflow-x-clip",
        sticky
          ? "fixed top-0 left-0 z-100 w-full bg-white shadow-[0_0_62px_0] shadow-navy/20 transition-all duration-900"
          : "relative z-99",
        className
      )}
    >
      {children}
    </div>
  )
}
