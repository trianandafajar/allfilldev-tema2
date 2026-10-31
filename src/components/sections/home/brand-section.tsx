import { Container } from "@/components/common/container"
import { RichLines, type RichLine } from "@/components/common/rich-lines"
import { Section } from "@/components/common/section"
import {
  BrandSlider,
  type BrandLogo,
} from "@/components/sections/home/brand-slider"

export type BrandSectionProps = {
  title: readonly RichLine[]
  logos: readonly BrandLogo[]
  /** Label aksesibilitas untuk slider logo. */
  sliderLabel: string
}

/** Judul bergaris panjang dan slider logo sponsor. */
export function BrandSection({ title, logos, sliderLabel }: BrandSectionProps) {
  return (
    <Section surface padding="no-top">
      <Container>
        <div>
          <div className="relative -mt-[5px] mb-[50px] font-semibold before:absolute before:top-[12px] before:right-0 before:h-px before:w-[991px] before:bg-line before:content-[''] max-md:text-center max-2xl:before:hidden">
            <h4 className="leading-[1.2]">
              <RichLines lines={title} accentClassName="text-theme-3" />
            </h4>
          </div>
          <BrandSlider logos={logos} label={sliderLabel} />
        </div>
      </Container>
    </Section>
  )
}
