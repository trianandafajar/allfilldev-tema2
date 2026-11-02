"use client"

import { useRef, type MouseEvent, type PointerEvent } from "react"

/** Jarak geser (px) sebelum gerakan dianggap seretan, bukan klik. */
const DRAG_THRESHOLD = 5

/**
 * Menggeser kontainer `overflow-x` dengan menyeret mouse. Sentuhan sudah bisa menggulir
 * secara bawaan, jadi hanya `pointerType === "mouse"` yang ditangani. Klik sesudah seretan
 * dibatalkan agar item di dalamnya tidak ikut terpilih. Sebarkan `ref` dan `handlers`
 * ke elemen yang bisa digulir.
 */
export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const drag = useRef({ active: false, moved: false, startX: 0, startScroll: 0 })

  const end = (event: PointerEvent<T>) => {
    const el = ref.current
    if (!drag.current.active || !el) return
    drag.current.active = false
    el.style.userSelect = ""
    if (el.hasPointerCapture(event.pointerId)) el.releasePointerCapture(event.pointerId)
  }

  const handlers = {
    onPointerDown(event: PointerEvent<T>) {
      const el = ref.current
      if (event.pointerType !== "mouse" || event.button !== 0 || !el) return
      drag.current = {
        active: true,
        moved: false,
        startX: event.clientX,
        startScroll: el.scrollLeft,
      }
    },
    onPointerMove(event: PointerEvent<T>) {
      const state = drag.current
      const el = ref.current
      if (!state.active || !el) return
      const delta = event.clientX - state.startX
      if (!state.moved) {
        if (Math.abs(delta) < DRAG_THRESHOLD) return
        state.moved = true
        el.setPointerCapture(event.pointerId)
        el.style.userSelect = "none"
      }
      el.scrollLeft = state.startScroll - delta
    },
    onPointerUp: end,
    onPointerCancel: end,
    onClickCapture(event: MouseEvent<T>) {
      if (!drag.current.moved) return
      drag.current.moved = false
      event.preventDefault()
      event.stopPropagation()
    },
  }

  return { ref, handlers }
}
