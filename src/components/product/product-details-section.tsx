import { Container } from "@/components/common/container"
import { Section } from "@/components/common/section"
import { ProductDescription, type ProductDescriptionProps } from "./product-description"
import { ProductGallery, type ProductGalleryProps } from "./product-gallery"
import { ProductInfoTabs } from "./product-info-tabs"
import { ProductReviews, type ProductReviewsProps } from "./product-reviews"
import { ProductSpecsTable, type ProductSpecsTableProps } from "./product-specs-table"
import { ProductSummary, type ProductSummaryProps } from "./product-summary"

export type ProductDetailsSectionProps = {
  gallery: ProductGalleryProps
  summary: ProductSummaryProps
  info: {
    ariaLabel: string
    description: { label: string } & ProductDescriptionProps
    additional: { label: string } & ProductSpecsTableProps
    reviews: { label: string } & ProductReviewsProps
  }
}

/** Section detail produk: galeri (kiri), ringkasan (kanan), dan tab informasi di bawahnya. */
export function ProductDetailsSection({ gallery, summary, info }: ProductDetailsSectionProps) {
  const { description, additional, reviews } = info

  return (
    <Section clip={false}>
      <Container>
        <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-5">
            <ProductGallery {...gallery} />
          </div>
          <div className="mt-12 min-w-0 lg:col-span-7 lg:mt-0">
            <ProductSummary {...summary} />
          </div>
        </div>
        <ProductInfoTabs
          ariaLabel={info.ariaLabel}
          tabs={[
            {
              value: "description",
              label: description.label,
              content: <ProductDescription {...description} />,
            },
            {
              value: "additional",
              label: additional.label,
              content: <ProductSpecsTable rows={additional.rows} />,
            },
            {
              value: "reviews",
              label: reviews.label,
              content: <ProductReviews {...reviews} />,
            },
          ]}
        />
      </Container>
    </Section>
  )
}
