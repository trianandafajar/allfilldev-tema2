"use client"

import type { ReactNode } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useDragScroll } from "@/hooks/use-drag-scroll"

export type ProductInfoTab = {
  /** Nilai unik tab. */
  value: string
  label: string
  content: ReactNode
}

export type ProductInfoTabsProps = {
  ariaLabel: string
  tabs: ProductInfoTab[]
}

const triggerClass =
  "mr-5 -mb-px h-auto flex-none cursor-pointer rounded-[5px] border border-transparent bg-heading/[3.5%] px-[50px] py-[18px] text-center font-heading text-[20px] font-bold text-heading uppercase transition-all duration-300 ease-in-out hover:text-heading data-[state=active]:border-line data-[state=active]:border-b-white data-[state=active]:bg-theme-3 data-[state=active]:text-heading group-data-[variant=line]/tabs-list:data-[state=active]:bg-theme-3 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-0 max-lg:px-[45px] max-lg:py-[14px] max-lg:text-[18px] max-sm:mr-2 max-sm:px-5 max-sm:py-3 max-sm:text-base max-sm:whitespace-nowrap"

/** Tab informasi produk (Deskripsi, Informasi Tambahan, Ulasan) bergaya `.single-tab`. Isi tab dioper sebagai slot. */
export function ProductInfoTabs({ ariaLabel, tabs }: ProductInfoTabsProps) {
  const { ref, handlers } = useDragScroll<HTMLDivElement>()

  return (
    <Tabs defaultValue={tabs[0]?.value} className="block gap-0 pt-20 max-sm:pt-[50px]">
      <TabsList
        variant="line"
        ref={ref}
        {...handlers}
        aria-label={ariaLabel}
        className="mb-6 h-auto w-full flex-wrap justify-start gap-0 rounded-none border-b border-line-light p-0 pb-5 group-data-horizontal/tabs:h-auto max-sm:flex-nowrap max-sm:overflow-x-auto max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden max-sm:cursor-grab"
      >
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className={triggerClass}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="flex-none animate-in text-[18px] duration-150 ease-linear fade-in-0"
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}
