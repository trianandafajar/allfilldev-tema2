import Link from "next/link"
import { SocialLinks } from "@/components/layout/social-links"
import type { SocialLink } from "@/components/layout/types"

type PostShareProps = {
  tagsTitle: string
  tags: readonly { label: string; href: string }[]
  shareTitle: string
  shareLinks: readonly SocialLink[]
}

/** Baris di bawah artikel: tag terkait di kiri, tombol bagikan di kanan. */
export function PostShare({ tagsTitle, tags, shareTitle, shareLinks }: PostShareProps) {
  return (
    <div className="mt-10 flex flex-wrap items-start justify-between gap-8 border-t border-line pt-8">
      <div>
        <h4 className="mb-3 text-heading">{tagsTitle}</h4>
        <ul className="flex flex-wrap gap-2.5">
          {tags.map((tag) => (
            <li key={tag.label}>
              <Link
                href={tag.href}
                className="inline-block bg-heading/[4.5%] px-4 py-2 font-semibold capitalize transition-colors duration-400 hover:bg-theme hover:text-white"
              >
                {tag.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="mb-3 text-heading">{shareTitle}</h4>
        <SocialLinks links={shareLinks} variant="offcanvas" className="mt-0" />
      </div>
    </div>
  )
}
