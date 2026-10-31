"use client"

import Autoplay from "embla-carousel-autoplay"
import { useEffect, useMemo, useState } from "react"
import { SiteImage } from "@/components/common/site-image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

export type BrandLogo = {
  /** Path relatif terhadap `public/images`, mis. `brand/01.svg`. */
  src: string
  alt: string
}

type BrandSliderProps = {
  logos: readonly BrandLogo[]
  /** Label aksesibilitas untuk region carousel. */
  label: string
}

const carouselOptions = { loop: true, align: "start", duration: 40 } as const

/** Efek hitam-putih saat hover dan pada slide aktif (padanan `.brand-image img`). */
const itemClass =
  "group/brand basis-full pl-[30px] min-[400px]:basis-1/2 min-[500px]:basis-1/3 min-[768px]:basis-1/4 min-[991px]:basis-1/5 min-[1399px]:basis-1/6"

const imageClass =
  "cursor-pointer transition-all duration-400 ease-in-out hover:[filter:brightness(50%)_grayscale(100%)_contrast(150%)] group-data-[active=true]/brand:[filter:brightness(50%)_grayscale(100%)_contrast(150%)]"

/** Slider logo sponsor: loop, autoplay 2 detik, 1–6 slide per layar. */
export function BrandSlider({ logos, label }: BrandSliderProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)
  const plugins = useMemo(
    () => [Autoplay({ delay: 2000, stopOnInteraction: false })],
    []
  )

  useEffect(() => {
    if (!api) return
    const onSelect = () => setSelected(api.selectedScrollSnap())
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  return (
    <Carousel
      opts={carouselOptions}
      plugins={plugins}
      setApi={setApi}
      aria-label={label}
    >
      <CarouselContent className="-ml-[30px] items-center">
        {logos.map((logo, index) => (
          <CarouselItem
            key={index}
            className={itemClass}
            data-active={index === selected}
          >
            <div className="max-sm:text-center">
              <SiteImage src={logo.src} alt={logo.alt} className={imageClass} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
