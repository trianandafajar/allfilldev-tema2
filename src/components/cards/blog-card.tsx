import Link from "next/link"
import { Icon } from "@/components/common/icon"
import { SiteImage } from "@/components/common/site-image"

export type BlogCardProps = {
  href: string
  title: string
  excerpt: string
  /** Path gambar sampul relatif terhadap `public/images`. */
  cover: string
  coverAlt: string
  categoryLabel: string
  /** Tanggal siap tampil. */
  date: string
  author: string
  /** Mis. "4 menit baca". */
  readingTime: string
  readMoreLabel: string
}

/** Kartu artikel: sampul dengan lencana kategori, meta, judul, kutipan, dan tautan baca. */
export function BlogCard({
  href,
  title,
  excerpt,
  cover,
  coverAlt,
  categoryLabel,
  date,
  author,
  readingTime,
  readMoreLabel,
}: BlogCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[5px] bg-white shadow-[0_6px_30px_0] shadow-black/6">
      <Link href={href} className="group relative block overflow-hidden" tabIndex={-1} aria-hidden="true">
        <SiteImage
          src={cover}
          alt={coverAlt}
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-8 max-sm:p-6">
        <span className="mb-3 inline-block self-start bg-theme-2 px-3 py-1 text-sm font-semibold text-white uppercase">
          {categoryLabel}
        </span>
        <ul className="mb-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-body-text">
          <li>{date}</li>
          <li>{author}</li>
          <li>{readingTime}</li>
        </ul>
        <h3 className="mb-3 text-[24px] leading-tight text-heading">
          <Link href={href} className="transition-colors hover:text-theme-2">
            {title}
          </Link>
        </h3>
        <p className="mb-5 line-clamp-3">{excerpt}</p>
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-2 font-bold text-theme uppercase transition-colors hover:text-theme-2"
        >
          {readMoreLabel}
          <Icon name="long-arrow-right" family="light" />
        </Link>
      </div>
    </article>
  )
}
