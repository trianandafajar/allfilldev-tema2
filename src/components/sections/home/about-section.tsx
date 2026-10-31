import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import { Section } from "@/components/common/section"
import { SectionTitle } from "@/components/common/section-title"
import { ShapeImage } from "@/components/common/shape-image"
import { SiteImage } from "@/components/common/site-image"
import { ThemeButton } from "@/components/common/theme-button"
import { FeatureItem, type FeatureItemData } from "@/components/cards/feature-item"
import { TitleAccent } from "./title-accent"

export type AboutSectionProps = {
  /** Gambar utama dan gambar teks melingkar; path relatif terhadap `public/images`. */
  image: string
  imageAlt: string
  circularTextImage: string
  price: string
  /** Teks pada lencana miring, mis. "sejak /1985". */
  sinceLabel: string
  /** Path gambar latar lencana relatif terhadap `public/images`. */
  sinceBackground: string
  eyebrow: string
  /** Bagian judul sebelum kata beraksen. */
  title: string
  titleAccent: string
  description: string
  features: FeatureItemData[]
  ctaLabel: string
  ctaHref: string
  quoteName: string
  quote: string
}

/** Jeda animasi muncul per fitur (padanan `data-wow-delay`). */
const FEATURE_DELAYS = [0.3, 0.5] as const

export function AboutSection({
  image,
  imageAlt,
  circularTextImage,
  price,
  sinceLabel,
  sinceBackground,
  eyebrow,
  title,
  titleAccent,
  description,
  features,
  ctaLabel,
  ctaHref,
  quoteName,
  quote,
}: AboutSectionProps) {
  return (
    <Section surface padding="no-top">
      <Container>
        <div className="grid grid-cols-12 items-center gap-x-6">
          <Reveal delay={0.3} className="col-span-12 lg:col-span-6">
            <div className="relative">
              <SiteImage src={image} alt={imageAlt} className="w-full max-lg:w-[70%]" />
              <ShapeImage
                src={circularTextImage}
                className="top-0 left-0 animate-[tpswing_4s_ease_infinite_alternate_forwards]"
                imageClassName="w-full max-lg:w-[70%]"
              />
              <div className="absolute bottom-5 left-[10%]">
                <h2 className="text-[80px] normal-case max-sm:text-[50px]">{price}</h2>
              </div>
              <div
                style={{ backgroundImage: `url(/images/${sinceBackground})` }}
                className="absolute right-5 bottom-[45px] rotate-[-25.477deg] rounded-[14px] bg-theme-3 bg-cover bg-center bg-no-repeat px-[30px] py-[25px]"
              >
                <h3 className="text-white">{sinceLabel}</h3>
              </div>
            </div>
          </Reveal>

          <div className="col-span-12 mt-12 lg:col-span-6 lg:mt-0">
            <div className="ml-5 max-2xl:ml-0">
              <SectionTitle eyebrow={eyebrow}>
                {title} <TitleAccent>{titleAccent}</TitleAccent>
              </SectionTitle>
              <Reveal as="p" delay={0.5} className="max-md:mt-2.5">
                {description}
              </Reveal>

              <div className="mt-[30px] flex items-center justify-between gap-2.5 max-xl:flex-wrap max-xl:gap-5 max-sm:flex-wrap max-sm:justify-center max-sm:gap-[30px]">
                {features.map((feature, index) => (
                  <FeatureItem
                    key={feature.title}
                    {...feature}
                    variant="inline"
                    delay={FEATURE_DELAYS[index % FEATURE_DELAYS.length]}
                  />
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-[22px]">
                <Reveal delay={0.3} className="flex">
                  <ThemeButton href={ctaHref} className="border-0 leading-[1.5]">
                    {ctaLabel}
                  </ThemeButton>
                </Reveal>
                <Reveal delay={0.5}>
                  <span className="text-base font-semibold text-theme-2 uppercase">
                    {quoteName}
                  </span>
                  <h6>{quote}</h6>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
