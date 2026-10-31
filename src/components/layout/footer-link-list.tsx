import Link from "next/link"
import type { LinkItem } from "./types"

type FooterLinkListProps = {
  links: readonly LinkItem[]
}

/** Daftar tautan footer; titik hijau dan geser kanan saat hover. */
export function FooterLinkList({ links }: FooterLinkListProps) {
  return (
    <ul>
      {links.map((link) => (
        <li key={`${link.href}-${link.label}`} className="capitalize not-last:mb-[15px]">
          <Link
            href={link.href}
            className="relative text-[18px] text-body-text transition-all duration-400 ease-in-out before:invisible before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full before:bg-theme before:opacity-0 before:transition-all before:duration-400 before:ease-in-out before:content-[''] hover:pl-5 hover:text-theme hover:before:visible hover:before:opacity-100"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
