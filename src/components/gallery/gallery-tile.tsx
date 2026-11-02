import { Icon } from "@/components/common/icon"
import { SiteImage } from "@/components/common/site-image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type GalleryTileProps = {
  /** Path foto relatif terhadap `public/images`. */
  src: string
  alt: string
  openLabel: string
  closeLabel: string
}

/**
 * Satu petak galeri (padanan `.galler-image-2`): foto latar setinggi 448px, saat hover muncul
 * lapisan gelap dan ikon plus. Menekan petak membuka foto besar di dialog.
 */
export function GalleryTile({ src, alt, openLabel, closeLabel }: GalleryTileProps) {
  return (
    <Dialog>
      <div
        className="group/tile relative h-[448px] w-full bg-cover bg-center bg-no-repeat max-sm:h-[380px] after:invisible after:absolute after:top-0 after:left-0 after:h-full after:w-full after:scale-50 after:bg-black/50 after:opacity-0 after:transition-all after:duration-500 after:ease-in-out hover:after:visible hover:after:scale-100 hover:after:opacity-100 has-focus-visible:after:visible has-focus-visible:after:scale-100 has-focus-visible:after:opacity-100"
        style={{ backgroundImage: `url(/images/${src})` }}
      >
        <DialogTrigger asChild>
          <button
            type="button"
            aria-label={`${openLabel}: ${alt}`}
            className="absolute inset-0 z-3 flex cursor-zoom-in items-center justify-center text-[70px] text-white outline-none"
          >
            <Icon
              name="plus"
              family="light"
              className="invisible scale-50 opacity-0 transition-all duration-300 ease-in-out group-hover/tile:visible group-hover/tile:scale-100 group-hover/tile:opacity-100 group-hover/tile:delay-300 group-has-focus-visible/tile:visible group-has-focus-visible/tile:scale-100 group-has-focus-visible/tile:opacity-100"
            />
          </button>
        </DialogTrigger>
      </div>
      <DialogContent closeLabel={closeLabel} className="p-2 sm:max-w-[min(900px,calc(100%-2rem))]">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogDescription className="sr-only">{alt}</DialogDescription>
        <SiteImage src={src} alt={alt} sizes="90vw" className="h-auto max-h-[80vh] w-full object-contain" />
      </DialogContent>
    </Dialog>
  )
}
