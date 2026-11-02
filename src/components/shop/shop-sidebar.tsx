import Form from "next/form"
import type { shopPageContent } from "@/content/toko/shop-page"
import { newArrivalThumbs } from "@/content/toko/shop-sidebar"
import { formatRupiah } from "@/lib/format"
import {
  DEFAULT_SORT,
  SHOP_PATH,
  SHOP_PRICE_MAX,
  SHOP_PRICE_MIN,
  SHOP_PRICE_STEP,
  withFilterChange,
  type ShopParams,
} from "@/lib/shop-query"
import type { Product, ProductSize, ShopCategory } from "@/types/product"
import { CategoryWidget } from "./category-widget"
import { NewArrivalWidget } from "./new-arrival-widget"
import { PriceFilterWidget } from "./price-filter-widget"
import { SizeFilterWidget } from "./size-filter-widget"

type ShopSidebarContent = (typeof shopPageContent)["sidebar"]

type ShopSidebarProps = {
  params: ShopParams
  categories: readonly ShopCategory[]
  /** Produk terbaru; thumbnail dipasangkan berdasarkan indeks. */
  newArrivals: readonly Product[]
  content: ShopSidebarContent
  sizeLabels: Record<ProductSize, string>
}

/** Sidebar filter Toko. Satu form GET: urutan dan kategori dibawa lewat input tersembunyi, halaman selalu kembali ke 1. */
export function ShopSidebar({
  params,
  categories,
  newArrivals,
  content,
  sizeLabels,
}: ShopSidebarProps) {
  return (
    <Form action={SHOP_PATH}>
      {params.urut !== DEFAULT_SORT ? <input type="hidden" name="urut" value={params.urut} /> : null}
      {params.kategori ? <input type="hidden" name="kategori" value={params.kategori} /> : null}

      <CategoryWidget
        title={content.categoriesTitle}
        items={categories.map((category) => {
          const active = category.slug === params.kategori
          return {
            ...category,
            active,
            href: withFilterChange(params, { kategori: active ? null : category.slug }),
          }
        })}
      />

      <PriceFilterWidget
        key={params.harga ? params.harga.join("-") : "semua"}
        title={content.priceTitle}
        label={content.priceLabel}
        sliderLabel={content.priceSliderLabel}
        buttonLabel={content.filterButton}
        value={params.harga}
        min={SHOP_PRICE_MIN}
        max={SHOP_PRICE_MAX}
        step={SHOP_PRICE_STEP}
      />

      <SizeFilterWidget
        key={params.ukuran.join(",")}
        title={content.sizeTitle}
        sizes={Object.keys(sizeLabels) as ProductSize[]}
        labels={sizeLabels}
        selected={params.ukuran}
      />

      <NewArrivalWidget
        title={content.newArrivalTitle}
        items={newArrivals.map((product, index) => ({
          name: product.name,
          href: `/menu/${product.slug}`,
          thumb: newArrivalThumbs[index % newArrivalThumbs.length],
          rating: product.rating,
          price: formatRupiah(product.price),
          originalPrice: formatRupiah(product.originalPrice),
        }))}
      />
    </Form>
  )
}
