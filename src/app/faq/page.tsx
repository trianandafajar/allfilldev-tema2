import type { Metadata } from "next"
import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"
import { SectionTitle } from "@/components/common/section-title"
import { FaqList } from "@/components/faq/faq-list"
import { PageBanner } from "@/components/layout/page-banner"
import { CtaBannerSection } from "@/components/sections/shared/cta-banner-section"
import { JsonLd } from "@/components/seo/json-ld"
import { faqPageContent, getFaqJsonLd } from "@/content/faq/faq-page"
import { ctaBannerContent } from "@/content/shared/cta-banner"

export const metadata: Metadata = {
  title: faqPageContent.metadata.title,
  description: faqPageContent.metadata.description,
  alternates: { canonical: "/faq" },
}

export default function FaqPage() {
  const { banner, intro, items } = faqPageContent
  return (
    <>
      <PageBanner title={banner.title} crumbs={[...banner.crumbs]} />
      <Section surface>
        <Container>
          <div className="text-center">
            <SectionTitle eyebrow={intro.eyebrow}>{intro.title}</SectionTitle>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 lg:col-start-3">
              <FaqList items={items} />
            </div>
          </div>
        </Container>
      </Section>
      <CtaBannerSection {...ctaBannerContent} />
      <JsonLd data={getFaqJsonLd(items)} />
    </>
  )
}
