import { ReviewForm, type ReviewFormProps } from "./review-form"
import { ReviewItem, type ReviewItemProps } from "./review-item"

export type ProductReviewsProps = {
  reviews: ReviewItemProps[]
  /** Teks saat belum ada ulasan. */
  emptyLabel: string
  form: ReviewFormProps
}

/** Isi tab Ulasan: daftar ulasan lalu formulir menulis ulasan (`.review-items`). */
export function ProductReviews({ reviews, emptyLabel, form }: ProductReviewsProps) {
  return (
    <div>
      {reviews.length === 0 ? (
        <p>{emptyLabel}</p>
      ) : (
        reviews.map((review) => <ReviewItem key={`${review.author}-${review.date}`} {...review} />)
      )}
      <ReviewForm {...form} />
    </div>
  )
}
