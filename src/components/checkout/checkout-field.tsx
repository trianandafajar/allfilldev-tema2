import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Kelas input checkout (padanan `.checkout-single-form .input-single input`): border 1px, radius 5,
 * padding 12px 24px, huruf kapital. Direset eksplisit karena Tailwind menghapus gaya bawaan input.
 */
export const checkoutInputClass =
  "h-auto rounded-[5px] border border-line bg-transparent px-6 py-3 text-[18px] font-medium text-heading uppercase shadow-none placeholder:text-heading focus-visible:border-theme focus-visible:ring-0 aria-invalid:border-theme-2 aria-invalid:ring-0 md:text-[18px] dark:bg-transparent"

export const checkoutTextareaClass = cn(checkoutInputClass, "field-sizing-fixed min-h-0")

type CheckoutFieldProps = {
  /** Harus sama dengan `id` pada kontrol di dalamnya. */
  id: string
  /** Label untuk pembaca layar; tampilan memakai placeholder seperti template. */
  label: string
  error?: string
  className?: string
  children: ReactNode
}

/** Satu kolom form checkout (padanan `.input-single`): kontrol dan pesan kesalahan. */
export function CheckoutField({ id, label, error, className, children }: CheckoutFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-theme-2">
          {error}
        </p>
      ) : null}
    </div>
  )
}
