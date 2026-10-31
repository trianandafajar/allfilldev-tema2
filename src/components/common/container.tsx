import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

type ContainerProps = ComponentProps<"div"> & {
  /** Lebar penuh (padanan `container-fluid`). */
  fluid?: boolean
}

/** Kontainer dengan lebar maksimum Bootstrap (540/720/960/1140/1320). */
export function Container({ fluid, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(fluid ? "layout-container-fluid" : "layout-container", className)}
      {...props}
    />
  )
}
