"use client"

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react"
import { products } from "@/content/toko/products"
import {
  CART_STORAGE_KEY,
  EMPTY_CART,
  addLine,
  cartTotals,
  parseCart,
  removeLine,
  resolveCart,
  setLineQuantity,
  type CartItem,
  type CartLine,
  type CartTotals,
} from "@/lib/cart"

type CartContextValue = {
  lines: readonly CartLine[]
  /** Baris keranjang beserta data produknya. */
  items: readonly CartItem[]
  totals: CartTotals
  add: (slug: string, quantity?: number) => void
  setQuantity: (slug: string, quantity: number) => void
  remove: (slug: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

/*
 * Penyimpanan eksternal: localStorage + event "storage" (antar tab) + event lokal (tab ini).
 * `useSyncExternalStore` memberi snapshot server berupa keranjang kosong, jadi tidak ada
 * hydration mismatch; nilai asli muncul setelah hidrasi.
 */
const listeners = new Set<() => void>()
let cachedRaw: string | null = null
let cachedLines: readonly CartLine[] = EMPTY_CART

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(CART_STORAGE_KEY)
  } catch {
    return null
  }
}

function getSnapshot(): readonly CartLine[] {
  const raw = readRaw()
  if (raw !== cachedRaw) {
    cachedRaw = raw
    cachedLines = parseCart(raw, products)
  }
  return cachedLines
}

function getServerSnapshot(): readonly CartLine[] {
  return EMPTY_CART
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  const onStorage = (event: StorageEvent) => {
    if (event.key === CART_STORAGE_KEY || event.key === null) listener()
  }
  window.addEventListener("storage", onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener("storage", onStorage)
  }
}

function write(lines: readonly CartLine[]) {
  try {
    if (lines.length === 0) window.localStorage.removeItem(CART_STORAGE_KEY)
    else window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines))
  } catch {
    /* Penyimpanan diblokir (mode privat); keranjang tidak bertahan, tapi tidak error. */
  }
  listeners.forEach((listener) => listener())
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const lines = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const add = useCallback((slug: string, quantity = 1) => {
    write(addLine(getSnapshot(), slug, quantity))
  }, [])
  const setQuantity = useCallback((slug: string, quantity: number) => {
    write(setLineQuantity(getSnapshot(), slug, quantity))
  }, [])
  const remove = useCallback((slug: string) => {
    write(removeLine(getSnapshot(), slug))
  }, [])
  const clear = useCallback(() => write([]), [])

  const value = useMemo<CartContextValue>(() => {
    const items = resolveCart(lines, products)
    return { lines, items, totals: cartTotals(items), add, setQuantity, remove, clear }
  }, [lines, add, setQuantity, remove, clear])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart harus dipakai di dalam <CartProvider>")
  return context
}
