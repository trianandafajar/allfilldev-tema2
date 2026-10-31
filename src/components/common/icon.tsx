import { cn } from "@/lib/utils"
import { iconGlyphs, type IconName } from "./icon-glyphs"

type IconFamily = "light" | "regular" | "solid" | "brands" | "flaticon"

const familyClass: Record<IconFamily, string> = {
  light: "font-fa font-light",
  regular: "font-fa font-normal",
  solid: "font-fa font-black",
  brands: "font-fa-brands font-normal",
  flaticon: "font-flaticon font-normal",
}

type IconProps = {
  name: IconName
  /** Default: `flaticon` untuk nama berawalan `flaticon-`, selain itu `regular`. */
  family?: IconFamily
  className?: string
}

/** Ikon berbasis font (FA Pro + Flaticon). Dekoratif, disembunyikan dari screen reader. */
export function Icon({ name, family, className }: IconProps) {
  const resolved: IconFamily =
    family ?? (name.startsWith("flaticon-") ? "flaticon" : "regular")

  return (
    <i
      aria-hidden="true"
      className={cn(
        "inline-block leading-none not-italic antialiased",
        familyClass[resolved],
        className
      )}
    >
      {iconGlyphs[name]}
    </i>
  )
}
