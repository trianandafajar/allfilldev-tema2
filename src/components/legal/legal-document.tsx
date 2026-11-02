import { Container } from "@/components/common/container"
import { Icon } from "@/components/common/icon"
import { Reveal } from "@/components/common/reveal"
import { Section } from "@/components/common/section"
import { SectionTitle } from "@/components/common/section-title"

export type LegalSection = {
  heading: string
  paragraphs?: readonly string[]
  items?: readonly string[]
}

export type LegalDocumentProps = {
  /** Judul h2 di bawah eyebrow, mis. "Kebijakan Privasi". */
  title: string
  /** Mis. "Terakhir diperbarui: 2 November 2026". Tampil sebagai eyebrow. */
  updatedLabel: string
  intro: string
  sections: readonly LegalSection[]
}

/**
 * Dokumen hukum (kebijakan privasi, syarat): judul section di tengah, pengantar, lalu satu kartu
 * putih per bagian, memakai pola yang sama dengan item FAQ.
 */
export function LegalDocument({ title, updatedLabel, intro, sections }: LegalDocumentProps) {
  return (
    <Section surface>
      <Container>
        <div className="text-center">
          <SectionTitle eyebrow={updatedLabel}>{title}</SectionTitle>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-3">
            <Reveal delay={0.3}>
              <p className="text-center">{intro}</p>
            </Reveal>
            {sections.map((section, index) => (
              <Reveal key={section.heading} delay={0.1 + (index % 3) * 0.2} className="mt-5">
                <section className="rounded-[10px] bg-white p-[30px] max-sm:p-5">
                  <h4 className="text-[22px] font-semibold tracking-[-0.2px]">
                    {index + 1}. {section.heading}
                  </h4>
                  {section.paragraphs?.map((text) => (
                    <p key={text} className="mt-3 text-heading">
                      {text}
                    </p>
                  ))}
                  {section.items ? (
                    <ul className="mt-3">
                      {section.items.map((item) => (
                        <li key={item} className="text-[20px] font-normal not-last:mb-2.5">
                          <Icon
                            name="check"
                            family="light"
                            className="mr-2.5 font-semibold text-theme"
                          />
                          <span className="text-heading">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
