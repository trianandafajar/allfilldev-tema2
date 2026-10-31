import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"
import { ShapeImage } from "@/components/common/shape-image"
import {
  TestimonialSlider,
  type TestimonialItem,
} from "@/components/sections/home/testimonial-slider"

export type TestimonialSectionProps = {
  items: readonly TestimonialItem[]
  contentLabel: string
  avatarLabel: string
}

/** Testimonial pelanggan: kutipan di tengah dengan slider foto klien di bawahnya. */
export function TestimonialSection({
  items,
  contentLabel,
  avatarLabel,
}: TestimonialSectionProps) {
  return (
    <Section surface>
      <ShapeImage
        src="shape/burger-shape-3.png"
        className="bottom-[30%] left-[5%] max-lg:hidden"
      />
      <ShapeImage
        src="shape/fry-shape-2.png"
        className="top-[10%] right-[15%] max-lg:hidden"
      />
      <ShapeImage
        src="shape/pizzashape.png"
        className="right-[15%] bottom-[22%] max-lg:hidden"
      />
      <Container>
        <div className="max-lg:-mb-[45px]">
          <div className="mx-auto max-w-[980px] text-center">
            <TestimonialSlider
              items={items}
              contentLabel={contentLabel}
              avatarLabel={avatarLabel}
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
