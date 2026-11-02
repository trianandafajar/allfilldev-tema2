export type PageResult<T> = {
  items: T[]
  page: number
  pageCount: number
  total: number
  from: number
  to: number
}

/** Memotong daftar menjadi satu halaman; nomor halaman di luar rentang dijepit. */
export function paginate<T>(items: readonly T[], page: number, pageSize: number): PageResult<T> {
  const total = items.length
  const pageCount = Math.max(1, Math.ceil(total / pageSize))
  const current = Math.min(Math.max(1, page), pageCount)
  const start = (current - 1) * pageSize
  const slice = items.slice(start, start + pageSize)
  return {
    items: slice,
    page: current,
    pageCount,
    total,
    from: total === 0 ? 0 : start + 1,
    to: start + slice.length,
  }
}
