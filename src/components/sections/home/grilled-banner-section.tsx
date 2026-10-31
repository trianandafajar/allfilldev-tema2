import Link from "next/link"
import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import { RichLines, type RichLine } from "@/components/common/rich-lines"
import { Section } from "@/components/common/section"
import { ShapeImage } from "@/components/common/shape-image"
import { SiteImage } from "@/components/common/site-image"
import { ThemeButton } from "@/components/common/theme-button"

export type GrilledBannerSectionProps = {
  eyebrow: string
  title: readonly RichLine[]
  product: {
    name: readonly RichLine[]
    price: string
    href: string
  }
  cta: { label: string; href: string }
  image: { src: string; alt: string }
}

/** Banner promo produk panggang: teks penawaran di kiri, foto produk di kanan. */
export function GrilledBannerSection({
  eyebrow,
  title,
  product,
  cta,
  image,
}: GrilledBannerSectionProps) {
  return (
    <Section bgImage="banner/main-bg.jpg">
      <ShapeImage
        src="shape/patato-shape.png"
        className="-bottom-20 -left-10 max-2xl:hidden"
      />
      <ShapeImage
        src="offer/50percent-off-2.png"
        className="bottom-[33%] left-[2%] animate-float-bob-y max-2xl:bottom-[30%] max-2xl:left-[35%] max-xl:hidden"
      />
      <ShapeImage
        src="shape/pizza-text-2.png"
        className="bottom-[20%] left-[52%] animate-[rounded_5s_linear_infinite] [transform:rotate(30.01deg)] max-lg:hidden"
      />
      <ShapeImage
        src="shape/spicy.png"
        className="top-[15%] right-[7%] animate-[rotate_15s_linear_infinite] max-2xl:top-[5%] max-2xl:right-[2%] max-xl:top-[65%] max-xl:right-[5%]"
        imageClassName="max-xl:w-[60%]"
      />
      <ShapeImage src="shape/tomato-shape-2.png" className="right-0 bottom-0" />
      <Container>
        <div className="grid grid-cols-12 items-center gap-x-6">
          <div className="col-span-12 lg:col-span-6">
            <div className="relative z-99 max-lg:text-center">
              <Reveal
                as="h4"
                className="mb-[5px] text-[28px] leading-[1.2] text-white max-sm:text-[22px]"
              >
                {eyebrow}
              </Reveal>
              <Reveal
                as="h2"
                delay={0.3}
                className="text-white max-xl:text-[66px] max-lg:text-[56px] max-sm:text-[46px]"
              >
                <RichLines lines={title} accentClassName="text-theme-3" />
              </Reveal>
              <Reveal
                as="h3"
                delay={0.5}
                className="mt-5 leading-[1.2] max-xl:text-[40px] max-lg:text-[36px] max-sm:text-[28px]"
              >
                <Link href={product.href} className="text-white">
                  <RichLines lines={product.name} accentClassName="text-theme-3" />
                </Link>
                <span className="ml-2.5 text-[28px] text-theme-3">{product.price}</span>
              </Reveal>
              <Reveal delay={0.7} className="mt-10">
                <ThemeButton
                  href={cta.href}
                  icon="flaticon-delivery"
                  className="align-middle"
                >
                  {cta.label}
                </ThemeButton>
              </Reveal>
            </div>
          </div>
          <Reveal
            delay={0.4}
            className="col-span-12 mt-12 lg:col-span-6 lg:mt-0"
          >
            <SiteImage
              src={image.src}
              alt={image.alt}
              className="h-full w-full"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
