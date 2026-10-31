import Link from "next/link"
import { Container } from "@/components/common/container"
import { Icon } from "@/components/common/icon"
import { SocialLinks } from "./social-links"
import type { LinkItem, SocialLink } from "./types"

type HeaderTopBarProps = {
  notice: { highlight: string; text: string }
  trackOrder: LinkItem
  searchLabel: string
  searchPlaceholder: string
  social: readonly SocialLink[]
}

/** Bilah atas header: pemberitahuan, lacak pesanan, kotak cari, dan ikon sosial. Tersembunyi di bawah `lg`. */
export function HeaderTopBar({
  notice,
  trackOrder,
  searchLabel,
  searchPlaceholder,
  social,
}: HeaderTopBarProps) {
  return (
    <div className="relative border-b border-line before:absolute before:top-0 before:right-0 before:h-full before:w-[500px] before:bg-heading before:content-[''] max-2xl:before:w-[290px] max-xl:before:w-[270px] max-lg:hidden">
      <Container>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-[30px]">
            <li className="text-base font-medium text-heading">
              <span className="text-theme-2">{notice.highlight}</span>{" "}
              {notice.text}
            </li>
            <li className="text-base font-medium text-heading">
              <Link href={trackOrder.href}>
                <Icon name="truck" family="solid" className="mr-[5px] text-theme-2" />
                {trackOrder.label}
              </Link>
            </li>
          </ul>
          <div className="flex items-center border-l border-line pl-[25px]">
            <div>
              <button type="button" aria-label={searchLabel} className="text-black">
                <Icon name="search" />
              </button>
              <input
                placeholder={searchPlaceholder}
                aria-label={searchLabel}
                className="relative w-[180px] rounded-none border-0 bg-transparent py-2.5 pr-10 pl-[7px] text-[18px] font-medium text-white outline-none placeholder:text-heading"
              />
            </div>
            <SocialLinks links={social} variant="topbar" />
          </div>
        </div>
      </Container>
    </div>
  )
}
