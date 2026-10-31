"use client"

import { useSyncExternalStore } from "react"

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true })
  return () => window.removeEventListener("scroll", onChange)
}

/** `true` bila posisi scroll vertikal melewati `threshold` piksel. Aman untuk SSR (awalnya `false`). */
export function useScrolled(threshold: number): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false
  )
}
