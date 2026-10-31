"use client"

import Autoplay from "embla-carousel-autoplay"
import { useEffect, useMemo, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { TestimonialAvatar } from "./testimonial-avatar"
import { TestimonialQuote } from "./testimonial-quote"

export type TestimonialItem = {
  name: string
  role: string
  quote: string
  /** Jumlah bintang menyala (0–5). */
  rating: number
  avatar: { src: string; alt: string }
}

type TestimonialSliderProps = {
  items: readonly TestimonialItem[]
  contentLabel: string
  avatarLabel: string
}

type Api = NonNullable<CarouselApi>

const sliderOptions = { loop: true, align: "center", duration: 45 } as const

/** Buat handler yang menggeser `target` ke slide yang sama dengan `source`. */
function follow(source: Api, target: Api, onIndex: (index: number) => void) {
  return () => {
    const index = source.selectedScrollSnap()
    onIndex(index)
    if (target.selectedScrollSnap() !== index) target.scrollTo(index)
  }
}

/**
 * Dua slider tersinkron: kutipan teks (autoplay) dan avatar klien (3 slide, yang tengah aktif).
 * Menggeser salah satunya menggeser yang lain ke slide yang sama.
 */
export function TestimonialSlider({
  items,
  contentLabel,
  avatarLabel,
}: TestimonialSliderProps) {
  const [contentApi, setContentApi] = useState<CarouselApi>()
  const [avatarApi, setAvatarApi] = useState<CarouselApi>()
  const [activeIndex, setActiveIndex] = useState(0)
  const plugins = useMemo(
    () => [Autoplay({ delay: 3000, stopOnInteraction: false })],
    []
  )

  useEffect(() => {
    if (!contentApi || !avatarApi) return

    const contentToAvatar = follow(contentApi, avatarApi, setActiveIndex)
    const avatarToContent = follow(avatarApi, contentApi, setActiveIndex)
    contentApi.on("select", contentToAvatar)
    avatarApi.on("select", avatarToContent)
    return () => {
      contentApi.off("select", contentToAvatar)
      avatarApi.off("select", avatarToContent)
    }
  }, [contentApi, avatarApi])

  return (
    <>
      <Carousel
        opts={sliderOptions}
        plugins={plugins}
        setApi={setContentApi}
        aria-label={contentLabel}
      >
        <CarouselContent className="ml-0">
          {items.map((item, index) => (
            <CarouselItem key={index} className="pl-0">
              <TestimonialQuote
                name={item.name}
                role={item.role}
                quote={item.quote}
                rating={item.rating}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel
        opts={sliderOptions}
        setApi={setAvatarApi}
        aria-label={avatarLabel}
        className="mx-auto w-[300px] cursor-grab active:cursor-grabbing"
      >
        <CarouselContent className="ml-0">
          {items.map((item, index) => (
            <CarouselItem key={index} className="basis-1/3 pl-0">
              <TestimonialAvatar
                src={item.avatar.src}
                alt={item.avatar.alt}
                active={index === activeIndex}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}
