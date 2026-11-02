import { Container } from "@/components/common/container"
import { SocialLinks } from "./social-links"
import type { SocialLink } from "./types"

type HeaderTopBarProps = {
  notice: { highlight: string; text: string }
  social: readonly SocialLink[]
}

/** Bilah atas header: pemberitahuan dan ikon sosial. Tersembunyi di bawah `lg`. */
export function HeaderTopBar({
  notice,
  social,
}: HeaderTopBarProps) {
  return (
    <div className="overflow-x-clip border-b border-line max-lg:hidden">
      <Container>
        <div className="flex items-stretch justify-between">
          <p className="py-2.5 text-base font-medium text-heading">
            <span className="text-theme-2">{notice.highlight}</span> {notice.text}
          </p>
          {/* Latar gelap meluas ke tepi layar, jadi tidak bergantung pada lebar kontainer. */}
          <div className="relative flex items-center pl-[25px] before:absolute before:inset-y-0 before:left-0 before:-right-[100vw] before:bg-heading before:content-['']">
            <SocialLinks links={social} variant="topbar" />
          </div>
        </div>
      </Container>
    </div>
  )
}
