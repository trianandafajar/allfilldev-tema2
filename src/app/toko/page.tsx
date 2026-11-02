import type { Metadata } from "next"
import { Suspense } from "react"
import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"
import { PageBanner } from "@/components/layout/page-banner"
import { CtaBannerSection } from "@/components/sections/shared/cta-banner-section"
import { ShopView } from "@/components/shop/shop-view"
import { ctaBannerContent } from "@/content/shared/cta-banner"
import { shopPageContent } from "@/content/toko/shop-page"

export const metadata: Metadata = {
  title: shopPageContent.metadata.title,
  description: shopPageContent.metadata.description,
  alternates: { canonical: "/toko" },
}

export default function ShopPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const { title, crumbs } = shopPageContent.banner
  return (
    <>
      <PageBanner title={title} crumbs={[...crumbs]} />
      <Section surface>
        <Container>
          <Suspense fallback={<div className="min-h-[900px]" aria-hidden />}>
            <ShopView searchParams={searchParams} />
          </Suspense>
        </Container>
      </Section>
      <CtaBannerSection {...ctaBannerContent} />
    </>
  )
}
