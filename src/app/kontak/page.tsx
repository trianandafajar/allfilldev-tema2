import type { Metadata } from "next"
import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"
import { ContactInfoCards } from "@/components/contact/contact-info-cards"
import { ContactSection } from "@/components/contact/contact-section"
import { PageBanner } from "@/components/layout/page-banner"
import { JsonLd } from "@/components/seo/json-ld"
import { CtaBannerSection } from "@/components/sections/shared/cta-banner-section"
import { contactPageContent } from "@/content/kontak/contact-page"
import { ctaBannerContent } from "@/content/shared/cta-banner"
import { restaurantJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: contactPageContent.metadata.title,
  description: contactPageContent.metadata.description,
  alternates: { canonical: "/kontak" },
}

export default function ContactPage() {
  const { banner, info, intro, map, form } = contactPageContent
  return (
    <>
      <JsonLd data={restaurantJsonLd()} />
      <PageBanner title={banner.title} crumbs={[...banner.crumbs]} />
      <Section surface padding="default" className="pb-0 max-xl:pb-0 max-lg:pb-0">
        <Container>
          <ContactInfoCards cards={info.cards} />
        </Container>
      </Section>
      <Section surface>
        <Container>
          <ContactSection intro={intro} map={map} form={form} />
        </Container>
      </Section>
      <CtaBannerSection {...ctaBannerContent} />
    </>
  )
}
