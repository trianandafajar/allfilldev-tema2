import { OfferBanner, type OfferBannerData } from "@/components/cards/offer-banner"
import { PizzaBanner, type PizzaBannerData } from "@/components/cards/pizza-banner"
import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import { Section } from "@/components/common/section"
import { ShapeImage } from "@/components/common/shape-image"

export type PromoBannersSectionProps = {
  /** Dekorasi latar section; path relatif terhadap `public/images`. */
  shapes: { left: string; right: string }
  offer: OfferBannerData
  pizza: PizzaBannerData
}

/** Banner promo pertama: penawaran (5/12) + banner pizza (7/12). */
export function PromoBannersSection({
  shapes,
  offer,
  pizza,
}: PromoBannersSectionProps) {
  return (
    <Section surface padding="no-top">
      <ShapeImage src={shapes.left} className="bottom-[15%] left-0" />
      <ShapeImage src={shapes.right} className="right-[2%]" />
      <Container>
        <div className="grid grid-cols-12 gap-x-6">
          <Reveal delay={0.3} className="col-span-12 xl:col-span-5">
            <OfferBanner {...offer} />
          </Reveal>
          <Reveal
            delay={0.5}
            className="col-span-12 mt-12 xl:col-span-7 xl:mt-0"
          >
            <PizzaBanner {...pizza} />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
