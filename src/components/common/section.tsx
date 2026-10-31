import type { CSSProperties, ComponentProps } from "react"
import { cn } from "@/lib/utils"

type SectionProps = ComponentProps<"section"> & {
  /** Warna latar krem (`bg-surface`). */
  surface?: boolean
  /** Padding vertikal responsif 120/100/80px. `no-top` menghilangkan padding atas. */
  padding?: "default" | "no-top" | "none"
  /** Sembunyikan overflow (padanan `.fix`). */
  clip?: boolean
  /** Gambar latar, path relatif terhadap `/images`. */
  bgImage?: string
}

const paddingClass = {
  default: "py-[120px] max-xl:py-[100px] max-lg:py-20",
  "no-top": "pt-0 pb-[120px] max-xl:pb-[100px] max-lg:pb-20",
  none: "",
} as const

export function Section({
  surface,
  padding = "default",
  clip = true,
  bgImage,
  className,
  style,
  ...props
}: SectionProps) {
  const merged: CSSProperties | undefined = bgImage
    ? { backgroundImage: `url(/images/${bgImage})`, ...style }
    : style

  return (
    <section
      className={cn(
        "relative",
        clip && "overflow-hidden",
        surface && "bg-surface",
        bgImage && "bg-cover bg-center bg-no-repeat",
        paddingClass[padding],
        className
      )}
      style={merged}
      {...props}
    />
  )
}
