import { ShapeImage } from "@/components/common/shape-image"
import { SiteImage } from "@/components/common/site-image"

export type ComboShowcaseData = {
  background: string
  textImage: string
  foodImage: string
  foodAlt: string
  badgeImage: string
  vegetableImage: string
}

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
      className="absolute right-0 bottom-0 h-[780px] w-[min(898px,calc(50vw-6px))] bg-cover bg-center bg-no-repeat max-2xl:w-[630px] max-xl:left-0 max-xl:h-[410px] max-xl:w-[1180px] max-lg:w-[990px] max-md:h-[400px] max-md:w-[770px] max-sm:left-0"
    >
      <ShapeImage
        src={textImage}
        className="top-[15%] left-2.5 z-9 animate-[tpswing_4s_ease_forwards_infinite_alternate] max-2xl:top-[20%] max-xl:top-[15%] max-md:top-[3%] max-sm:hidden"
      />
      {/* Lebar eksplisit: lebar alami gambar menyusut jadi setengah di layar DPR > 1 (srcset 2x). */}
      <div className="absolute top-1/4 -left-[12%] w-[min(913px,calc((50vw-6px)*1.0167))] max-w-[1100px] max-2xl:w-[693px] 2xl:translate-y-[8%] max-2xl:top-[45%] max-2xl:-left-[10%] max-xl:top-1/4 max-xl:left-[20%] max-xl:max-w-[625px] max-lg:top-[40%] max-lg:left-[120px] max-lg:max-w-[500px] max-md:top-[35%] max-md:left-[50px] max-sm:top-[37%] max-sm:-left-[6%]">
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
