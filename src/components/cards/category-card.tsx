import Link from "next/link"
import { ShapeImage } from "@/components/common/shape-image"
import { SiteImage } from "@/components/common/site-image"

export type CategoryCardData = {
  name: string
  /** Mis. "5 produk". */
  count: string
  /** Path relatif terhadap `public/images`. */
  image: string
  imageAlt: string
  /** Tautan dari gambar ke daftar menu kategori. */
  href: string
  /** Tautan dari judul. */
  titleHref: string
}

/** Kartu kategori makanan; saat hover berubah kuning dengan dekorasi daun/burger (padanan `.catagory-product-card`). */
export function CategoryCard({
  name,
  count,
  image,
  imageAlt,
  href,
  titleHref,
}: CategoryCardData) {
  return (
    <div className="group/card relative mt-[30px] overflow-hidden rounded-[14px] bg-white bg-[url('/images/shape/catagory-card-shape.jpg')] bg-cover bg-center bg-no-repeat px-[30px] pt-5 pb-[50px] transition-all duration-300 ease-in-out before:invisible before:absolute before:top-0 before:left-0 before:z-9 before:h-full before:w-full before:rounded-[14px] before:bg-theme-3 before:bg-[url('/images/shape/catagory-card-shape.jpg')] before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:content-[''] after:invisible after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:rounded-[14px] after:bg-theme-3 after:opacity-0 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:bg-theme-3 hover:before:visible hover:before:-top-[25px] hover:before:opacity-100 hover:after:visible hover:after:-bottom-[25px] hover:after:z-8 hover:after:opacity-100">
      <h5 className="relative z-9 text-[19px] text-white">{count}</h5>
      <div className="relative z-9 h-[245px] text-center group-hover/card:overflow-hidden">
        <Link href={href}>
          <SiteImage src={image} alt={imageAlt} />
          <ShapeImage
            src="shape/decor-leaf.png"
            className="top-0 right-5 -z-1 invisible translate-x-[-40px] translate-y-[40px] opacity-0 transition-all delay-100 duration-350 ease-in-out group-hover/card:visible group-hover/card:-right-[15px] group-hover/card:translate-x-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 group-hover/card:max-md:right-[50px] group-hover/card:max-sm:right-[25px]"
          />
          <ShapeImage
            src="shape/decor-leaf-2.png"
            className="bottom-0 left-5 -z-1 invisible opacity-0 transition-all delay-100 duration-350 ease-[ease] group-hover/card:visible group-hover/card:-left-5! group-hover/card:opacity-100 max-md:left-[45px] max-sm:left-2.5"
          />
          <ShapeImage
            src="shape/burger-shape.png"
            className="top-[30px] left-0 -z-1 invisible opacity-0 transition-all duration-400 ease-in-out group-hover/card:visible group-hover/card:opacity-100"
          />
        </Link>
      </div>
      <div className="relative z-9 mt-2.5 pt-[25px] text-center before:absolute before:top-0 before:left-[40%] before:h-0.5 before:w-[53px] before:bg-theme-2 before:content-[''] group-hover/card:before:bg-white max-md:before:left-[44%] max-sm:pt-[15px] max-sm:before:left-[42%]">
        <div className="mx-auto w-[125px] text-center">
          <SiteImage src="shape/food-shape.svg" alt="" />
        </div>
        <h3 className="relative -mt-[60px] mb-[5px] text-[28px] transition-all duration-300 ease-in-out group-hover/card:invisible group-hover/card:-z-1 group-hover/card:opacity-0">
          <Link href={titleHref} className="group-hover/card:text-white">
            {name}
          </Link>
        </h3>
        <p className="relative z-9 text-[16px] font-semibold text-theme-2 uppercase transition-all duration-300 ease-in-out group-hover/card:invisible group-hover/card:-z-1 group-hover/card:opacity-0">
          {count}
        </p>
      </div>
    </div>
  )
}
