import Link from "next/link"
import { PageNav } from "@/components/common/page-nav"
import { ProductListItem } from "@/components/cards/product-list-item"
import { ProductToolbar } from "@/components/shop/product-toolbar"
import { ShopSidebar } from "@/components/shop/shop-sidebar"
import { productSizeLabels, products, shopCategories } from "@/content/toko/products"
import { shopPageContent } from "@/content/toko/shop-page"
import { formatRupiah } from "@/lib/format"
import { paginate } from "@/lib/paginate"
import {
  SHOP_PAGE_SIZE,
  SHOP_PATH,
  buildShopHref,
  filterProducts,
  parseShopParams,
  sortProducts,
  withFilterChange,
} from "@/lib/shop-query"

type ShopViewProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

const newArrivals = products.slice(0, 4)

/** Sidebar + hasil Toko. Membaca query string, jadi harus dirender di dalam `<Suspense>`. */
export async function ShopView({ searchParams }: ShopViewProps) {
  const { toolbar, list, pagination, sidebar } = shopPageContent
  const params = parseShopParams(
    await searchParams,
    shopCategories.map((category) => category.slug)
  )

  const filtered = sortProducts(filterProducts(products, params), params.urut)
  const result = paginate(filtered, params.halaman, SHOP_PAGE_SIZE)

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
      <div className="order-2 min-w-0 md:order-1 lg:col-span-4 xl:col-span-3">
        <ShopSidebar
          params={params}
          categories={shopCategories}
          newArrivals={newArrivals}
          content={sidebar}
          sizeLabels={productSizeLabels}
        />
      </div>
      <div className="order-1 min-w-0 md:order-2 lg:col-span-8 xl:col-span-9">
        <ProductToolbar
          filterLabel={toolbar.filterLabel}
          filterHref={toolbar.filterHref}
          showing={{
            prefix: toolbar.showing.prefix,
            range: result.total === 0 ? "0" : `${result.from}–${result.to}`,
            of: toolbar.showing.of,
            total: result.total,
            suffix: toolbar.showing.suffix,
          }}
          sortLabel={toolbar.sortLabel}
          sortAriaLabel={toolbar.sortAriaLabel}
          sortValue={params.urut}
          sortOptions={toolbar.sortOptions.map((option) => ({
            ...option,
            href: withFilterChange(params, { urut: option.value }),
          }))}
          gridViewLabel={toolbar.gridViewLabel}
          listViewLabel={toolbar.listViewLabel}
        />

        {result.items.length === 0 ? (
          <div className="mt-12 text-center">
            <p>{list.empty}</p>
            <Link
              href={SHOP_PATH}
              className="mt-4 inline-block font-bold text-theme underline"
            >
              {list.emptyReset}
            </Link>
          </div>
        ) : (
          <>
            <div className="md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:gap-x-6">
              {result.items.map((item) => (
                <ProductListItem
                  key={item.slug}
                  name={item.name}
                  href={`/menu/${item.slug}`}
                  image={item.listImage}
                  imageAlt={item.imageAlt}
                  description={item.description}
                  priceRange={`${formatRupiah(item.price)} – ${formatRupiah(item.maxPrice)}`}
                  discountLabel="-5%"
                  rating={item.rating}
                  orderLabel={list.orderLabel}
                />
              ))}
            </div>
            <PageNav
              page={result.page}
              pageCount={result.pageCount}
              hrefs={Array.from({ length: result.pageCount }, (_, index) =>
                buildShopHref(params, { halaman: index + 1 })
              )}
              label={pagination.label}
              previousLabel={pagination.previous}
              nextLabel={pagination.next}
            />
          </>
        )}
      </div>
    </div>
  )
}
