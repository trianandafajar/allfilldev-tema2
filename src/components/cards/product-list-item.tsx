import Link from "next/link"
import { Icon } from "@/components/common/icon"
import { SiteImage } from "@/components/common/site-image"
import { ThemeButton } from "@/components/common/theme-button"
import { cn } from "@/lib/utils"

export type ProductListItemProps = {
  name: string
  /** Tautan ke halaman detail produk. */
  href: string
  /** Path gambar relatif terhadap `public/images`. */
  image: string
  imageAlt: string
  description: string
  /** Rentang harga siap tampil, mis. "Rp 42.000–Rp 61.000". */
  priceRange: string
  /** Label diskon, mis. "-5%". */
  discountLabel: string
  /** Jumlah bintang menyala (0–5); sisanya tampil pucat. */
  rating: number
  orderLabel: string
}

const MAX_RATING = 5

/** Baris produk bergaya daftar: gambar di kiri, rincian dan tombol pesan di kanan (`.shop-list-items`). */
export function ProductListItem({
  name,
  href,
  image,
  imageAlt,
  description,
  priceRange,
  discountLabel,
  rating,
  orderLabel,
}: ProductListItemProps) {
  return (
    <div className="mt-[30px] flex items-center gap-5 rounded-[14px] bg-white p-10 max-lg:flex-wrap max-lg:justify-center">
      <div className="h-full max-lg:w-[400px] max-lg:text-center lg:max-w-[calc(100%-200px)] lg:min-w-0 lg:max-xl:w-[550px] xl:w-[340px]">
        <SiteImage
          src={image}
          alt={imageAlt}
          className="h-full max-w-full rounded-[18px] object-cover"
        />
      </div>
      {/* Basis besar meniru paragraf panjang pada template: kolom gambar menyusut sama di setiap baris. */}
      <div className="max-lg:text-center lg:min-w-0 lg:flex-[1_1_873px] xl:mr-[30px]">
        <div className="pb-6">
          <span className="mr-2.5 rounded-[3px] bg-theme-3 px-1.5 py-[5px] font-semibold text-heading">
            {discountLabel}
          </span>
          <span role="img" aria-label={`Rating ${rating} dari ${MAX_RATING}`}>
            {Array.from({ length: MAX_RATING }, (_, i) => (
              <Icon
                key={i}
                name="star"
                family="solid"
                className={cn(
                  "text-[16px]",
                  i < rating ? "text-theme-3" : "text-body-text opacity-30"
                )}
              />
            ))}
          </span>
        </div>
        <h3 className="mb-2.5 text-[28px]">
          <Link href={href} className="hover:text-theme">
            {name}
          </Link>
        </h3>
        <p>{description}</p>
        <h5 className="mt-[15px] text-[22px] text-theme-2">{priceRange}</h5>
        <div className="mt-[30px]">
          <ThemeButton
            href={href}
            icon="flaticon-delivery"
            className="px-[50px] py-3.5 max-lg:px-[50px] max-lg:py-3.5 max-md:px-[50px] max-md:py-3.5"
          >
            {orderLabel}
          </ThemeButton>
        </div>
      </div>
    </div>
  )
}
