import { StarRating } from "@/components/common/star-rating"

export type TestimonialQuoteProps = {
  name: string
  role: string
  quote: string
  rating: number
}

/** Isi satu testimonial: identitas klien, kutipan, dan bintang (padanan `.testimonial-content`). */
export function TestimonialQuote({ name, role, quote, rating }: TestimonialQuoteProps) {
  return (
    <div className="-mt-[7px]">
      <div className="mb-[30px]">
        <h4 className="mb-[5px] text-[29px] leading-[1.2] capitalize">{name}</h4>
        <h5 className="text-[20px] leading-[1.2] text-theme-2 capitalize">{role}</h5>
      </div>
      <h3 className="leading-[1.2]">{quote}</h3>
      <StarRating
        value={rating}
        className="mt-[15px] h-7 justify-center [&_i]:text-[14px] [&_i]:text-theme-3"
      />
    </div>
  )
}
