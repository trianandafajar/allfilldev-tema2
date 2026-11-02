"use client"

import Link from "next/link"
import { useState } from "react"
import { AddToCartButton } from "@/components/cart/add-to-cart-button"
import { Icon } from "@/components/common/icon"
import { CART_MAX_QUANTITY } from "@/lib/cart"
import { cn } from "@/lib/utils"
import { ProductMetaRow } from "./product-meta-row"
import { QuantityStepper } from "./quantity-stepper"

export type ProductSummaryProps = {
  /** Slug produk di katalog; dipakai untuk menambah ke keranjang. */
  slug: string
  name: string
  description: string
  /** Label diskon, mis. "-5%". */
  discountLabel: string
  /** Jumlah bintang menyala (0-5). */
  rating: number
  ratingLabel: string
  /** Teks jumlah ulasan siap tampil, mis. "( 3 Ulasan )". */
  reviewCountLabel: string
  /** Harga setelah diskon, siap tampil. */
  price: string
  /** Harga normal sebelum diskon, siap tampil. */
  originalPrice: string
  /** Biaya pengiriman siap tampil. */
  shipping: string
  sku: string
  category: { label: string; href: string }
  tags: string[]
  labels: {
    quantity: string
    quantityInput: string
    decrease: string
    increase: string
    addToCart: string
    added: string
    favorite: string
    shipping: string
    sku: string
    categories: string
    tags: string
  }
}

const MAX_RATING = 5

/** Kolom kanan halaman detail: harga, jumlah, tombol keranjang, dan rincian singkat (`.product-details-content`). */
export function ProductSummary({
  slug,
  name,
  description,
  discountLabel,
  rating,
  ratingLabel,
  reviewCountLabel,
  price,
  originalPrice,
  shipping,
  sku,
  category,
  tags,
  labels,
}: ProductSummaryProps) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="ml-[60px] max-2xl:ml-[30px] max-lg:ml-0">
      <div className="pb-3">
        <span className="mr-2.5 rounded-[3px] bg-theme-3 px-1.5 py-[5px] font-semibold text-heading">
          {discountLabel}
        </span>
        <span role="img" aria-label={ratingLabel}>
          {Array.from({ length: MAX_RATING }, (_, i) => (
            <Icon
              key={i}
              name="star"
              family="solid"
              className={cn(
                "text-[16px]",
                i < rating ? "text-theme-3" : "text-body-text opacity-30"
              )}
            />
          ))}
        </span>
        <span className="ml-1.5 text-[16px] font-semibold text-heading">{reviewCountLabel}</span>
      </div>

      <h3 className="pb-3">{name}</h3>
      <p className="mb-6">{description}</p>

      <div className="flex items-center gap-5">
        <span className="text-[28px] font-semibold text-heading">{price}</span>
        <del className="text-[20px] font-medium text-theme-2">{originalPrice}</del>
      </div>

      <div className="my-[30px]">
        <div className="mb-10 flex items-center gap-5">
          <h5 className="font-bold">{labels.quantity}</h5>
          <QuantityStepper
            value={quantity}
            onChange={setQuantity}
            max={CART_MAX_QUANTITY}
            labels={{
              decrease: labels.decrease,
              increase: labels.increase,
              input: labels.quantityInput,
            }}
          />
        </div>
        <div className="flex items-center justify-between gap-[30px]">
          <AddToCartButton
            slug={slug}
            quantity={quantity}
            addedLabel={labels.added}
            variant="theme"
            size="theme"
            className="w-[88%] min-w-0 shrink rounded-[30px] whitespace-normal"
          >
            <Icon
              name="flaticon-shopping-cart"
              className="mr-2.5 text-[24px] max-lg:text-[22px] max-md:text-[20px]"
            />
            {labels.addToCart}
          </AddToCartButton>
          <button
            type="button"
            aria-label={labels.favorite}
            className="group/star inline-block size-[60px] shrink-0 cursor-pointer rounded-[36px] bg-white text-center text-[20px] leading-[60px] shadow-[0_4px_12px_0] shadow-black/8 transition-all duration-400 ease-in-out hover:bg-theme"
          >
            <Icon
              name="star"
              family="light"
              className="text-heading transition-all duration-400 ease-in-out group-hover/star:text-white"
            />
          </button>
        </div>
      </div>

      <h6 className="mb-5 font-medium">
        {labels.shipping} <span className="font-semibold">{shipping}</span>
      </h6>
      <ProductMetaRow label={labels.sku}>{sku}</ProductMetaRow>
      <ProductMetaRow label={labels.categories}>
        <Link href={category.href} className="hover:text-theme">
          {category.label}
        </Link>
      </ProductMetaRow>
      <ProductMetaRow label={labels.tags}>{tags.join(", ")}</ProductMetaRow>
    </div>
  )
}
