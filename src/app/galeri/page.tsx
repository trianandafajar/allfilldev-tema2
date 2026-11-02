import type { Metadata } from "next"
import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { PageBanner } from "@/components/layout/page-banner"
import { CtaBannerSection } from "@/components/sections/shared/cta-banner-section"
import { galleryPageContent } from "@/content/galeri/gallery-page"
import { ctaBannerContent } from "@/content/shared/cta-banner"

export const metadata: Metadata = {
  title: galleryPageContent.metadata.title,
  description: galleryPageContent.metadata.description,
  alternates: { canonical: "/galeri" },
}

export default function GalleryPage() {
  const { banner, items, openLabel, closeLabel } = galleryPageContent
  return (
    <>
      <PageBanner title={banner.title} crumbs={[...banner.crumbs]} />
      <Section surface>
        <Container>
          <GalleryGrid items={items} openLabel={openLabel} closeLabel={closeLabel} />
        </Container>
      </Section>
      <CtaBannerSection {...ctaBannerContent} />
    </>
  )
}
