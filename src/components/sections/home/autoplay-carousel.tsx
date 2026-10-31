"use client"

import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import { useMemo, type ComponentProps } from "react"
import { Carousel } from "@/components/ui/carousel"

type AutoplayCarouselProps = Omit<
  ComponentProps<typeof Carousel>,
  "opts" | "plugins"
> & {
  /** Jeda autoplay dalam ms (padanan `autoplay.delay` Swiper). */
  delay: number
  /** Durasi geser Embla (satuan fisika scroll, bukan ms): ~25 = 0,6 detik, ~85 = 2 detik. */
  duration: number
  /** Ganti geser dengan efek fade (padanan `effect: "fade"` Swiper). */
  fade?: boolean
}

/** Carousel loop + autoplay yang tidak berhenti saat disentuh (padanan opsi Swiper template). */
export function AutoplayCarousel({
  delay,
  duration,
  fade,
  ...props
}: AutoplayCarouselProps) {
  const opts = useMemo(
    () => ({ loop: true, align: "start", duration }) as const,
    [duration]
  )
  const plugins = useMemo(
    () => [
      Autoplay({ delay, stopOnInteraction: false }),
      ...(fade ? [Fade()] : []),
    ],
    [delay, fade]
  )

  return <Carousel opts={opts} plugins={plugins} {...props} />
}
