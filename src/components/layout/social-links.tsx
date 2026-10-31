import { Icon } from "@/components/common/icon"
import { cn } from "@/lib/utils"
import type { SocialLink } from "./types"

type SocialLinksVariant = "topbar" | "footer" | "offcanvas"

type SocialLinksProps = {
  links: readonly SocialLink[]
  variant: SocialLinksVariant
  className?: string
}

const listClass: Record<SocialLinksVariant, string> = {
  topbar: "relative z-9 gap-[25px]",
  footer: "relative z-9 mt-10 gap-[15px] max-sm:mt-5",
  offcanvas: "mt-[30px] gap-2.5",
}

const linkClass: Record<SocialLinksVariant, string> = {
  topbar: "text-white hover:text-theme-2",
  footer:
    "size-10 bg-body-text/10 leading-10 text-heading hover:bg-theme hover:text-white",
  offcanvas:
    "size-[45px] border border-line bg-transparent leading-[45px] text-heading hover:bg-theme-2 hover:text-white",
}

/** Deret ikon sosial. Variant mengatur ukuran dan warna (top bar, footer, offcanvas). */
export function SocialLinks({ links, variant, className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center", listClass[variant], className)}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className={cn(
            "block rounded-full text-center text-base transition-all duration-400 ease-in-out",
            linkClass[variant]
          )}
        >
          <Icon name={link.icon} family="brands" />
        </a>
      ))}
    </div>
  )
}
