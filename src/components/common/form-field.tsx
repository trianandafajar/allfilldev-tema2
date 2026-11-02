import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Kelas bersama untuk `Input` dan `Textarea` pada form halaman (latar abu tipis, tanpa border). */
export const fieldInputClass =
  "h-auto rounded-none border-0 bg-heading/[4.5%] px-[25px] py-[16px] text-[16px] font-medium text-body-text shadow-none focus-visible:ring-2 focus-visible:ring-theme/40 aria-invalid:ring-2 aria-invalid:ring-theme-2/60 max-sm:px-5 max-sm:py-3.5 md:text-[16px] dark:bg-heading/[4.5%]"

export const fieldTextareaClass = cn(
  fieldInputClass,
  "field-sizing-fixed min-h-[140px] resize-y"
)

/** Atribut aksesibilitas untuk kontrol yang dibungkus `FormField`. */
export function fieldA11y(id: string, error?: string) {
  return {
    id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
  } as const
}

type FormFieldProps = {
  /** Harus sama dengan `id` pada kontrol di dalamnya. */
  id: string
  label: string
  required?: boolean
  error?: string
  className?: string
  children: ReactNode
}

/** Label, kontrol, dan pesan kesalahan untuk satu field form. */
export function FormField({ id, label, required, error, className, children }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-[16px] font-semibold text-heading">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-theme-2">
            {" "}
            *
          </span>
        ) : null}
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
