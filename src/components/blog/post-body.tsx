import { Icon } from "@/components/common/icon"
import { SiteImage } from "@/components/common/site-image"
import type { BlogBlock } from "@/types/blog"

type PostBodyProps = { blocks: readonly BlogBlock[] }

/** Merender isi artikel dari daftar blok: paragraf, subjudul, kutipan, daftar centang, dan gambar. */
export function PostBody({ blocks }: PostBodyProps) {
  return (
    <div>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="mb-5">
                {block.text}
              </p>
            )
          case "heading":
            return (
              <h3 key={index} className="mt-10 mb-4 text-heading">
                {block.text}
              </h3>
            )
          case "quote":
            return (
              <blockquote
                key={index}
                className="my-8 border-l-4 border-theme-2 bg-white px-8 py-6 text-[22px] leading-snug font-semibold text-heading italic max-sm:px-5 max-sm:text-[18px]"
              >
                {block.text}
              </blockquote>
            )
          case "list":
            return (
              <ul key={index} className="mb-6">
                {block.items.map((item) => (
                  <li key={item} className="mb-2 flex items-start gap-3 font-medium text-heading">
                    <Icon name="check" className="mt-1 text-theme-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          case "image":
            return (
              <SiteImage
                key={index}
                src={block.src}
                alt={block.alt}
                sizes="(min-width: 1024px) 700px, 100vw"
                className="my-8 h-auto w-full max-w-[420px] rounded-[5px]"
              />
            )
        }
      })}
    </div>
  )
}
