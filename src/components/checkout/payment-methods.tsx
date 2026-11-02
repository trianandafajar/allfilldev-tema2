"use client"

import { useId } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

type PaymentOption = { value: string; label: string }

type PaymentMethodsProps = {
  legend: string
  options: readonly PaymentOption[]
  value: string
  onValueChange: (value: string) => void
}

/** Kartu pilihan metode pembayaran (padanan `.checkout-radio`). Tidak meminta data kartu. */
export function PaymentMethods({ legend, options, value, onValueChange }: PaymentMethodsProps) {
  const id = useId()
  const legendId = `${id}-legend`

  return (
    <div className="rounded-[5px] p-6 shadow-[0_6px_30px_0] shadow-black/6 max-xs:p-2.5">
      <p
        id={legendId}
        className="mb-4 text-[24px] leading-[150%] font-medium text-heading uppercase"
      >
        {legend}
      </p>
      <RadioGroup
        name="payment"
        aria-labelledby={legendId}
        value={value}
        onValueChange={onValueChange}
        className="gap-3"
      >
        {options.map((option) => {
          const optionId = `${id}-${option.value}`
          return (
            <div key={option.value} className="flex items-start gap-2">
              <RadioGroupItem
                id={optionId}
                value={option.value}
                className="mt-1 size-[18px] border-line shadow-none data-[state=checked]:border-theme data-[state=checked]:bg-theme"
              />
              <label htmlFor={optionId} className="cursor-pointer text-heading uppercase">
                {option.label}
              </label>
            </div>
          )
        })}
      </RadioGroup>
    </div>
  )
}
