import Link from "next/link"
import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import { SiteImage } from "@/components/common/site-image"
import type { LinkItem } from "./types"

type FooterBottomProps = {
  copyright: {
    prefix: string
    year: string
    brand: string
    brandHref: string
    suffix: string
  }
  /** Tautan hukum (kebijakan privasi, syarat) di bawah hak cipta. */
  legalLinks: readonly LinkItem[]
  payment: { src: string; alt: string }
}

/** Bilah bawah footer: hak cipta, tautan hukum, dan gambar metode pembayaran. */
export function FooterBottom({ copyright, legalLinks, payment }: FooterBottomProps) {
  return (
    <div className="bg-theme py-[35px]">
      <Container>
        <div className="flex items-center justify-between max-md:flex-wrap max-md:justify-center max-md:gap-5">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 max-md:justify-center">
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
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 max-md:justify-center">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-white transition-colors hover:text-theme-3"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Reveal animation="fade-in-right" delay={0.5}>
            <SiteImage src={payment.src} alt={payment.alt} />
          </Reveal>
        </div>
      </Container>
    </div>
  )
}
