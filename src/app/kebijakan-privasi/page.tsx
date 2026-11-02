import type { Metadata } from "next"
import { PageBanner } from "@/components/layout/page-banner"
import { LegalDocument } from "@/components/legal/legal-document"
import { privacyPageContent } from "@/content/legal/privacy"

export const metadata: Metadata = {
  title: privacyPageContent.metadata.title,
  description: privacyPageContent.metadata.description,
  alternates: { canonical: "/kebijakan-privasi" },
}

export default function PrivacyPage() {
  const { banner, document } = privacyPageContent
  return (
    <>
      <PageBanner title={banner.title} crumbs={[...banner.crumbs]} />
      <LegalDocument title={banner.title} {...document} />
    </>
  )
}
