import Link from "next/link"
import { Icon } from "@/components/common/icon"
import { SiteImage } from "@/components/common/site-image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type ProductCardData = {
  name: string
  /** Tautan ke halaman detail produk. */
  href: string
  /** Path gambar relatif terhadap `public/images`. */
  image: string
  imageAlt: string
  /** Harga setelah diskon (tampil merah). */
  price: string
  /** Harga normal sebelum diskon (tampil abu-abu, dicoret). */
  originalPrice: string
  /** Label diskon, mis. "-5%". */
  discountLabel: string
  /** Jumlah bintang menyala (0–5). */
  rating: number
  /** Tampilkan kartu dalam keadaan menyala seperti saat hover. */
  active?: boolean
}

type ProductCardProps = ProductCardData & {
  cartHref: string
  addToCartLabel: string
  favoriteLabel: string
  className?: string
}

const MAX_RATING = 5

/** Kartu produk dengan latar yang melebar dan tombol keranjang yang muncul saat hover (`catagory-product-card-2`). */
export function ProductCard({
  name,
  href,
  image,
  imageAlt,
  price,
  originalPrice,
  discountLabel,
  rating,
  active,
  cartHref,
  addToCartLabel,
  favoriteLabel,
  className,
}: ProductCardProps) {
  return (
    <div
      data-active={active ? "" : undefined}
      className={cn(
        "group/card relative mt-[30px] px-[30px] py-10 text-center max-sm:p-[30px]",
        "before:absolute before:top-0 before:left-0 before:h-[65%] before:w-full before:rounded-[14px] before:bg-white before:transition-all before:duration-350 before:ease-in-out before:content-[''] max-sm:before:h-[60%]",
        "hover:before:h-full hover:before:bg-theme-3 hover:before:bg-[url('/images/shape/catagory-card-shape.jpg')]",
        "data-active:before:h-full data-active:before:bg-theme-3 data-active:before:bg-[url('/images/shape/catagory-card-shape.jpg')]",
        className
      )}
    >
      <Link
        href={cartHref}
        aria-label={favoriteLabel}
        className="group/heart absolute top-[15px] left-[15px] z-9 block size-10 cursor-pointer rounded-[5px] bg-heading text-center leading-10 transition-all duration-400 ease-in-out hover:bg-white group-data-active/card:bg-white"
      >
        <Icon
          name="heart"
          className="text-white transition-all duration-400 ease-in-out group-hover/heart:text-theme-3 group-data-active/card:text-theme-3"
        />
      </Link>

      <div className="relative z-1 h-[245px]">
        <SiteImage src={image} alt={imageAlt} className="object-contain" />
      </div>

      <div className="relative z-9 mt-[30px] max-sm:mt-0">
        <div className="mb-5 opacity-0 transition-all duration-400 ease-in-out group-hover/card:opacity-100 group-data-active/card:opacity-100 focus-within:opacity-100">
          <Button asChild variant="theme-dark" size="theme-dark" className="border-0">
            <Link href={cartHref}>
              <Icon name="shopping-basket" className="mr-2.5 text-[17px]" />
              {addToCartLabel}
            </Link>
          </Button>
        </div>

        <div className="mb-2.5 flex items-center justify-center gap-2.5">
          <p className="rounded-[3px] bg-theme-3 px-1.5 py-1 text-base font-semibold text-heading transition-all duration-400 ease-in-out group-hover/card:bg-white group-data-active/card:bg-white">
            {discountLabel}
          </p>
          <h6 className="text-theme-2">{price}</h6>
          <span className="text-base font-semibold text-body-text line-through transition-all duration-400 ease-in-out group-hover/card:text-white group-data-active/card:text-white">
            {originalPrice}
          </span>
        </div>

        <h4>
          <Link href={href} className="hover:text-white">
            {name}
          </Link>
        </h4>

        <div
          role="img"
          aria-label={`Rating ${rating} dari ${MAX_RATING}`}
          className="mt-[5px] flex h-7 items-center justify-center"
        >
          {Array.from({ length: MAX_RATING }, (_, i) => (
            <Icon
              key={i}
              name="star"
              family="solid"
              className={cn(
                "text-[14px]",
                i < rating
                  ? "text-theme-3 transition-all duration-400 ease-in-out group-hover/card:text-white group-data-active/card:text-white"
                  : "text-white"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
