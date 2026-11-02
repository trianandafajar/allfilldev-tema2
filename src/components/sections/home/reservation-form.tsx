import { Icon } from "@/components/common/icon"
import { ThemeButton } from "@/components/common/theme-button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export type ReservationFormProps = {
  title: string
  guests: {
    /** Label aksesibilitas untuk pilihan jumlah orang. */
    label: string
    defaultValue: string
    options: readonly { value: string; label: string }[]
  }
  phone: { label: string; placeholder: string }
  date: { label: string }
  submit: { label: string; href: string }
}

const fieldClass =
  "h-auto rounded-[9px] border-line-light px-[25px] py-[18px] text-[18px] md:text-[18px] font-medium text-white capitalize [color-scheme:dark] placeholder:text-white focus-visible:border-white focus-visible:ring-0 max-sm:px-5 max-sm:py-3 max-sm:text-sm"

const triggerClass =
  "relative h-auto w-full justify-start rounded-[9px] border-line-light px-[25px] py-[18px] text-[18px] font-medium text-white capitalize data-placeholder:text-white focus-visible:border-white focus-visible:ring-0 data-[size=default]:h-auto max-sm:px-5 max-sm:py-3 [&>svg]:hidden after:absolute after:top-1/2 after:right-[23px] after:-mt-1.5 after:size-2.5 after:origin-[66%_66%] after:rotate-45 after:border-r after:border-b after:border-white after:transition-all after:duration-150 after:ease-in-out after:content-[''] data-[state=open]:after:-rotate-135"

const itemClass =
  "min-h-10 cursor-pointer rounded-none px-2.5 py-0 text-[18px] leading-10 font-normal text-theme uppercase focus:bg-transparent focus:text-theme not-data-[variant=destructive]:focus:**:text-theme data-[state=checked]:font-bold [&>span:first-child]:hidden"

/** Kartu formulir reservasi meja: jumlah orang, telepon, tanggal, dan tombol pesan. */
export function ReservationForm({
  title,
  guests,
  phone,
  date,
  submit,
}: ReservationFormProps) {
  return (
    <div className="relative rounded-t-[20px] bg-theme bg-[url('/images/shape/booking-shape.png')] bg-cover bg-center bg-no-repeat p-[55px] -mb-[120px] max-xl:-mb-[100px] max-lg:-mb-20 max-sm:px-10 max-sm:py-[50px]">
      <h4 className="mb-[30px] text-center text-[28px] leading-[1.2] text-white">
        {title}
      </h4>
      <div className="[&>*:not(:last-child)]:mb-[30px]">
        <div className="relative">
          <Select name="guests" defaultValue={guests.defaultValue}>
            <SelectTrigger aria-label={guests.label} className={triggerClass}>
              <SelectValue className="mr-3 text-[18px] font-medium text-white capitalize max-sm:text-[15px]" />
            </SelectTrigger>
            <SelectContent
              position="popper"
              sideOffset={10}
              className="w-(--radix-select-trigger-width) min-w-0 rounded-[5px] bg-surface shadow-none ring-0"
            >
              {guests.options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className={itemClass}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <Input
            type="tel"
            name="phone"
            aria-label={phone.label}
            placeholder={phone.placeholder}
            className={fieldClass}
          />
          <div className="pointer-events-none absolute top-[18px] right-[25px]">
            <Icon name="phone" family="solid" className="text-white max-sm:text-[15px]" />
          </div>
        </div>
        <div className="relative">
          <Input
            type="date"
            name="date"
            aria-label={date.label}
            className={fieldClass}
          />
        </div>
        <div className="relative">
          <ThemeButton
            href={submit.href}
            variant="theme-yellow"
            className="w-full max-sm:px-8 max-sm:py-[18px] max-sm:text-sm"
          >
            {submit.label}
          </ThemeButton>
        </div>
      </div>
    </div>
  )
}
