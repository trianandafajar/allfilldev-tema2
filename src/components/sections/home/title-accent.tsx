import type { ReactNode } from "react"

/** Kata beraksen merah di dalam judul section (padanan `.section-title span`). */
export function TitleAccent({ children }: { children: ReactNode }) {
  return <span className="mb-[5px] inline-block text-theme-2">{children}</span>
}
