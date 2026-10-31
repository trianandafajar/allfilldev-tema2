import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"
import { FeatureItem, type FeatureItemData } from "@/components/cards/feature-item"

export type WhyChooseUsSectionProps = {
  /** Path gambar latar panel gelap relatif terhadap `public/images`. */
  background: string
  features: FeatureItemData[]
}

/** Jeda animasi muncul per item (padanan `data-wow-delay`). */
const FEATURE_DELAYS = [0.3, 0.5, 0.7, 0.9] as const

export function WhyChooseUsSection({ background, features }: WhyChooseUsSectionProps) {
  return (
    <Section surface padding="no-top">
      <Container>
        <div
          style={{ backgroundImage: `url(/images/${background})` }}
          className="rounded-[14px] bg-heading bg-cover bg-center bg-no-repeat px-[75px] py-[70px]"
        >
          <div className="grid grid-cols-12 gap-6">
            {features.map((feature, index) => (
              <FeatureItem
                key={feature.title}
                {...feature}
                delay={FEATURE_DELAYS[index % FEATURE_DELAYS.length]}
                className="col-span-12 md:col-span-6 lg:col-span-3"
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
