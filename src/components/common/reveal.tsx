"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  as?: ElementType
  animation?: "fade-in-up" | "fade-in-right"
  /** Jeda dalam detik (padanan `data-wow-delay`). */
  delay?: number
  className?: string
  children?: ReactNode
}

const animationClass = {
  "fade-in-up": "animate-fade-in-up",
  "fade-in-right": "animate-fade-in-right",
} as const

/**
 * Animasi muncul saat elemen masuk viewport (pengganti WOW.js).
 * Disembunyikan sampai terlihat; pada reduced motion langsung tampil tanpa animasi.
 */
export function Reveal({
  as: Tag = "div",
  animation = "fade-in-up",
  delay,
  className,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={cn(
        visible ? animationClass[animation] : "invisible",
        "motion-reduce:visible motion-reduce:animate-none",
        className
      )}
      style={visible && delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  )
}
