const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
})

export function formatRupiah(value: number): string {
  return rupiah.format(value).replace(/\s/g, "")
}

const longDate = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
})

/** Format tanggal panjang bahasa Indonesia dari string ISO (`2026-03-12` jadi "12 Maret 2026"). */
export function formatDate(iso: string): string {
  return longDate.format(new Date(iso))
}
