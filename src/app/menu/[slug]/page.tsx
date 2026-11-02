import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PageBanner } from "@/components/layout/page-banner"
import { ProductDetailsSection } from "@/components/product/product-details-section"
import { RelatedProductsSection } from "@/components/product/related-products-section"
import { CtaBannerSection } from "@/components/sections/shared/cta-banner-section"
import { JsonLd } from "@/components/seo/json-ld"
import { siteConfig } from "@/config/site"
import { ctaBannerContent } from "@/content/shared/cta-banner"
import {
  getProductDetailsProps,
  getProductJsonLd,
  getRelatedProductsProps,
} from "@/content/produk/detail-page"
import { products } from "@/content/toko/products"
import { getProduct, productDetailContent } from "@/content/toko/product-details"

type ProductPageProps = { params: Promise<{ slug: string }> }

/** Semua slug katalog dirender statis; slug tak dikenal menjawab 404 sebelum respons dikirim, jadi rute ini sengaja memblokir. */
export const instant = false

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}

  const canonical = `/menu/${product.slug}`
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: product.name,
      description: product.description,
      url: canonical,
      images: [{ url: `/images/${product.image}`, alt: product.imageAlt }],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  const { banner } = productDetailContent
  return (
    <>
      <PageBanner
        title={banner.title}
        crumbs={[
          { label: banner.homeLabel, href: "/" },
          { label: banner.shopLabel, href: "/toko" },
          { label: product.name },
        ]}
      />
      <ProductDetailsSection {...getProductDetailsProps(product)} />
      <RelatedProductsSection {...getRelatedProductsProps(product)} />
      <CtaBannerSection {...ctaBannerContent} />
      <JsonLd data={getProductJsonLd(product)} />
    </>
  )
}
