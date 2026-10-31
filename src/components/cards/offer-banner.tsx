import { Fragment } from "react"
import { SiteImage } from "@/components/common/site-image"
import { ThemeButton } from "@/components/common/theme-button"
import { cn } from "@/lib/utils"
import type { ImageAsset } from "@/types/image-asset"

type OfferBannerVariant = "default" | "style-2"

export type OfferBannerData = {
  variant?: OfferBannerVariant
  /** Gambar latar, relatif terhadap `public/images`. */
  backgroundImage: string
  eyebrow: string
  /** Satu elemen per baris judul. */
  title: readonly string[]
  /** Paragraf pendukung (hanya variant `style-2`), satu elemen per baris. */
  description?: readonly string[]
  cta?: { label: string; href: string }
  /** Stiker diskon yang berdenyut (`scale-up-two`). */
  badge: ImageAsset
  /** Tulisan miring berayun di pojok atas (hanya variant `default`). */
  ornament?: ImageAsset
  /** Foto makanan utama di pojok kanan bawah. */
  mainImage: ImageAsset
}

const pulse = "animate-[scale-up-two_6s_linear_infinite]"

const variants = {
  default: {
    content:
      "p-[50px] max-xl:px-[50px] max-xl:py-[100px] max-md:px-[30px] max-md:py-[90px]",
    title: "text-[55px] max-sm:text-[42px]",
    badge: cn(
      "bottom-[15px] left-0 z-9 max-xl:bottom-0 max-xl:left-[190px] max-md:hidden",
      pulse
    ),
    mainImage:
      "-right-5 -bottom-[5px] transition-all duration-400 ease-in-out max-sm:w-[250px]",
    mainImageClass: "max-sm:w-full",
  },
  "style-2": {
    content: "px-[45px] py-[60px]",
    title: "mb-[5px] text-[55px] max-sm:text-[36px]",
    badge: cn(
      "top-[30%] left-[43%] max-2xl:top-[15%] max-2xl:left-[58%] max-xl:top-[30%] max-xl:left-[43%] max-md:top-[15%] max-md:left-[60%]",
      pulse
    ),
    mainImage:
      "-right-5 -bottom-2.5 transition-all duration-400 ease-in-out group-hover/offer:-right-[50px] max-2xl:w-[300px] max-xl:w-auto max-sm:right-0 max-sm:bottom-0 max-sm:w-[250px] max-sm:group-hover/offer:-right-[50px]",
    mainImageClass: "max-2xl:h-full max-2xl:w-full",
  },
} as const satisfies Record<
  OfferBannerVariant,
  {
    content: string
    title: string
    badge: string
    mainImage: string
    mainImageClass: string
  }
>

/** Banner penawaran dengan latar gambar (padanan `.single-offer-items`, variant `style-2` untuk `.style-2`). */
export function OfferBanner({
  variant = "default",
  backgroundImage,
  eyebrow,
  title,
  description,
  cta,
  badge,
  ornament,
  mainImage,
}: OfferBannerData) {
  const styles = variants[variant]

  return (
    <div
      className="group/offer relative h-full w-full overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/images/${backgroundImage})` }}
    >
      <div className={cn("relative z-99", styles.content)}>
        <h5 className="mb-[5px] font-bold text-theme-2">{eyebrow}</h5>
        <h3 className={cn("text-white", styles.title)}>
          {title.map((line, index) => (
            <Fragment key={line}>
              {index > 0 ? <br /> : null}
              {line}
            </Fragment>
          ))}
        </h3>
        {description ? (
          <p className="text-[16px] font-medium text-white">
            {description.map((line, index) => (
              <Fragment key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </Fragment>
            ))}
          </p>
        ) : null}
        {cta ? (
          <ThemeButton href={cta.href} icon="flaticon-delivery" className="mt-6">
            {cta.label}
          </ThemeButton>
        ) : null}
      </div>
      <div className={cn("absolute", styles.badge)}>
        <SiteImage src={badge.src} alt={badge.alt} />
      </div>
      {ornament ? (
        <div className="absolute top-0 right-[20%] z-9 animate-rounded max-sm:right-0">
          <SiteImage src={ornament.src} alt={ornament.alt} />
        </div>
      ) : null}
      <div className={cn("absolute", styles.mainImage)}>
        <SiteImage
          src={mainImage.src}
          alt={mainImage.alt}
          className={styles.mainImageClass}
        />
      </div>
    </div>
  )
}
