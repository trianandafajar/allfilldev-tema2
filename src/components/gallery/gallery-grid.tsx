import { Reveal } from "@/components/common/reveal"
import { GalleryTile } from "./gallery-tile"

type GalleryGridProps = {
  items: readonly { src: string; alt: string }[]
  openLabel: string
  closeLabel: string
}

/** Pola lebar kolom (dari 12) yang berulang tiap enam foto: 8/4, 4/8, 9/3. */
const SPANS = [
  "lg:col-span-8",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-8",
  "lg:col-span-9",
  "lg:col-span-3",
] as const

/** Grid galeri 12 kolom dengan gutter 24px (padanan `row g-4`); dua kolom di tablet (`md`), satu kolom di mobile. */
export function GalleryGrid({ items, openLabel, closeLabel }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
      {items.map((item, index) => (
        <Reveal
          key={item.src}
          delay={0.3 + (index % 2) * 0.2}
          className={SPANS[index % SPANS.length]}
        >
          <GalleryTile
            src={item.src}
            alt={item.alt}
            openLabel={openLabel}
            closeLabel={closeLabel}
          />
        </Reveal>
      ))}
    </div>
  )
}
