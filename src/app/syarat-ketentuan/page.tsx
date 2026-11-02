import type { Metadata } from "next"
import { PageBanner } from "@/components/layout/page-banner"
import { LegalDocument } from "@/components/legal/legal-document"
import { termsPageContent } from "@/content/legal/terms"

export const metadata: Metadata = {
  title: termsPageContent.metadata.title,
  description: termsPageContent.metadata.description,
  alternates: { canonical: "/syarat-ketentuan" },
}

export default function TermsPage() {
  const { banner, document } = termsPageContent
  return (
    <>
      <PageBanner title={banner.title} crumbs={[...banner.crumbs]} />
      <LegalDocument title={banner.title} {...document} />
    </>
  )
}
