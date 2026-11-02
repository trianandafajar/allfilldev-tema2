import type { Metadata } from "next"
import { CheckoutView } from "@/components/checkout/checkout-view"
import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"
import { PageBanner } from "@/components/layout/page-banner"
import { CtaBannerSection } from "@/components/sections/shared/cta-banner-section"
import { checkoutPageContent } from "@/content/checkout/checkout-page"
import { ctaBannerContent } from "@/content/shared/cta-banner"

export const metadata: Metadata = {
  title: checkoutPageContent.metadata.title,
  description: checkoutPageContent.metadata.description,
  alternates: { canonical: "/checkout" },
  robots: { index: false, follow: true },
}

export default function CheckoutPage() {
  const { title, crumbs } = checkoutPageContent.banner
  return (
    <>
      <PageBanner title={title} crumbs={[...crumbs]} />
      <Section className="border-b border-line">
        <Container>
          <CheckoutView />
        </Container>
      </Section>
      <CtaBannerSection {...ctaBannerContent} />
    </>
  )
}
