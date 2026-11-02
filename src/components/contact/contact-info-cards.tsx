import { Reveal } from "@/components/common/reveal"
import { SiteImage } from "@/components/common/site-image"

type ContactInfoCard = {
  /** Path ikon relatif terhadap `public/images`. */
  icon: string
  title: string
  text: string
  href: string
}

type ContactInfoCardsProps = { cards: readonly ContactInfoCard[] }

/** Deret kartu info kontak (alamat, telepon, email); tiap kartu adalah tautan ke tujuannya. */
export function ContactInfoCards({ cards }: ContactInfoCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <Reveal key={card.title} delay={0.3 + index * 0.2}>
          <a
            href={card.href}
            className="group block h-full rounded-[5px] bg-white px-8 py-10 text-center shadow-[0_6px_30px_0] shadow-black/6 transition-all duration-400 ease-in-out hover:-translate-y-1"
          >
            <SiteImage
              src={card.icon}
              alt=""
              className="mx-auto h-[72px] w-auto"
            />
            <h3 className="mt-6 mb-2.5 text-heading transition-colors group-hover:text-theme-2">
              {card.title}
            </h3>
            <p className="text-body-text">{card.text}</p>
          </a>
        </Reveal>
      ))}
    </div>
  )
}
