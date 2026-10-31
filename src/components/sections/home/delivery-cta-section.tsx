import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import { RichLines, type RichLine } from "@/components/common/rich-lines"
import { Section } from "@/components/common/section"
import { SectionTitle } from "@/components/common/section-title"
import { ShapeImage } from "@/components/common/shape-image"
import { ThemeButton } from "@/components/common/theme-button"

export type DeliveryCtaSectionProps = {
  eyebrow: string
  title: readonly RichLine[]
  cta: { label: string; href: string }
  /** Foto kurir; path relatif terhadap `public/images`. */
  image: { src: string }
}

/** Banner ajakan pesan antar: kartu berlatar foto dengan ilustrasi kurir di kanan. */
export function DeliveryCtaSection({
  eyebrow,
  title,
  cta,
  image,
}: DeliveryCtaSectionProps) {
  return (
    <Section
      padding="no-top"
      clip={false}
      className="before:absolute before:top-[-12px] before:left-0 before:h-full before:w-full before:bg-surface before:content-['']"
    >
      <Container>
        <div className="relative z-9 mt-2.5 rounded-[20px] bg-[url('/images/banner/main-cta-bg.jpg')] bg-cover bg-center bg-no-repeat px-[100px] py-[120px] max-xl:px-[60px] max-md:px-[50px] max-md:py-[70px] max-md:text-center max-sm:px-10 max-sm:py-[60px]">
          <SectionTitle
            eyebrow={eyebrow}
            eyebrowClassName="text-theme-3"
            titleClassName="text-white"
          >
            <RichLines lines={title} accentClassName="text-theme-3" />
          </SectionTitle>
          <Reveal delay={0.5}>
            <ThemeButton
              href={cta.href}
              variant="theme-white"
              icon="flaticon-delivery"
              className="mt-6 align-middle md:mt-0"
            >
              {cta.label}
            </ThemeButton>
          </Reveal>
          <ShapeImage
            src="shape/arrow-shape.png"
            className="top-[18%] left-1/2 max-md:hidden"
          />
          <ShapeImage
            src={image.src}
            className="top-[-10%] right-0 bottom-0 max-xl:-right-[35px] max-lg:top-[30%] max-lg:w-[320px] max-md:hidden"
            imageClassName="max-lg:w-full"
          />
          <ShapeImage
            src="shape/frame.png"
            className="top-[20%] left-[42%] max-md:hidden"
          />
        </div>
      </Container>
    </Section>
  )
}
