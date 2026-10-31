import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"

type SectionTitleProps = {
  /** Teks kecil di atas judul (warna aksen merah). */
  eyebrow: string
  /** Judul h2; boleh memuat `<span>` untuk kata beraksen. */
  children: ReactNode
  className?: string
  eyebrowClassName?: string
  titleClassName?: string
}

/** Judul section: eyebrow + h2 dengan animasi muncul bertahap (padanan `.section-title`). */
export function SectionTitle({
  eyebrow,
  children,
  className,
  eyebrowClassName,
  titleClassName,
}: SectionTitleProps) {
  return (
    <div className={cn("relative z-99 -mt-1.5 mb-[30px] max-md:mb-0", className)}>
      <Reveal
        as="span"
        className={cn(
          "mb-[5px] inline-block font-bold text-theme-2 uppercase",
          eyebrowClassName
        )}
      >
        {eyebrow}
      </Reveal>
      <Reveal as="h2" delay={0.3} className={titleClassName}>
        {children}
      </Reveal>
    </div>
  )
}
