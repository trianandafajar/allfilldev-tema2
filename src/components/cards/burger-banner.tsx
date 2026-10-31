import Link from "next/link"
import { ShapeImage } from "@/components/common/shape-image"
import { SiteImage } from "@/components/common/site-image"
import { ThemeButton } from "@/components/common/theme-button"
import type { HighlightedTitle } from "@/types/highlighted-title"
import type { ImageAsset } from "@/types/image-asset"

export type BurgerBannerData = {
  /** Gambar latar, relatif terhadap `public/images`. */
  backgroundImage: string
  /** Teks kecil di atas judul (h3). */
  kicker: string
  /** Judul besar (h2). */
  title: string
  /** Nama produk (h4) dengan satu kata beraksen kuning. */
  product: HighlightedTitle
  productHref: string
  cta: { label: string; href: string }
  /** Foto burger di pojok kanan bawah; membesar saat hover. */
  image: ImageAsset
  /** Tulisan tipis di kanan atas (dekoratif); path relatif terhadap `public/images`. */
  textShape: string
  /** Tulisan miring berayun (dekoratif); path relatif terhadap `public/images`. */
  ornament: string
}

/** Banner "spesial hari ini" (padanan `.burger-banner-items`). */
export function BurgerBanner({
  backgroundImage,
  kicker,
  title,
  product,
  productHref,
  cta,
  image,
  textShape,
  ornament,
}: BurgerBannerData) {
  return (
    <div
      className="group/burger relative h-full w-full rounded-[20px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/images/${backgroundImage})` }}
    >
      <div className="relative z-9 max-w-[300px] px-10 py-[100px] text-center max-md:w-[280px] max-md:px-[30px] max-sm:w-[250px] max-sm:px-5 max-sm:py-[70px]">
        <h3 className="text-white">{kicker}</h3>
        <h2 className="text-white">{title}</h2>
        <h4 className="mt-2.5 text-[40px] text-white max-sm:text-[36px]">
          <Link href={productHref} className="text-white">
            {product.before}{" "}
            <span className="text-theme-3">{product.highlight}</span>{" "}
            {product.after}
          </Link>
        </h4>
        <ThemeButton href={cta.href} icon="flaticon-delivery" className="mt-6">
          {cta.label}
        </ThemeButton>
      </div>
      <div className="absolute right-0 bottom-0 transition-all duration-400 ease-in-out group-hover/burger:scale-110 max-2xl:-bottom-3 max-2xl:w-[350px] max-xl:right-[50px] max-xl:w-[300px] max-md:right-0 max-md:bottom-0 max-md:w-[250px] max-[500px]:w-[180px]">
        <SiteImage
          src={image.src}
          alt={image.alt}
          className="max-2xl:h-full max-2xl:w-full"
        />
      </div>
      <ShapeImage
        src={textShape}
        className="top-10 right-[65px] max-xl:top-[25px] max-sm:hidden"
      />
      <ShapeImage
        src={ornament}
        className="top-[20%] left-[38%] animate-[rounded_5s_linear_infinite] max-xl:left-[30%] max-md:left-[35%] max-sm:hidden"
      />
    </div>
  )
}
