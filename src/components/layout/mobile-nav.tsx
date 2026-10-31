"use client"

import type { ReactNode } from "react"
import { Dialog } from "radix-ui"
import { Icon } from "@/components/common/icon"
import {
  Sheet,
  SheetClose,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HamburgerIcon } from "./hamburger-icon"

type MobileNavProps = {
  title: string
  openLabel: string
  closeLabel: string
  /** Logo di kiri atas panel. */
  logo: ReactNode
  /** Isi panel di bawah baris logo (teks, galeri, menu, kontak, dll.). */
  children: ReactNode
}

/** Hamburger dan panel offcanvas dari kanan (Sheet). Overlay gelap, lebar 400px (300px di layar kecil). */
export function MobileNav({
  title,
  openLabel,
  closeLabel,
  logo,
  children,
}: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" aria-label={openLabel} className="block cursor-pointer">
          <HamburgerIcon />
        </button>
      </SheetTrigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-900 bg-black/75 duration-100 data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed top-0 right-0 z-999 h-full w-[400px] overflow-y-scroll overscroll-y-contain border-l-2 border-theme-2 bg-white outline-none [scrollbar-width:none] duration-450 ease-in-out data-closed:animate-out data-closed:slide-out-to-right-full data-open:animate-in data-open:slide-in-from-right-full max-[450px]:w-[300px] [&::-webkit-scrollbar]:hidden"
        >
          <SheetTitle className="sr-only">{title}</SheetTitle>
          <div className="relative h-full p-[30px] max-sm:p-5">
            <div className="mb-12 flex items-center justify-between">
              {logo}
              <SheetClose asChild>
                <button
                  type="button"
                  aria-label={closeLabel}
                  className="relative z-9 flex size-[45px] cursor-pointer items-center justify-center rounded-full bg-theme-2"
                >
                  <Icon name="times" family="solid" className="text-white" />
                </button>
              </SheetClose>
            </div>
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Sheet>
  )
}
