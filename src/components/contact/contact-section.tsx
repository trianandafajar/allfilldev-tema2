import { Icon } from "@/components/common/icon"
import { Reveal } from "@/components/common/reveal"
import { ContactForm, type ContactFormProps } from "./contact-form"
import { ContactMap } from "./contact-map"

type ContactSectionProps = {
  intro: { title: string; description: string; hoursLabel: string; hours: string }
  map: { title: string; src: string }
  form: ContactFormProps
}

/** Dua kolom: pengantar dan peta di kiri, form pesan di kanan. */
export function ContactSection({ intro, map, form }: ContactSectionProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
      <Reveal delay={0.3} className="lg:col-span-7">
        <h2 className="text-heading">{intro.title}</h2>
        <p className="mt-3 mb-4 max-w-[560px]">{intro.description}</p>
        <p className="mb-6 flex items-center gap-2.5 font-semibold text-heading">
          <Icon name="clock" family="light" className="text-theme-2" />
          <span>
            {intro.hoursLabel}: <span className="font-medium text-body-text">{intro.hours}</span>
          </span>
        </p>
        <ContactMap title={map.title} src={map.src} />
      </Reveal>
      <Reveal delay={0.5} className="lg:col-span-5">
        <ContactForm {...form} />
      </Reveal>
    </div>
  )
}
