"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { formatRupiah } from "@/lib/format"
import { SidebarWidget } from "@/components/common/sidebar-widget"

type PriceFilterWidgetProps = {
  title: string
  label: string
  sliderLabel: string
  buttonLabel: string
  /** `null` = rentang penuh. */
  value: [number, number] | null
  min: number
  max: number
  step: number
}

/** Slider rentang harga; nilai dikirim sebagai `harga=min-max` hanya bila bukan rentang penuh. */
export function PriceFilterWidget({
  title,
  label,
  sliderLabel,
  buttonLabel,
  value,
  min,
  max,
  step,
}: PriceFilterWidgetProps) {
  const [range, setRange] = useState<[number, number]>(value ?? [min, max])
  const isFullRange = range[0] === min && range[1] === max

  return (
    <SidebarWidget title={title}>
      <div>
        <Slider
          role="group"
          aria-label={sliderLabel}
          min={min}
          max={max}
          step={step}
          value={range}
          onValueChange={(next) => {
            const [low = min, high = max] = next
            setRange([low, high])
          }}
          className="h-3.5 **:data-[slot=slider-track]:bg-heading **:data-[slot=slider-range]:bg-theme **:data-[slot=slider-thumb]:size-3.5 **:data-[slot=slider-thumb]:cursor-grab **:data-[slot=slider-thumb]:border-2 **:data-[slot=slider-thumb]:border-theme **:data-[slot=slider-thumb]:bg-theme **:data-[slot=slider-thumb]:opacity-80 **:data-[slot=slider-thumb]:ring-theme/30 **:data-[slot=slider-thumb]:hover:ring-0 **:data-[slot=slider-thumb]:active:cursor-grabbing **:data-[slot=slider-thumb]:active:ring-[5px]"
        />
        {isFullRange ? null : (
          <input type="hidden" name="harga" value={`${range[0]}-${range[1]}`} />
        )}
        <div className="relative mt-[30px] flex flex-wrap items-center gap-x-3 gap-y-4">
          <div className="flex flex-wrap items-center gap-x-2 text-[18px] font-medium whitespace-nowrap text-heading">
            <span>{label}</span>
            <span>{formatRupiah(range[0])}</span>
            <span aria-hidden className="text-[24px] leading-[42px]">-</span>
            <span>{formatRupiah(range[1])}</span>
          </div>
          <Button
            type="submit"
            variant="theme"
            size="theme"
            className="rounded-none px-[30px] py-3.5 max-lg:px-[30px] max-lg:py-3.5 max-md:px-[30px] max-md:py-3.5"
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </SidebarWidget>
  )
}
