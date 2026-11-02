import { Checkbox } from "@/components/ui/checkbox"
import type { ProductSize } from "@/types/product"
import { SidebarWidget } from "@/components/common/sidebar-widget"

type SizeFilterWidgetProps = {
  title: string
  sizes: readonly ProductSize[]
  labels: Record<ProductSize, string>
  selected: readonly ProductSize[]
}

/** Checkbox ukuran; nilai terpilih ikut terkirim sebagai `ukuran=<slug>` saat form dikirim. */
export function SizeFilterWidget({ title, sizes, labels, selected }: SizeFilterWidgetProps) {
  return (
    <SidebarWidget title={title}>
      <div>
        {sizes.map((size) => {
          const id = `ukuran-${size}`
          return (
            <div key={size} className="flex items-center not-last:mb-5">
              <Checkbox
                id={id}
                name="ukuran"
                value={size}
                defaultChecked={selected.includes(size)}
                className="mt-[4.5px] h-[19px] w-5 rounded-[4px] border-line bg-theme text-white"
              />
              <label htmlFor={id} className="ml-5 cursor-pointer font-semibold text-heading capitalize">
                {labels[size]}
              </label>
            </div>
          )
        })}
      </div>
    </SidebarWidget>
  )
}
