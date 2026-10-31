import { Container } from "@/components/common/container"
import { Icon } from "@/components/common/icon"
import { Reveal } from "@/components/common/reveal"
import { RichLines, type RichLine } from "@/components/common/rich-lines"
import { Section } from "@/components/common/section"
import { SectionTitle } from "@/components/common/section-title"
import {
  ReservationForm,
  type ReservationFormProps,
} from "@/components/sections/home/reservation-form"

export type ReservationSectionProps = {
  eyebrow: string
  title: readonly RichLine[]
  support: { label: string; phone: string; phoneHref: string }
  form: ReservationFormProps
}

/** Ajakan reservasi meja: judul dan nomor bantuan di kiri, formulir di kanan. */
export function ReservationSection({
  eyebrow,
  title,
  support,
  form,
}: ReservationSectionProps) {
  return (
    <Section bgImage="banner/main-bg.jpg" className="-mt-[240px]">
      <Container>
        <div className="pt-[120px] pb-0 max-xl:mt-10 max-xl:pt-[100px] max-lg:mt-20 max-lg:pt-20">
          <div className="grid grid-cols-12 items-center gap-x-6">
            <div className="col-span-12 lg:col-span-6">
              <div className="max-lg:text-center">
                <SectionTitle eyebrow={eyebrow} titleClassName="text-white">
                  <RichLines lines={title} />
                </SectionTitle>
                <Reveal
                  delay={0.5}
                  className="flex items-center gap-5 pt-[15px] max-lg:justify-center"
                >
                  <div className="text-[66px] text-theme max-sm:text-[56px]">
                    <Icon name="flaticon-phone-call-2" />
                  </div>
                  <div>
                    <h5 className="mb-[5px] leading-[1.2] text-white">{support.label}</h5>
                    <h3 className="leading-[1.2]">
                      <a href={support.phoneHref} className="text-theme">
                        {support.phone}
                      </a>
                    </h3>
                  </div>
                </Reveal>
              </div>
            </div>
            <Reveal
              delay={0.4}
              className="col-span-12 mt-12 lg:col-span-5 lg:col-start-8 lg:mt-0"
            >
              <ReservationForm {...form} />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
