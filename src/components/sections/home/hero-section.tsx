"use client"

import { useEffect, useState } from "react"
import {
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { AutoplayCarousel } from "./autoplay-carousel"
import {
  HeroSlide,
  type HeroDecoration,
  type HeroSlideData,
} from "./hero-slide"

export type HeroSectionProps = {
  /** Label aksesibilitas untuk region carousel. */
  label: string
  /** Gambar latar semua slide, relatif terhadap `public/images`. */
  backgroundImage: string
  /** Teks besar transparan di latar (sembunyi di bawah 1200px). */
  backTitle: string
  decorations: readonly HeroDecoration[]
  slides: readonly HeroSlideData[]
}

/** Hero slider: fade, loop, autoplay 5 detik, animasi masuk diputar ulang per slide aktif. */
export function HeroSection({
  label,
  backgroundImage,
  backTitle,
  decorations,
  slides,
}: HeroSectionProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)

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
    <section className="relative">
      <AutoplayCarousel
        delay={5000}
        duration={85}
        fade
        setApi={setApi}
        aria-label={label}
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, index) => {
            const active = index === selected
            return (
              <CarouselItem
                key={index}
                data-active={active}
                inert={!active}
                className="group/slide pl-0"
              >
                <HeroSlide
                  slide={slide}
                  backgroundImage={backgroundImage}
                  backTitle={backTitle}
                  decorations={decorations}
                  preload={index === 0}
                />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </AutoplayCarousel>
    </section>
  )
}
