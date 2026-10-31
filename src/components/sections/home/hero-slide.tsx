import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"
import { ShapeImage } from "@/components/common/shape-image"
import { SiteImage } from "@/components/common/site-image"
import { ThemeButton } from "@/components/common/theme-button"
import { cn } from "@/lib/utils"
import type { HighlightedTitle } from "@/types/highlighted-title"
import type { ImageAsset } from "@/types/image-asset"
import {
  fadeInRightClass,
  fadeInUpClass,
  type FadeInUpDuration,
} from "./hero-animation"

type DecorationPlacement = {
  className: string
  imageClassName?: string
  duration: FadeInUpDuration
}

/** Posisi + durasi animasi dekorasi (padanan `.chilii-shape`, `.fire-shape`, `.offer-shape`, dst). */
const decorationPlacements = {
  "top-left": {
    className: "top-[5%] left-0 max-xl:hidden",
    duration: 2.1,
  },
  "bottom-left": {
    className: "bottom-0 left-0 max-xl:hidden",
    duration: 2.4,
  },
  "top-right": {
    className: "top-[5%] right-0 max-md:hidden",
    duration: 2.7,
  },
  "bottom-right": {
    className: "right-0 bottom-0 max-sm:-z-1 max-sm:opacity-50",
    duration: 3,
  },
  badge: {
    className:
      "top-[5%] left-[40%] max-2xl:top-0 max-lg:top-[280px] max-lg:left-[5%] max-sm:-left-[3%]",
    imageClassName: "max-lg:w-[70%] max-sm:w-1/2",
    duration: 2.1,
  },
} as const satisfies Record<string, DecorationPlacement>

export type HeroDecorationPlacement = keyof typeof decorationPlacements

export type HeroDecoration = {
  placement: HeroDecorationPlacement
  /** Path relatif terhadap `public/images`. */
  src: string
}

export type HeroSlideData = {
  eyebrow: string
  title: HighlightedTitle
  cta: { label: string; href: string }
  image: ImageAsset
}

type HeroSlideProps = {
  slide: HeroSlideData
  backgroundImage: string
  backTitle: string
  decorations: readonly HeroDecoration[]
  /** Muat gambar utama lebih awal (slide pertama). */
  preload?: boolean
}

/** Satu slide hero; animasi masuk aktif lewat `data-active` pada `group/slide` di induknya. */
export function HeroSlide({
  slide,
  backgroundImage,
  backTitle,
  decorations,
  preload,
}: HeroSlideProps) {
  const { eyebrow, title, cta, image } = slide

  return (
    <Section
      padding="none"
      clip={false}
      bgImage={backgroundImage}
      className="z-1 py-[200px] max-xl:py-[130px] max-lg:py-[100px] max-md:py-[90px]"
    >
      {decorations.map(({ placement, src }) => {
        const config: DecorationPlacement = decorationPlacements[placement]
        return (
          <ShapeImage
            key={placement}
            src={src}
            className={cn(config.className, fadeInUpClass[config.duration])}
            imageClassName={config.imageClassName}
          />
        )
      })}
      <h2
        aria-hidden="true"
        className={cn(
          "absolute bottom-[30%] left-[16%] -z-1 text-[300px] leading-[50%] tracking-[-12px] text-white/10 opacity-[0.69] max-2xl:left-[10%] max-2xl:text-[270px] max-xl:hidden",
          fadeInRightClass[2.5]
        )}
      >
        {backTitle}
      </h2>
      <Container>
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-7 xl:col-span-5">
            <div className="relative z-99 max-lg:text-center">
              <p className="text-[20px] font-semibold text-theme-2 uppercase max-md:mb-[5px]">
                {eyebrow}
              </p>
              <h1 className={cn("text-white", fadeInUpClass[0.5])}>
                {title.before}{" "}
                <span className="relative before:absolute before:right-[-70px] before:z-9 before:h-[75px] before:w-[83px] before:bg-[url('/images/icon/icon.png')] before:bg-center before:bg-no-repeat before:content-[''] max-lg:before:hidden">
                  {title.highlight}
                </span>{" "}
                {title.after}
              </h1>
              <div className="mt-[35px]">
                <ThemeButton
                  href={cta.href}
                  icon="flaticon-delivery"
                  className={fadeInUpClass[0.9]}
                >
                  {cta.label}
                </ThemeButton>
              </div>
            </div>
          </div>
          <div className="col-span-12 mt-12 lg:col-span-5 lg:mt-0 xl:col-span-6 xl:col-start-7">
            <div
              className={cn(
                "w-[760px] max-2xl:w-auto max-2xl:max-w-[750px] max-lg:text-center max-md:mx-auto max-md:w-[380px]",
                fadeInUpClass[1.4]
              )}
            >
              <SiteImage
                src={image.src}
                alt={image.alt}
                preload={preload}
                className="w-full max-lg:w-3/4"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
