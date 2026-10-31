const barClass =
  "absolute inline-block h-0.5 overflow-hidden bg-heading transition-all duration-300"

/** Tiga garis hamburger (kecil-besar-kecil) seperti pada template. Dekoratif. */
export function HamburgerIcon() {
  return (
    <span aria-hidden="true" className="relative block h-[18px] w-[31px]">
      <span className={`${barClass} top-0 left-4 w-[15px]`} />
      <span className={`${barClass} top-[44%] left-0 w-[30px]`} />
      <span className={`${barClass} bottom-0 left-0 w-[15px]`} />
    </span>
  )
}
