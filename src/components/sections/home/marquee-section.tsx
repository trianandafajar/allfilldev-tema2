import { Fragment } from "react"
import { Section } from "@/components/common/section"
import { SiteImage } from "@/components/common/site-image"
import { cn } from "@/lib/utils"

export type MarqueeItem =
  | { kind: "text"; text: string; tone: "muted" | "accent" }
  | { kind: "icon"; /** Path gambar relatif terhadap `public/images`. */ src: string }

export type MarqueeSectionProps = {
  /** Satu rangkaian teks dan ikon; diulang `repeat` kali agar jalur cukup panjang. */
  items: MarqueeItem[]
  repeat: number
}

const toneClass = {
  muted:
    "text-outline-muted [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_var(--outline-muted)]",
  accent:
    "text-theme-2 [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_var(--theme-2)]",
} as const

/** Teks outline besar yang bergulir ke kiri; murni dekoratif. */
export function MarqueeSection({ items, repeat }: MarqueeSectionProps) {
  return (
    <Section surface padding="no-top" aria-hidden="true">
      <div className="relative mt-[30px] -mb-[3px] h-[100px] overflow-hidden text-[130px] leading-[85px] font-bold whitespace-nowrap uppercase max-sm:h-[70px] max-sm:text-[50px]">
        <div className="absolute flex w-[200%] animate-marquee-left">
          <ul className="flex w-1/2">
            <li>
              {Array.from({ length: repeat }, (_, round) =>
                items.map((item, index) => (
                  <Fragment key={`${round}-${index}`}>
                    {item.kind === "text" ? (
                      <span className={cn("italic", toneClass[item.tone])}>{item.text}</span>
                    ) : (
                      <span>
                        <SiteImage src={item.src} alt="" />
                      </span>
                    )}{" "}
                  </Fragment>
                ))
              )}
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
