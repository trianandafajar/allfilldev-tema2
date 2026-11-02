import { Icon } from "@/components/common/icon"

export type ProductDescriptionProps = {
  heading: string
  paragraphs: string[]
  moreHeading: string
  /** Poin rincian; dibagi dua kolom. */
  details: string[]
}

/** Isi tab Deskripsi: judul, paragraf, dan daftar rincian dua kolom (`.description-items`). */
export function ProductDescription({
  heading,
  paragraphs,
  moreHeading,
  details,
}: ProductDescriptionProps) {
  const half = Math.ceil(details.length / 2)
  const columns = [details.slice(0, half), details.slice(half)]

  return (
    <div className="mr-[50px] max-2xl:mr-[30px] max-lg:mr-0">
      <h3 className="mb-[15px] text-[28px]">{heading}</h3>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="not-first:mt-4">
          {paragraph}
        </p>
      ))}
      <h3 className="mt-12 mb-0 text-[28px]">{moreHeading}</h3>
      <div className="mt-5 flex gap-[200px] max-sm:flex-wrap max-sm:gap-[30px]">
        {columns.map((items, index) => (
          <ul key={index}>
            {items.map((item) => (
              <li key={item} className="text-[16px] font-medium not-last:mb-[15px]">
                <Icon name="check" family="light" className="mr-2.5 font-semibold text-theme" />
                <span className="text-[20px] font-normal text-body-text">{item}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
