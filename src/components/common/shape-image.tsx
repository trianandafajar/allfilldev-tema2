import { cn } from "@/lib/utils"
import { SiteImage } from "./site-image"

type ShapeImageProps = {
  src: string
  className?: string
  imageClassName?: string
}

/** Gambar dekoratif absolut; posisi diatur lewat `className`. Alt kosong (dekoratif). */
export function ShapeImage({ src, className, imageClassName }: ShapeImageProps) {
  return (
    <div aria-hidden="true" className={cn("absolute", className)}>
      <SiteImage src={src} alt="" className={imageClassName} />
    </div>
  )
}
