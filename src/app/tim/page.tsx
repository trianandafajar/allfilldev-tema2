import type { Metadata } from "next"
import { PageBanner } from "@/components/layout/page-banner"
import { CtaBannerSection } from "@/components/sections/shared/cta-banner-section"
import { TeamSection } from "@/components/sections/shared/team-section"
import { ctaBannerContent } from "@/content/shared/cta-banner"
import { teamMembers } from "@/content/tim/team"
import { teamPageContent, teamSectionContent } from "@/content/tim/team-page"

export const metadata: Metadata = {
  title: teamPageContent.metadata.title,
  description: teamPageContent.metadata.description,
  alternates: { canonical: "/tim" },
}

export default function TeamPage() {
  const { title, crumbs } = teamPageContent.banner
  return (
    <>
      <PageBanner title={title} crumbs={[...crumbs]} />
      <TeamSection {...teamSectionContent} members={teamMembers} />
      <CtaBannerSection {...ctaBannerContent} />
    </>
  )
}
