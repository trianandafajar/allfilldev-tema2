import { Container } from "@/components/common/container"
import { RichLines, type RichLine } from "@/components/common/rich-lines"
import { Section } from "@/components/common/section"
import { SectionTitle } from "@/components/common/section-title"
import { ShapeImage } from "@/components/common/shape-image"

export type CtaBannerSectionProps = {
  eyebrow: string
  title: readonly RichLine[]
  /** Foto kurir; path relatif terhadap `public/images`. */
  image: { src: string }
}

/** Banner ajakan pesan antar berlatar foto: tomat dan cabai melayang, kurir di tengah-kanan (`main-cta-banner-2`). */
export function CtaBannerSection({ eyebrow, title, image }: CtaBannerSectionProps) {
  return (
    <Section padding="default" clip={false} bgImage="banner/main-cta-bg-2.jpg">
      <ShapeImage
        src="tomato.png"
        className="bottom-0 left-0 animate-float-bob-y"
      />
      <ShapeImage
        src="chilli.png"
        className="top-[30%] right-0 animate-float-bob-y"
      />
      <Container>
        <div className="relative flex items-center justify-between max-md:flex-wrap max-md:justify-center max-md:gap-[30px] max-md:text-center">
          <SectionTitle
            eyebrow={eyebrow}
            className="mb-0"
            eyebrowClassName="text-theme-3"
            titleClassName="text-white"
          >
            <RichLines lines={title} accentClassName="text-theme-3" />
          </SectionTitle>
          <ShapeImage
            src={image.src}
            className="right-[15%] -bottom-[45%] w-[470px] max-2xl:right-[22%] max-2xl:-bottom-[60%] max-2xl:w-[440px] max-xl:right-[10%] max-xl:w-[360px] max-lg:hidden"
            imageClassName="size-full"
          />
        </div>
      </Container>
    </Section>
  )
}
