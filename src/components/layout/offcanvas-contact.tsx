import { Icon } from "@/components/common/icon"
import type { IconName } from "@/components/common/icon-glyphs"
import { ThemeButton } from "@/components/common/theme-button"
import { SheetClose } from "@/components/ui/sheet"
import { SocialLinks } from "./social-links"
import type { LinkItem, SocialLink } from "./types"

type ContactItem = {
  icon: IconName
  family: "light" | "regular"
  text: string
  href?: string
}

type OffcanvasContactProps = {
  title: string
  items: readonly ContactItem[]
  cta: LinkItem
  social: readonly SocialLink[]
}

/** Blok info kontak, tombol pesan, dan ikon sosial di bagian bawah offcanvas. */
export function OffcanvasContact({ title, items, cta, social }: OffcanvasContactProps) {
  return (
    <div className="mt-5">
      <h4>{title}</h4>
      <ul className="mt-5">
        {items.map((item) => (
          <li
            key={item.icon}
            className="flex items-center text-xl font-medium uppercase not-last:mb-[15px]"
          >
            <div className="mr-5">
              <Icon name={item.icon} family={item.family} className="text-theme-2" />
            </div>
            <div>
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.text}
                </a>
              ) : (
                <span className="text-heading">{item.text}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <SheetClose asChild>
          <ThemeButton
            href={cta.href}
            icon="flaticon-delivery"
            className="w-full px-10 py-4 max-lg:px-10 max-md:px-10 max-md:py-4"
          >
            {cta.label}
          </ThemeButton>
        </SheetClose>
      </div>
      <SocialLinks links={social} variant="offcanvas" />
    </div>
  )
}
