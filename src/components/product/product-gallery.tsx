"use client"

import { Icon } from "@/components/common/icon"
import { SiteImage } from "@/components/common/site-image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export type ProductGalleryProps = {
  /** `src` relatif terhadap `public/images`. */
  images: { src: string; alt: string }[]
  labels: {
    /** Label tautan ke gambar ukuran penuh. */
    zoom: string
    /** Label tiap tombol thumbnail, berurutan dengan `images`. */
    thumbnails: string[]
  }
}

/** Galeri produk: gambar besar dengan ikon cari di tengah, dan thumbnail sebagai tab (`.product-image-items`). */
export function ProductGallery({ images, labels }: ProductGalleryProps) {
  return (
    <Tabs defaultValue="0" className="block gap-0">
      {images.map((image, index) => (
        <TabsContent
          key={image.src}
          value={String(index)}
          className="flex-none animate-in text-[18px] duration-150 ease-linear fade-in-0"
        >
          <div className="relative aspect-[522/467]">
            <SiteImage src={image.src} alt={image.alt} className="size-full object-contain" />
            <a
              href={`/images/${image.src}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={labels.zoom}
              className="absolute top-1/2 left-1/2 flex size-[130px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-theme-3 text-center max-lg:size-[90px] max-sm:size-[70px]"
            >
              <Icon name="search" className="text-[24px] text-heading" />
            </a>
          </div>
        </TabsContent>
      ))}
      <TabsList
        variant="line"
        className="mt-5 h-auto w-full flex-wrap justify-start gap-0 rounded-none p-0 group-data-horizontal/tabs:h-auto"
      >
        {images.map((image, index) => (
          <TabsTrigger
            key={image.src}
            value={String(index)}
            aria-label={labels.thumbnails[index]}
            className="block h-auto flex-none cursor-pointer rounded-none border-0 bg-transparent p-0 after:hidden data-[state=active]:bg-transparent"
          >
            <SiteImage src={image.src} alt="" className="h-[132px] w-[129px] object-contain" />
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
