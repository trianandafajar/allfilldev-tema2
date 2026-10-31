import { ShapeImage } from "@/components/common/shape-image"
import { SiteImage } from "@/components/common/site-image"
import type { ImageAsset } from "@/types/image-asset"

export type PizzaBannerData = {
  /** Gambar latar, relatif terhadap `public/images`. */
  backgroundImage: string
  /** Tulisan besar di kiri (bagian dari gambar). */
  headline: ImageAsset
  /** Tulisan miring tipis di kanan atas (dekoratif); path relatif terhadap `public/images`. */
  accent: string
  /** Foto pizza di pojok kanan bawah; membesar saat hover. */
  image: ImageAsset
}

/** Banner pizza lebar (padanan `.pizza-banner-items`). */
export function PizzaBanner({
  backgroundImage,
  headline,
  accent,
  image,
}: PizzaBannerData) {
  return (
    <div
      className="group/pizza relative h-full w-full overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat px-[50px] py-[60px] max-2xl:px-[30px] max-xl:px-[50px] max-md:bg-[length:300%] max-md:px-[30px]"
      style={{ backgroundImage: `url(/images/${backgroundImage})` }}
    >
      <div className="relative z-9">
        <SiteImage src={headline.src} alt={headline.alt} />
      </div>
      <ShapeImage
        src={accent}
        className="top-[5px] right-[15%] max-md:top-[30px]"
      />
      <div className="absolute right-0 -bottom-10 z-99 transition-all duration-400 ease-in-out group-hover/pizza:scale-110 max-2xl:bottom-0 max-2xl:max-w-[300px] max-xl:-bottom-10 max-xl:max-w-none max-md:-bottom-2.5 max-md:w-[270px]">
        <SiteImage
          src={image.src}
          alt={image.alt}
          className="max-2xl:h-full max-2xl:w-full"
        />
      </div>
    </div>
  )
}
