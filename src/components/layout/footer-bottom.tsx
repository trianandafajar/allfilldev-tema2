import Link from "next/link"
import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import type { LinkItem } from "./types"

type FooterBottomProps = {
  copyright: {
    prefix: string
    year: string
    brand: string
    brandHref: string
    suffix: string
  }
  /** Tautan hukum (kebijakan privasi, syarat) di sisi kanan bilah. */
  legalLinks: readonly LinkItem[]
}

/** Bilah bawah footer: hak cipta di kiri, tautan hukum di kanan. */
export function FooterBottom({ copyright, legalLinks }: FooterBottomProps) {
  return (
    <div className="bg-theme py-[35px]">
      <Container>
        <div className="flex items-center justify-between gap-x-8 gap-y-3 max-md:flex-col">
          <Reveal
            as="p"
            animation="fade-in-up"
            delay={0.3}
            className="text-[20px] text-white capitalize max-md:text-center"
          >
            {copyright.prefix} <span className="text-theme-3">{copyright.year}</span>{" "}
            <Link href={copyright.brandHref} className="text-white hover:text-theme-3">
              {copyright.brand}
            </Link>
            {copyright.suffix}
          </Reveal>
          <Reveal animation="fade-in-right" delay={0.5}>
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
          </Reveal>
        </div>
      </Container>
    </div>
  )
}
