import { cn } from "@/lib/utils"
import { Icon } from "./icon"

type StarRatingProps = {
  /** Jumlah bintang menyala (0–5). */
  value: number
  max?: number
  className?: string
}

/** Bintang rating; bintang kosong berwarna putih seperti pada template. */
export function StarRating({ value, max = 5, className }: StarRatingProps) {
  return (
    <div
      role="img"
      aria-label={`Rating ${value} dari ${max}`}
      className={cn("flex items-center", className)}
    >
      {Array.from({ length: max }, (_, i) => (
        <Icon
          key={i}
          name="star"
          family="solid"
          className={i < value ? "text-rating" : "text-white"}
        />
      ))}
    </div>
  )
}
