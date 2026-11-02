import type { Metadata } from "next"
import { PageBanner } from "@/components/layout/page-banner"
import { AboutSection } from "@/components/sections/home/about-section"
import { MarqueeSection } from "@/components/sections/home/marquee-section"
import { TestimonialSection } from "@/components/sections/home/testimonial-section"
import { WhyChooseUsSection } from "@/components/sections/home/why-choose-us-section"
import { CtaBannerSection } from "@/components/sections/shared/cta-banner-section"
import { TeamSection } from "@/components/sections/shared/team-section"
import { marqueeContent } from "@/content/beranda/marquee"
import { testimonialContent } from "@/content/beranda/testimonial"
import { whyChooseUsContent } from "@/content/beranda/why-choose-us"
import { ctaBannerContent } from "@/content/shared/cta-banner"
import { aboutPageContent } from "@/content/tentang-kami/about-page"
import { teamMembers } from "@/content/tim/team"
import { teamSectionContent } from "@/content/tim/team-page"

export const metadata: Metadata = {
  title: aboutPageContent.metadata.title,
  description: aboutPageContent.metadata.description,
  alternates: { canonical: "/tentang-kami" },
}

export default function AboutPage() {
  const { banner, about, teamAction, teamPreviewCount } = aboutPageContent
  return (
    <>
      <PageBanner title={banner.title} crumbs={[...banner.crumbs]} />
      <AboutSection {...about} />
      <MarqueeSection {...marqueeContent} />
      <WhyChooseUsSection {...whyChooseUsContent} />
      <TeamSection
        {...teamSectionContent}
        members={teamMembers.slice(0, teamPreviewCount)}
        action={teamAction}
      />
      <TestimonialSection {...testimonialContent} />
      <CtaBannerSection {...ctaBannerContent} />
    </>
  )
}
