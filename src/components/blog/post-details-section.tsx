import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"
import { SiteImage } from "@/components/common/site-image"
import { BlogSidebar, type BlogSidebarProps } from "./blog-sidebar"
import { PostBody } from "./post-body"
import { PostShare } from "./post-share"
import type { ComponentProps } from "react"

type PostDetailsSectionProps = {
  title: string
  cover: string
  coverAlt: string
  categoryLabel: string
  /** Baris meta siap tampil: tanggal, penulis, waktu baca. */
  meta: readonly string[]
  body: ComponentProps<typeof PostBody>["blocks"]
  share: ComponentProps<typeof PostShare>
  sidebar: BlogSidebarProps
}

/** Artikel lengkap di kiri dan sidebar di kanan. */
export function PostDetailsSection({
  title,
  cover,
  coverAlt,
  categoryLabel,
  meta,
  body,
  share,
  sidebar,
}: PostDetailsSectionProps) {
  return (
    <Section surface>
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <article className="min-w-0 lg:col-span-8">
            <SiteImage
              src={cover}
              alt={coverAlt}
              priority
              sizes="(min-width: 1024px) 760px, 100vw"
              className="aspect-[16/9] w-full rounded-[5px] object-cover"
            />
            <div className="mt-8">
              <span className="mb-3 inline-block bg-theme-2 px-3 py-1 text-sm font-semibold text-white uppercase">
                {categoryLabel}
              </span>
              <h2 className="mb-4 text-heading">{title}</h2>
              <ul className="mb-8 flex flex-wrap gap-x-5 gap-y-1 text-body-text">
                {meta.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <PostBody blocks={body} />
              <PostShare {...share} />
            </div>
          </article>
          <div className="min-w-0 lg:col-span-4">
            <BlogSidebar {...sidebar} />
          </div>
        </div>
      </Container>
    </Section>
  )
}
