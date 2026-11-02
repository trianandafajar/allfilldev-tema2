import { Icon } from "@/components/common/icon"
import { SiteImage } from "@/components/common/site-image"
import { cn } from "@/lib/utils"

export type ReviewItemProps = {
  author: string
  /** Tanggal dan jam siap tampil. */
  date: string
  /** Jumlah bintang menyala (0-5). */
  rating: number
  ratingLabel: string
  text: string
  /** Path avatar relatif terhadap `public/images`. */
  avatar: string
}

const MAX_RATING = 5

/** Satu ulasan: avatar bulat dan kotak teks bertanda panah (`.admin-items`). */
export function ReviewItem({ author, date, rating, ratingLabel, text, avatar }: ReviewItemProps) {
  return (
    <article className="flex flex-wrap items-center pb-6 max-md:justify-center max-md:gap-[30px] md:flex-nowrap">
      <div className="mr-6 size-[100px] shrink-0">
        <SiteImage src={avatar} alt="" className="size-full rounded-full" />
      </div>
      <div className="relative border border-line p-6 before:absolute before:top-[40%] before:-left-4 before:size-[30px] before:rotate-45 before:border-b before:border-l before:border-line before:bg-white before:content-[''] max-md:w-full md:flex-1 max-sm:before:hidden">
        <div className="flex flex-wrap justify-between pb-1">
          <h5>
            {author}
            <span className="ml-[30px] text-[16px]">{date}</span>
          </h5>
          <span role="img" aria-label={ratingLabel}>
            {Array.from({ length: MAX_RATING }, (_, i) => (
              <Icon
                key={i}
                name="star"
                family="solid"
                className={cn("text-[16px]", i < rating ? "text-rating" : "text-line")}
              />
            ))}
          </span>
        </div>
        <p>{text}</p>
      </div>
    </article>
  )
}
