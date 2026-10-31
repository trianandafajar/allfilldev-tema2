import Link from "next/link"
import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import { SiteImage } from "@/components/common/site-image"

type FooterBottomProps = {
  copyright: {
    prefix: string
    year: string
    brand: string
    brandHref: string
    suffix: string
  }
  payment: { src: string; alt: string }
}

/** Bilah bawah footer: hak cipta dan gambar metode pembayaran. */
export function FooterBottom({ copyright, payment }: FooterBottomProps) {
  return (
    <div className="bg-theme py-[35px]">
      <Container>
        <div className="flex items-center justify-between max-md:flex-wrap max-md:justify-center max-md:gap-5">
          <Reveal
            as="p"
            animation="fade-in-up"
            delay={0.3}
            className="text-[20px] text-white capitalize"
          >
            {copyright.prefix} <span className="text-theme-3">{copyright.year}</span>{" "}
            <Link href={copyright.brandHref} className="text-white hover:text-theme-3">
              {copyright.brand}
            </Link>
            {copyright.suffix}
          </Reveal>
          <Reveal animation="fade-in-right" delay={0.5}>
            <SiteImage src={payment.src} alt={payment.alt} />
          </Reveal>
        </div>
      </Container>
    </div>
  )
}
