import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SidebarWidgetProps = {
  title: string
  children: ReactNode
  className?: string
}

/** Pembungkus widget sidebar (Toko dan Blog) dengan judul bergaris aksen (`.single-sidebar-widget` + `.wid-title`). */
export function SidebarWidget({ title, children, className }: SidebarWidgetProps) {
  return (
    <div className={cn("-mt-[5px] mb-[35px] max-sm:mb-[30px]", className)}>
      <div className="relative mb-[25px] pl-2.5 before:absolute before:top-1/2 before:left-0 before:h-[17px] before:w-0.5 before:-translate-y-1/2 before:bg-theme before:content-['']">
        <h4 className="text-[24px] font-semibold">{title}</h4>
      </div>
      {children}
    </div>
  )
}
