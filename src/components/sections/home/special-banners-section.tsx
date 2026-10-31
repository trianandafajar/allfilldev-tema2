import { BurgerBanner, type BurgerBannerData } from "@/components/cards/burger-banner"
import { OfferBanner, type OfferBannerData } from "@/components/cards/offer-banner"
import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import { Section } from "@/components/common/section"

export type SpecialBannersSectionProps = {
  burger: BurgerBannerData
  offer: OfferBannerData
}

/**
 * Banner spesial kedua: burger (7/12) + penawaran gaya 2 (5/12). Grid 24 kolom agar
 * baris dapat dipusatkan pada lebar `lg` (9/12) dengan lebar kolom identik Bootstrap.
 */
export function SpecialBannersSection({
  burger,
  offer,
}: SpecialBannersSectionProps) {
  return (
    <Section surface padding="no-top">
      <Container>
        <div className="grid grid-cols-24 gap-x-6">
          <Reveal
            delay={0.3}
            className="col-span-24 lg:col-span-18 lg:col-start-4 xl:col-span-14 xl:col-start-1"
          >
            <BurgerBanner {...burger} />
          </Reveal>
          <Reveal
            delay={0.5}
            className="col-span-24 mt-12 lg:col-span-18 lg:col-start-4 xl:col-span-10 xl:col-start-15 xl:mt-0"
          >
            <OfferBanner {...offer} variant="style-2" />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
