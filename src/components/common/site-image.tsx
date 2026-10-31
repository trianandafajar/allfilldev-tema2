import Image from "next/image"
import type { ComponentProps } from "react"
import imageSizes from "@/lib/image-sizes.json"

const sizes = imageSizes as unknown as Record<string, [number, number]>

type SiteImageProps = Omit<ComponentProps<typeof Image>, "src" | "width" | "height"> & {
  /** Path relatif terhadap `public/images`, mis. `food/pizza.png`. */
  src: string
}

/** Gambar situs dengan ukuran asli dari manifest (`src/lib/image-sizes.json`). */
export function SiteImage({ src, alt, ...props }: SiteImageProps) {
  const size = sizes[src]
  if (!size) {
    throw new Error(`SiteImage: "${src}" belum ada di src/lib/image-sizes.json`)
  }
  const [width, height] = size

  return <Image src={`/images/${src}`} alt={alt} width={width} height={height} {...props} />
}
