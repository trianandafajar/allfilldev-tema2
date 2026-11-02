import Link from "next/link"
import { Button } from "@/components/ui/button"

type CartEmptyProps = {
  message: string
  action: { label: string; href: string }
}

/** Keadaan keranjang kosong: pesan dan tombol kembali ke toko. */
export function CartEmpty({ message, action }: CartEmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-[30px] text-center">
      <p className="text-[24px] font-semibold text-heading uppercase max-sm:text-[20px]">
        {message}
      </p>
      <Button asChild variant="theme" size="theme" className="rounded-none">
        <Link href={action.href}>{action.label}</Link>
      </Button>
    </div>
  )
}
