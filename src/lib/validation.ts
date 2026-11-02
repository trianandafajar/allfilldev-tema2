/** Validasi sederhana untuk form sisi klien. Tidak menggantikan validasi di server. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^\+?[0-9\s-]{8,16}$/
const POSTAL_CODE_PATTERN = /^\d{5}$/

export const isEmail = (value: string) => EMAIL_PATTERN.test(value.trim())
export const isPhone = (value: string) => PHONE_PATTERN.test(value.trim())
export const isPostalCode = (value: string) => POSTAL_CODE_PATTERN.test(value.trim())

/** Kunci field → pesan kesalahan. Field yang valid tidak ada di objek. */
export type FieldErrors<Key extends string> = Partial<Record<Key, string>>

/** Mengambil nilai teks dari FormData sebagai string terpangkas; field kosong menjadi "". */
export function readText(data: FormData, name: string): string {
  const value = data.get(name)
  return typeof value === "string" ? value.trim() : ""
}
