import type { ProductCardData } from "@/components/cards/product-card"
import type { ProductDetailsSectionProps } from "@/components/product/product-details-section"
import type { RelatedProductsSectionProps } from "@/components/product/related-products-section"
import { getProduct, getProductDetail, productDetailContent } from "@/content/toko/product-details"
import { formatRupiah } from "@/lib/format"
import { absoluteUrl } from "@/lib/seo"
import type { Product } from "@/types/product"

const RATING_SCALE = [1, 2, 3, 4, 5] as const

/** Indeks kartu terkait yang tampil menyala (seperti saat hover) pada template. */
const ACTIVE_RELATED_INDEX = 1

function toCardData(product: Product, index: number): ProductCardData {
  return {
    slug: product.slug,
    name: product.name,
    href: `/menu/${product.slug}`,
    image: product.image,
    imageAlt: product.imageAlt,
    price: formatRupiah(product.price),
    originalPrice: formatRupiah(product.originalPrice),
    discountLabel: productDetailContent.summary.discountLabel,
    rating: product.rating,
    active: index === ACTIVE_RELATED_INDEX,
  }
}

/** Props section detail produk, diturunkan dari satu produk katalog. */
export function getProductDetailsProps(product: Product): ProductDetailsSectionProps {
  const { gallery, summary, tabs, description, reviews } = productDetailContent
  const detail = getProductDetail(product)

  return {
    gallery: {
      images: detail.gallery.map((image, index) => ({
        src: image.src,
        alt: gallery.imageLabel(index + 1, product.name),
      })),
      labels: {
        zoom: gallery.zoomLabel,
        thumbnails: detail.gallery.map((_, index) => gallery.thumbnailLabel(index + 1)),
      },
    },
    summary: {
      slug: product.slug,
      name: product.name,
      description: product.description,
      discountLabel: summary.discountLabel,
      rating: product.rating,
      ratingLabel: reviews.ratingLabel(product.rating),
      reviewCountLabel: summary.reviewCount(detail.reviews.length),
      price: formatRupiah(product.price),
      originalPrice: formatRupiah(product.originalPrice),
      shipping: summary.shippingValue,
      sku: detail.sku,
      category: { label: detail.categoryLabel, href: detail.categoryHref },
      tags: detail.tags,
      labels: {
        quantity: summary.quantityLabel,
        quantityInput: summary.quantityInputLabel,
        decrease: summary.decreaseLabel,
        increase: summary.increaseLabel,
        addToCart: summary.addToCart,
        added: summary.addedLabel,
        favorite: summary.favoriteLabel,
        shipping: summary.shippingLabel,
        sku: summary.skuLabel,
        categories: summary.categoriesLabel,
        tags: summary.tagsLabel,
      },
    },
    info: {
      ariaLabel: tabs.ariaLabel,
      description: {
        label: tabs.description,
        heading: description.heading,
        paragraphs: description.paragraphs(product.name, product.description),
        moreHeading: description.moreHeading,
        details: [...description.details],
      },
      additional: { label: tabs.additional, rows: detail.specs },
      reviews: {
        label: tabs.reviews(detail.reviews.length),
        emptyLabel: reviews.emptyLabel,
        reviews: detail.reviews.map((review) => ({
          author: review.author,
          date: review.date,
          rating: review.rating,
          ratingLabel: reviews.ratingLabel(review.rating),
          text: review.text,
          avatar: review.avatar,
        })),
        form: {
          title: reviews.formTitle,
          ratePrompt: reviews.ratePrompt,
          starLabels: RATING_SCALE.map((value) => reviews.ratingLabel(value)),
          fields: {
            name: { label: reviews.nameLabel, placeholder: reviews.namePlaceholder },
            email: { label: reviews.emailLabel, placeholder: reviews.emailPlaceholder },
            message: { label: reviews.messageLabel, placeholder: reviews.messagePlaceholder },
          },
          submit: reviews.submit,
        },
      },
    },
  }
}

/** Props section "Produk Terkait" untuk satu produk katalog. */
export function getRelatedProductsProps(product: Product): RelatedProductsSectionProps {
  const { related, summary } = productDetailContent
  const items = getProductDetail(product)
    .related.map((slug) => getProduct(slug))
    .filter((item): item is Product => item !== undefined)

  return {
    eyebrow: related.eyebrow,
    title: related.title,
    products: items.map(toCardData),
    addToCartLabel: summary.addToCart,
    addedLabel: summary.addedLabel,
    favoriteLabel: summary.favoriteLabel,
  }
}

/** Data terstruktur schema.org `Product`. Tanpa `aggregateRating`/`review` karena ulasan hanya contoh. */
export function getProductJsonLd(product: Product): Record<string, unknown> {
  const path = `/menu/${product.slug}`
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: absoluteUrl(`/images/${product.image}`),
    sku: getProductDetail(product).sku,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(path),
    },
  }
}
