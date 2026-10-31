import { SiteImage } from "@/components/common/site-image"
import type { GalleryImage } from "./types"

type OffcanvasIntroProps = {
  about: string
  gallery: readonly (readonly GalleryImage[])[]
}

/** Teks pengantar dan galeri foto pada offcanvas. Hanya tampil mulai `lg` (di bawahnya menu yang tampil). */
export function OffcanvasIntro({ about, gallery }: OffcanvasIntroProps) {
  return (
    <>
      <p className="hidden text-body-text lg:block">{about}</p>
      <div className="mt-[30px] hidden lg:block">
        {gallery.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-center gap-5 not-last:mb-5"
          >
            {row.map((image) => (
              <div
                key={image.src}
                className="size-[100px] overflow-hidden rounded-[10px]"
              >
                <SiteImage src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
