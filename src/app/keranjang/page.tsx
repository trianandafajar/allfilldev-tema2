import type { Metadata } from "next"
import { CartView } from "@/components/cart/cart-view"
import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"
import { PageBanner } from "@/components/layout/page-banner"
import { CtaBannerSection } from "@/components/sections/shared/cta-banner-section"
import { cartPageContent } from "@/content/keranjang/cart-page"
import { ctaBannerContent } from "@/content/shared/cta-banner"

export const metadata: Metadata = {
  title: cartPageContent.metadata.title,
  description: cartPageContent.metadata.description,
  alternates: { canonical: "/keranjang" },
  robots: { index: false, follow: true },
}

export default function CartPage() {
  const { title, crumbs } = cartPageContent.banner
  return (
    <>
      <PageBanner title={title} crumbs={[...crumbs]} />
      <Section>
        <Container>
          <CartView />
        </Container>
      </Section>
      <CtaBannerSection {...ctaBannerContent} />
    </>
  )
}
