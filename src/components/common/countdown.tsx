"use client"

import { useSyncExternalStore } from "react"
import { cn } from "@/lib/utils"

type CountdownLabels = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

type CountdownProps = {
  /** Waktu target dalam format ISO 8601, mis. `2026-12-31T23:59:59+07:00`. */
  targetDate: string
  labels: CountdownLabels
  className?: string
}

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 500)
  return () => window.clearInterval(id)
}

/** Detik epoch saat ini; nilainya stabil di antara detik sehingga render ulang hanya tiap detik. */
const getSnapshot = () => Math.floor(Date.now() / SECOND)

/** Di server (dan saat hidrasi) waktu belum diketahui, jadi angka tampil "00" di kedua sisi. */
const getServerSnapshot = (): number | null => null

function pad(value: number) {
  return String(value).padStart(2, "0")
}

/** Hitung mundur ke `targetDate`: hari, jam, menit, detik (padanan `.countdown-items`). */
export function Countdown({ targetDate, labels, className }: CountdownProps) {
  const nowSeconds = useSyncExternalStore<number | null>(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )

  const target = Date.parse(targetDate)
  const remaining =
    nowSeconds === null || Number.isNaN(target)
      ? 0
      : Math.max(0, target - nowSeconds * SECOND)

  const units = [
    { key: "days", value: Math.floor(remaining / DAY), label: labels.days },
    { key: "hours", value: Math.floor((remaining % DAY) / HOUR), label: labels.hours },
    { key: "minutes", value: Math.floor((remaining % HOUR) / MINUTE), label: labels.minutes },
    { key: "seconds", value: Math.floor((remaining % MINUTE) / SECOND), label: labels.seconds },
  ]

  return (
    <ul className={cn("flex items-center justify-center gap-[30px]", className)}>
      {units.map((unit) => (
        <li key={unit.key}>
          <span className="text-[44px] font-semibold text-theme-2">{pad(unit.value)}</span>
          <p className="text-[19px] font-medium text-heading">{unit.label}</p>
        </li>
      ))}
    </ul>
  )
}
