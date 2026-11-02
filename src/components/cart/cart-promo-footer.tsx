"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type CartPromoFooterProps = {
  label: string
  placeholder: string
  submitLabel: string
}

/** Baris kode promo di bawah tabel (padanan `.cart-wrapper-footer`); tampilan saja, belum ada logika promo. */
export function CartPromoFooter({ label, placeholder, submitLabel }: CartPromoFooterProps) {
  return (
    <div className="mt-5 flex items-center justify-between max-md:w-[700px]">
      <form
        className="flex items-center justify-between rounded-[5px] border border-line p-2"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="cart-promo-code" className="sr-only">
          {label}
        </label>
        <Input
          id="cart-promo-code"
          type="text"
          name="promo-code"
          placeholder={placeholder}
          autoComplete="off"
          className="h-auto w-auto rounded-none border-0 bg-transparent p-[5px] text-base leading-[28px] uppercase shadow-none focus-visible:ring-0 md:text-base dark:bg-transparent"
        />
        <Button type="submit" variant="theme" size="theme" className="rounded-none">
          {submitLabel}
        </Button>
      </form>
    </div>
  )
}
