import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import { Section } from "@/components/common/section"
import { SectionTitle } from "@/components/common/section-title"
import { ShapeImage } from "@/components/common/shape-image"
import { OfferTab, type OfferTabData } from "@/components/cards/offer-tab"
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs"
import { ComboShowcase, type ComboShowcaseData } from "./combo-showcase"
import { TitleAccent } from "./title-accent"

export type ComboOfferSectionProps = {
  eyebrow: string
  /** Bagian judul sebelum kata beraksen. */
  title: string
  /** Kata beraksen merah di akhir judul, mis. "20%". */
  titleAccent: string
  description: string
  /** Path gambar latar section relatif terhadap `public/images`. */
  background: string
  /** Path gambar minuman dekoratif di kiri bawah. */
  decorImage: string
  tabsLabel: string
  offers: OfferTabData[]
  /** `value` tab yang aktif saat halaman dibuka. */
  defaultOffer: string
  showcase: ComboShowcaseData
}

/** Jeda animasi muncul per tab (padanan `data-wow-delay`). */
const TAB_DELAYS = [0.3, 0.5, 0.7] as const

export function ComboOfferSection({
  eyebrow,
  title,
  titleAccent,
  description,
  background,
  decorImage,
  tabsLabel,
  offers,
  defaultOffer,
  showcase,
}: ComboOfferSectionProps) {
  return (
    <Section bgImage={background}>
      <ShapeImage src={decorImage} className="bottom-0 left-0 max-2xl:hidden" />
      <Container>
        <Tabs defaultValue={defaultOffer} className="block gap-0">
          <div className="max-xl:pb-[180px]">
            <div className="grid grid-cols-12 items-center gap-x-6">
              <div className="col-span-12 xl:col-span-6">
                <div className="max-xl:pb-[180px]">
                  <SectionTitle eyebrow={eyebrow}>
                    {title} <TitleAccent>{titleAccent}</TitleAccent>
                  </SectionTitle>
                  <Reveal as="p" delay={0.5}>
                    {description}
                  </Reveal>
                  <TabsList
                    variant="line"
                    aria-label={tabsLabel}
                    className="mt-10 inline-block h-auto w-fit gap-0 rounded-none p-0 group-data-horizontal/tabs:h-auto"
                  >
                    {offers.map((offer, index) => (
                      <OfferTab
                        key={offer.value}
                        {...offer}
                        delay={TAB_DELAYS[index % TAB_DELAYS.length]}
                      />
                    ))}
                  </TabsList>
                </div>
              </div>
              <div className="col-span-12 xl:col-span-6">
                {offers.map((offer) => (
                  <TabsContent
                    key={offer.value}
                    value={offer.value}
                    className="flex-none animate-in text-[18px] duration-150 ease-linear fade-in-0 data-[state=inactive]:animate-out data-[state=inactive]:fade-out-0"
                  >
                    <ComboShowcase {...showcase} />
                  </TabsContent>
                ))}
              </div>
            </div>
          </div>
        </Tabs>
      </Container>
    </Section>
  )
}
