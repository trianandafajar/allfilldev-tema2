import type { Metadata } from "next"
import { Suspense } from "react"
import { BlogView } from "@/components/blog/blog-view"
import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"
import { PageBanner } from "@/components/layout/page-banner"
import { CtaBannerSection } from "@/components/sections/shared/cta-banner-section"
import { blogPageContent } from "@/content/blog/posts"
import { ctaBannerContent } from "@/content/shared/cta-banner"

export const metadata: Metadata = {
  title: blogPageContent.metadata.title,
  description: blogPageContent.metadata.description,
  alternates: { canonical: "/blog" },
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const { title, crumbs } = blogPageContent.banner
  return (
    <>
      <PageBanner title={title} crumbs={[...crumbs]} />
      <Section surface>
        <Container>
          <Suspense fallback={<div className="min-h-[900px]" aria-hidden />}>
            <BlogView searchParams={searchParams} />
          </Suspense>
        </Container>
      </Section>
      <CtaBannerSection {...ctaBannerContent} />
    </>
  )
}
