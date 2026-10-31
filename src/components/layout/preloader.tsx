"use client"

import { useEffect, useState, type CSSProperties } from "react"
import { cn } from "@/lib/utils"

type PreloaderProps = {
  /** Teks besar yang animasinya dimainkan huruf demi huruf (mis. nama merek). */
  text: string
  /** Teks kecil di bawahnya (mis. "Memuat"). */
  label: string
}

type Phase = "loading" | "loaded" | "fading" | "done"

/**
 * Keadaan "loading" otomatis memudar sendiri setelah 10 detik lewat CSS murni
 * (`@starting-style` + transition-delay), sehingga halaman tidak tertutup selamanya
 * bila JavaScript gagal dimuat. Tanpa skrip sama sekali, preloader langsung disembunyikan.
 */
const phaseClass: Record<Exclude<Phase, "done">, string> = {
  loading:
    "invisible opacity-0 [transition-delay:10s] starting:visible starting:opacity-100",
  loaded: "visible opacity-100",
  fading: "invisible opacity-0",
}

const PANEL_COUNT = 4
const FADE_START_MS = 600
const FADE_END_MS = 1250

/** Layar pemuatan: huruf beranimasi, spinner, dan empat panel tirai yang membuka setelah halaman siap. */
export function Preloader({ text, label }: PreloaderProps) {
  const [phase, setPhase] = useState<Phase>("loading")

  useEffect(() => {
    const timers: number[] = []
    let frame = 0

    const start = () => {
      setPhase("loaded")
      timers.push(window.setTimeout(() => setPhase("fading"), FADE_START_MS))
      timers.push(window.setTimeout(() => setPhase("done"), FADE_END_MS))
    }

    if (document.readyState === "complete") {
      frame = window.requestAnimationFrame(start)
    } else {
      window.addEventListener("load", start, { once: true })
    }

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("load", start)
      timers.forEach((id) => window.clearTimeout(id))
    }
  }, [])

  if (phase === "done") return null

  const loaded = phase !== "loading"

  return (
    <div
      role="status"
      aria-label={label}
      className={cn(
        "fixed inset-0 z-9999999 flex cursor-default items-center justify-center transition-[opacity,visibility] duration-600 ease-[ease] [@media(scripting:none)]:hidden",
        phaseClass[phase]
      )}
    >
      <div
        className={cn(
          "z-1000 transition-opacity duration-300 ease-out",
          loaded && "opacity-0"
        )}
      >
        <div className="mx-auto mb-[3.5em] size-[9em] animate-spinner rounded-full border-[3px] border-black/20 border-t-theme max-md:mb-[1.5em] max-md:size-[7.5em]" />
        <div className="text-center text-[5em] leading-[normal] font-bold select-none max-md:text-[2.5em]">
          {Array.from(text).map((char, index) => (
            <span
              key={index}
              data-text-preloader={char}
              style={{ "--letter-delay": `${index * 0.2}s` } as CSSProperties}
              className="relative text-theme-2 before:absolute before:top-[-3px] before:left-0 before:text-theme before:opacity-0 before:content-[attr(data-text-preloader)] before:[animation:letters-loading_4s_var(--letter-delay)_infinite] before:[transform:rotateY(-90deg)]"
            >
              {char}
            </span>
          ))}
        </div>
        <p className="text-center text-[15px] font-semibold tracking-[8px] text-theme-3 uppercase">
          {label}
        </p>
      </div>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-1">
        <div className="-mx-3 flex h-full flex-wrap">
          {Array.from({ length: PANEL_COUNT }, (_, index) => (
            <div key={index} className="w-1/4 shrink-0 p-0">
              <div
                className={cn(
                  "h-full w-full bg-white transition-all duration-800 ease-[cubic-bezier(0.77,0,0.175,1)]",
                  loaded && "w-0"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
