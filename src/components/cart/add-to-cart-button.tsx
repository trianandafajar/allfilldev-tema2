"use client"

import { useEffect, useRef, useState, type ComponentProps } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-provider"

type AddToCartButtonProps = Omit<ComponentProps<typeof Button>, "onClick" | "asChild"> & {
  slug: string
  quantity?: number
  /** Teks sementara setelah ditekan (mis. "Ditambahkan"); juga diumumkan ke pembaca layar. */
  addedLabel?: string
}

const FEEDBACK_MS = 1500

/** Tombol yang menambahkan produk ke keranjang (`useCart().add`). */
export function AddToCartButton({
  slug,
  quantity = 1,
  addedLabel,
  children,
  ...props
}: AddToCartButtonProps) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  function handleClick() {
    add(slug, quantity)
    if (!addedLabel) return
    setAdded(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setAdded(false), FEEDBACK_MS)
  }

  return (
    <>
      <Button type="button" onClick={handleClick} {...props}>
        {children}
      </Button>
      {addedLabel ? (
        <span role="status" className="sr-only">
          {added ? addedLabel : ""}
        </span>
      ) : null}
    </>
  )
}
