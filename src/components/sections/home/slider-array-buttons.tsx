"use client"

import { Icon } from "@/components/common/icon"
import { useCarousel } from "@/components/ui/carousel"

type SliderArrowButtonsProps = {
  prevLabel: string
  nextLabel: string
}

/** Tombol panah kiri/kanan untuk Carousel (padanan `.array-button`); harus berada di dalam `<Carousel>`. */
export function SliderArrowButtons({ prevLabel, nextLabel }: SliderArrowButtonsProps) {
  const { scrollPrev, scrollNext } = useCarousel()

  return (
    <div className="relative z-99">
      <button
        type="button"
        aria-label={prevLabel}
        onClick={scrollPrev}
        className="mr-5 h-[60px] w-[60px] cursor-pointer rounded-full border border-white bg-transparent text-center leading-[60px] text-theme-2 transition-all duration-400 ease-in-out hover:bg-white max-md:mr-0 max-md:mb-2.5 max-sm:h-[45px] max-sm:w-[45px] max-sm:leading-[45px]"
      >
        <Icon name="long-arrow-left" family="regular" />
      </button>
      <button
        type="button"
        aria-label={nextLabel}
        onClick={scrollNext}
        className="h-[60px] w-[60px] cursor-pointer rounded-full bg-theme-2 text-center leading-[60px] text-white shadow-[0_10px_20px_0] shadow-black/6 transition-all duration-400 ease-in-out hover:bg-white hover:text-theme-2 max-sm:h-[45px] max-sm:w-[45px] max-sm:leading-[45px]"
      >
        <Icon name="long-arrow-right" family="regular" />
      </button>
    </div>
  )
}
