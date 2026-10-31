import { ShapeImage } from "@/components/common/shape-image"
import { SiteImage } from "@/components/common/site-image"

export type ComboShowcaseData = {
  /** Path gambar latar relatif terhadap `public/images`. */
  background: string
  /** Gambar teks dekoratif yang berayun di kiri atas. */
  textImage: string
  foodImage: string
  foodAlt: string
  /** Gambar lencana diskon yang berdenyut. */
  badgeImage: string
  /** Gambar sayuran dekoratif di kanan atas. */
  vegetableImage: string
}

/** Panel visual penawaran: latar foto dengan makanan besar dan hiasan beranimasi (`comboo-image`). */
export function ComboShowcase({
  background,
  textImage,
  foodImage,
  foodAlt,
  badgeImage,
  vegetableImage,
}: ComboShowcaseData) {
  return (
    <div
      style={{ backgroundImage: `url(/images/${background})` }}
      className="absolute right-0 bottom-0 h-[780px] w-[898px] bg-cover bg-center bg-no-repeat max-2xl:w-[630px] max-xl:left-0 max-xl:h-[410px] max-xl:w-[1180px] max-lg:w-[990px] max-md:h-[400px] max-md:w-[770px] max-sm:left-0"
    >
      <ShapeImage
        src={textImage}
        className="top-[15%] left-2.5 z-9 animate-[tpswing_4s_ease_forwards_infinite_alternate] max-2xl:top-[20%] max-xl:top-[15%] max-md:top-[3%] max-sm:hidden"
      />
      <div className="absolute top-1/4 -left-[12%] max-w-[1100px] max-2xl:top-[45%] max-2xl:-left-[10%] max-xl:top-1/4 max-xl:left-[20%] max-xl:max-w-[625px] max-lg:top-[40%] max-lg:left-[120px] max-lg:max-w-[500px] max-md:top-[35%] max-md:left-[50px] max-sm:top-[37%] max-sm:-left-[6%]">
        <SiteImage src={foodImage} alt={foodAlt} className="w-full" />
      </div>
      <ShapeImage
        src={badgeImage}
        className="top-[10%] left-[40%] animate-[scale-up-two_6s_linear_infinite] max-2xl:top-0 max-2xl:left-[30%] max-lg:top-[10%] max-lg:left-[40%] max-md:top-0 max-md:left-1/2 max-sm:left-[8%]"
      />
      <ShapeImage
        src={vegetableImage}
        className="top-[5%] right-[10%] animate-[tpswing_3s_forwards_infinite_alternate]"
      />
    </div>
  )
}
