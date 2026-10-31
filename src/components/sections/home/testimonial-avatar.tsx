import { SiteImage } from "@/components/common/site-image"
import { cn } from "@/lib/utils"

type TestimonialAvatarProps = {
  src: string
  alt: string
  /** Avatar di tengah slider: diberi kotak kuning di belakang lingkaran foto. */
  active: boolean
}

/** Foto klien bulat pada slider avatar (padanan `.client-image-item`). */
export function TestimonialAvatar({ src, alt, active }: TestimonialAvatarProps) {
  return (
    <div
      className={cn(
        "relative",
        active &&
          "before:absolute before:bottom-[35px] before:left-[2px] before:h-[120px] before:w-[90px] before:rounded-[7px] before:bg-theme-3 before:content-[''] max-md:before:left-[28px]"
      )}
    >
      <div className="relative z-1 my-[50px] inline-block size-20 overflow-hidden rounded-full border-5 border-white shadow-[0_10px_15px_0] shadow-black/6 max-sm:size-[60px]">
        <SiteImage src={src} alt={alt} className="block size-full object-cover" />
      </div>
    </div>
  )
}
