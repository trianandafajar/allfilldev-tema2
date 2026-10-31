import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import { Section } from "@/components/common/section"
import { SectionTitle } from "@/components/common/section-title"
import { ShapeImage } from "@/components/common/shape-image"
import { CategoryCard, type CategoryCardData } from "@/components/cards/category-card"
import { CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { AutoplayCarousel } from "./autoplay-carousel"
import { SliderArrowButtons } from "./slider-array-buttons"

export type CategorySliderSectionProps = {
  eyebrow: string
  title: string
  /** Label aksesibilitas untuk region carousel. */
  label: string
  prevLabel: string
  nextLabel: string
  categories: readonly CategoryCardData[]
}

/** Slider kategori makanan: loop, autoplay 3 detik, 1–4 kartu per layar, jarak 30px. */
export function CategorySliderSection({
  eyebrow,
  title,
  label,
  prevLabel,
  nextLabel,
  categories,
}: CategorySliderSectionProps) {
  return (
    <Section surface>
      <ShapeImage src="shape/tomato-shape.png" className="left-0 max-md:hidden" />
      <ShapeImage src="shape/burger-shape-2.png" className="bottom-0 left-0" />
      <Container>
        <AutoplayCarousel delay={3000} duration={34} aria-label={label}>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-9 md:col-span-7">
              <SectionTitle eyebrow={eyebrow}>{title}</SectionTitle>
            </div>
            <Reveal
              delay={0.5}
              className="col-span-3 -ml-3 text-end md:col-span-5"
            >
              <SliderArrowButtons
                prevLabel={prevLabel}
                nextLabel={nextLabel}
              />
            </Reveal>
          </div>
          <CarouselContent className="-ml-[30px]">
            {categories.map((category, index) => (
              <CarouselItem
                key={`${category.name}-${index}`}
                className="pl-[30px] md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
              >
                <CategoryCard {...category} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </AutoplayCarousel>
      </Container>
    </Section>
  )
}
