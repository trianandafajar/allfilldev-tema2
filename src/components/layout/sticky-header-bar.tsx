"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
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
 * Pembungkus luar menahan tinggi header (saat tidak sticky) supaya konten di bawahnya
 * tidak melompat naik ketika header keluar dari alur dokumen.
 */
export function StickyHeaderBar({
  threshold = 250,
  className,
  children,
}: StickyHeaderBarProps) {
  const sticky = useScrolled(threshold)
  const barRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>()

  // Observer tetap aktif selama komponen hidup (tidak diputus saat sticky berganti),
  // tetapi hanya mencatat tinggi ketika bar masih berada di alur dokumen.
  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    const observer = new ResizeObserver(([entry]) => {
      if (bar.dataset.sticky === "true") return
      setHeight(entry.borderBoxSize[0].blockSize)
    })
    observer.observe(bar)
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ height: sticky ? height : undefined }}>
      <div
        ref={barRef}
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
    </div>
  )
}
