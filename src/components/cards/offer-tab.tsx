import { Reveal } from "@/components/common/reveal"
import { SiteImage } from "@/components/common/site-image"
import { TabsTrigger } from "@/components/ui/tabs"

export type OfferTabData = {
  /** Nilai unik tab, dipakai juga oleh panel isi. */
  value: string
  /** Path gambar relatif terhadap `public/images`. */
  image: string
  title: string
}

type OfferTabProps = OfferTabData & {
  /** Jeda animasi muncul dalam detik. */
  delay?: number
}

/** Tab penawaran: ikon + judul dalam kotak krem; kotak berubah kuning saat aktif (`food-comboo-list`). */
export function OfferTab({ value, image, title, delay }: OfferTabProps) {
  return (
    <Reveal delay={delay} className="mb-[25px] w-full max-w-[500px] last:-mb-px">
      <TabsTrigger
        value={value}
        className="group/offer block h-auto w-full flex-none cursor-pointer rounded-none border-0 bg-transparent p-0 text-center text-[18px] leading-[28px] font-normal whitespace-normal text-heading after:hidden hover:text-heading data-[state=active]:bg-transparent data-[state=active]:text-heading"
      >
        <span className="flex items-center gap-[30px] rounded-[5px] bg-surface px-[30px] py-[15px] max-[470px]:gap-[15px] max-[470px]:px-[15px] group-data-[state=active]/offer:bg-theme-3">
          <span>
            <SiteImage src={image} alt="" />
          </span>
          <span className="text-[18px] font-semibold text-heading uppercase">{title}</span>
        </span>
      </TabsTrigger>
    </Reveal>
  )
}
