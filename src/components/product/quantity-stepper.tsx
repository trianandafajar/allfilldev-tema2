"use client"

import { useState, type ChangeEvent } from "react"
import { cn } from "@/lib/utils"

export type QuantityStepperProps = {
  value: number
  onChange: (next: number) => void
  min?: number
  max?: number
  labels: {
    decrease: string
    increase: string
    /** Label aksesibilitas untuk kolom angka. */
    input: string
  }
  className?: string
}

const cellClass =
  "h-[55px] w-[60px] border border-line-light bg-transparent text-center text-heading outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-theme"

const stepClass = `${cellClass} cursor-pointer text-[32px] disabled:cursor-not-allowed disabled:opacity-40`

/** Pengatur jumlah: tombol kurang, kolom angka, dan tombol tambah (`.quantity`). */
export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = Number.MAX_SAFE_INTEGER,
  labels,
  className,
}: QuantityStepperProps) {
  // Teks ketikan sementara, supaya kolom boleh kosong saat pengguna mengganti angka.
  const [draft, setDraft] = useState<string | null>(null)

  function clamp(next: number): number {
    return Math.min(max, Math.max(min, next))
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const digits = event.target.value.replace(/\D/g, "")
    if (digits === "") {
      setDraft("")
      return
    }
    const next = clamp(Number.parseInt(digits, 10))
    onChange(next)
    setDraft(String(next) === digits ? digits : null)
  }

  return (
    <div
      className={cn(
        "flex w-[190px] items-center rounded-[6px] border border-heading",
        className
      )}
    >
      <button
        type="button"
        aria-label={labels.decrease}
        disabled={value <= min}
        onClick={() => {
          setDraft(null)
          onChange(clamp(value - 1))
        }}
        className={stepClass}
      >
        -
      </button>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        aria-label={labels.input}
        value={draft ?? String(value)}
        onChange={handleInput}
        onBlur={() => setDraft(null)}
        className={cellClass}
      />
      <button
        type="button"
        aria-label={labels.increase}
        disabled={value >= max}
        onClick={() => {
          setDraft(null)
          onChange(clamp(value + 1))
        }}
        className={stepClass}
      >
        +
      </button>
    </div>
  )
}
