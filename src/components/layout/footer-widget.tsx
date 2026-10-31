import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type FooterWidgetProps = {
  /** Judul kolom (h4). Diabaikan bila `head` diisi. */
  title?: string
  /** Pengganti judul, mis. logo. */
  head?: ReactNode
  className?: string
  children: ReactNode
}

/** Satu kolom footer: kepala (judul/logo) lalu isi. */
export function FooterWidget({ title, head, className, children }: FooterWidgetProps) {
  return (
    <div className={cn("mt-[30px]", className)}>
      <div className="mb-[30px] max-sm:mb-5">
        {head ?? <h4 className="mt-2.5 capitalize">{title}</h4>}
      </div>
      {children}
    </div>
  )
}
