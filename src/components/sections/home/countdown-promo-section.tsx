import { Container } from "@/components/common/container"
import { Countdown } from "@/components/common/countdown"
import { Reveal } from "@/components/common/reveal"
import { RichLines, type RichLine } from "@/components/common/rich-lines"
import { Section } from "@/components/common/section"
import { SectionTitle } from "@/components/common/section-title"
import { ShapeImage } from "@/components/common/shape-image"
import { SiteImage } from "@/components/common/site-image"
import { ThemeButton } from "@/components/common/theme-button"

export type CountdownPromoSectionProps = {
  eyebrow: string
  title: readonly RichLine[]
  description: readonly RichLine[]
  countdown: {
    /** Waktu berakhir promo, format ISO 8601. */
    targetDate: string
    labels: { days: string; hours: string; minutes: string; seconds: string }
  }
  cta: { label: string; href: string }
  image: { src: string; alt: string }
}

/** Promo produk dengan foto besar di kiri, deskripsi, hitung mundur, dan tombol pesan. */
export function CountdownPromoSection({
  eyebrow,
  title,
  description,
  countdown,
  cta,
  image,
}: CountdownPromoSectionProps) {
  return (
    <Section bgImage="bg-image/bg.jpg">
      <div>
        <Container fluid>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-5">
              <div className="group/kfc absolute top-0 left-0 h-[730px] w-[1017px] bg-[url('/images/banner/kfc-bg.png')] bg-cover bg-center bg-no-repeat max-2xl:h-[700px] max-2xl:w-[700px] max-xl:h-[730px] max-xl:w-[600px] max-lg:h-[500px] max-lg:w-[1000px] max-sm:h-[400px] max-sm:w-[800px]">
                <div className="absolute bottom-[-30px] left-0 w-[960px] transition-all duration-400 ease-in-out group-hover/kfc:-left-[30px] max-2xl:bottom-0 max-2xl:w-[600px] max-xl:bottom-[10%] max-xl:w-[500px] max-lg:bottom-0 max-lg:left-[50px] max-sm:bottom-0 max-sm:w-[400px] max-[400px]:bottom-[10px] max-[400px]:w-[340px]">
                  <SiteImage src={image.src} alt={image.alt} className="w-full" />
                </div>
                <ShapeImage
                  src="offer/50percent-off-2.png"
                  className="top-[15%] left-1/2 animate-rounded max-md:top-[12%] max-md:left-[25%] max-sm:top-[10%] max-sm:left-[20%] max-[400px]:left-[10%]"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="ml-20 text-center max-lg:mt-[460px] max-lg:ml-0 max-sm:mt-[365px]">
                <SectionTitle eyebrow={eyebrow}>
                  <RichLines lines={title} />
                </SectionTitle>
                <Reveal as="p" delay={0.5} className="mt-4 lg:mt-0">
                  <RichLines lines={description} />
                </Reveal>
                <Reveal delay={0.7} className="mt-10">
                  <Countdown
                    targetDate={countdown.targetDate}
                    labels={countdown.labels}
                  />
                </Reveal>
                <Reveal delay={0.8}>
                  <ThemeButton
                    href={cta.href}
                    icon="flaticon-delivery"
                    className="mt-12 align-middle"
                  >
                    {cta.label}
                  </ThemeButton>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  )
}
