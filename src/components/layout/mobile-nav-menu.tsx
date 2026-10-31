"use client"

import Link from "next/link"
import { Accordion as AccordionPrimitive } from "radix-ui"
import { Icon } from "@/components/common/icon"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion"
import { SheetClose } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import type { NavItem } from "./types"

type MobileNavMenuProps = {
  items: readonly NavItem[]
  ariaLabel: string
  /** Awalan label tombol buka submenu, mis. "Buka submenu" + nama item. */
  expandLabel: string
}

type MobileNavListProps = {
  items: readonly NavItem[]
  depth: number
  expandLabel: string
}

const depthPadding = ["px-0", "px-[10%]", "px-[15%]", "px-[20%]"] as const

function MobileNavList({ items, depth, expandLabel }: MobileNavListProps) {
  return (
    <Accordion type="single" collapsible asChild className="block">
      <ul>
        {items.map((item, index) => (
          <AccordionItem
            key={`${item.href}-${item.label}`}
            value={`${item.href}-${item.label}`}
            asChild
            className="not-last:border-b-0"
          >
            <li className="relative w-full">
              <SheetClose asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "block w-full border-t border-line py-2.5 text-left text-base leading-normal font-semibold text-heading uppercase hover:text-theme-2",
                    depthPadding[Math.min(depth, depthPadding.length - 1)],
                    depth === 0 && index === 0 && "border-t-0"
                  )}
                >
                  {item.label}
                </Link>
              </SheetClose>
              {item.children ? (
                <>
                  <AccordionPrimitive.Header asChild>
                    <div className="absolute top-0 right-0 z-2">
                      <AccordionPrimitive.Trigger
                        aria-label={`${expandLabel} ${item.label}`}
                        className="mt-[5px] flex h-8 w-[26px] cursor-pointer items-start justify-center pt-[3px] text-sm leading-normal font-bold text-heading hover:text-theme-2"
                      >
                        <Icon name="plus" />
                      </AccordionPrimitive.Trigger>
                    </div>
                  </AccordionPrimitive.Header>
                  <AccordionContent className="pb-0 [&_a]:no-underline [&_a]:hover:text-theme-2">
                    <MobileNavList
                      items={item.children}
                      depth={depth + 1}
                      expandLabel={expandLabel}
                    />
                  </AccordionContent>
                </>
              ) : null}
            </li>
          </AccordionItem>
        ))}
      </ul>
    </Accordion>
  )
}

/** Menu bertingkat untuk offcanvas (pengganti meanmenu): akordeon dengan tombol plus. Tampil di bawah `lg`. */
export function MobileNavMenu({ items, ariaLabel, expandLabel }: MobileNavMenuProps) {
  return (
    <nav aria-label={ariaLabel} className="mb-4 block overflow-hidden lg:hidden">
      <MobileNavList items={items} depth={0} expandLabel={expandLabel} />
    </nav>
  )
}
