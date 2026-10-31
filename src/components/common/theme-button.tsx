import Link from "next/link"
import type { ComponentProps } from "react"
import { Button } from "@/components/ui/button"
import { Icon } from "./icon"
import type { IconName } from "./icon-glyphs"

type ThemeButtonProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string
  variant?: "theme" | "theme-white" | "theme-yellow" | "theme-red"
  /** Ikon di kiri teks (mis. `flaticon-delivery`). */
  icon?: IconName
}

/** Tombol tautan bergaya tema (padanan `.theme-btn` pada template). */
export function ThemeButton({
  href,
  variant = "theme",
  icon,
  className,
  children,
  ...props
}: ThemeButtonProps) {
  return (
    <Button asChild variant={variant} size="theme" className={className}>
      <Link href={href} {...props}>
        {icon ? (
          <Icon
            name={icon}
            className="mr-2.5 text-[24px] max-lg:text-[22px] max-md:text-[20px]"
          />
        ) : null}
        {children}
      </Link>
    </Button>
  )
}
