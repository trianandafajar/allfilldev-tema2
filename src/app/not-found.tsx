import type { Metadata } from "next"
import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"
import { ThemeButton } from "@/components/common/theme-button"
import { PageBanner } from "@/components/layout/page-banner"
import { notFoundContent } from "@/content/shared/not-found"

export const metadata: Metadata = {
  title: notFoundContent.metadata.title,
  robots: { index: false },
}

export default function NotFound() {
  const { banner, code, heading, message, actions } = notFoundContent
  return (
    <>
      <PageBanner title={banner.title} crumbs={[...banner.crumbs]} />
      <Section surface>
        <Container>
          <div className="mx-auto max-w-[640px] text-center">
            <p
              aria-hidden="true"
              className="text-[160px] leading-none font-bold text-theme-2 max-sm:text-[110px]"
            >
              {code}
            </p>
            <h2 className="mt-4 text-heading">{heading}</h2>
            <p className="mt-4 mb-10">{message}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <ThemeButton href={actions.home.href}>{actions.home.label}</ThemeButton>
              <ThemeButton href={actions.shop.href} variant="theme-red">
                {actions.shop.label}
              </ThemeButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
