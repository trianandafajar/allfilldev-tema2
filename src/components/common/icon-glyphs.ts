/** Peta nama ikon → codepoint pada font Font Awesome 5 Pro / Brands dan Flaticon. */
export const iconGlyphs = {
  // Font Awesome (light / regular / solid)
  heart: "",
  search: "",
  plus: "",
  phone: "",
  times: "",
  star: "",
  truck: "",
  clock: "",
  envelope: "",
  "angle-down": "",
  "angle-right": "",
  "angle-up": "",
  "arrow-right": "",
  "arrow-alt-up": "",
  "long-arrow-left": "",
  "long-arrow-right": "",
  "map-marker-alt": "",
  "shopping-basket": "",
  "shopping-cart": "",
  // Font Awesome Brands
  "facebook-f": "",
  "linkedin-in": "",
  "pinterest-p": "",
  twitter: "",
  "vimeo-v": "",
  youtube: "",
  // Flaticon
  "flaticon-cooking": "",
  "flaticon-delivery": "",
  "flaticon-fast-delivery": "",
  "flaticon-phone-call-2": "",
  "flaticon-quality": "",
  "flaticon-reputation": "",
} as const

export type IconName = keyof typeof iconGlyphs
