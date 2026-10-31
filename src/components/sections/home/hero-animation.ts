/**
 * Animasi masuk elemen hero. Template asli memicu ulang animasi setiap slide aktif;
 * string `"fadeInUp 1 2.1s"` membuat durasi = nilai delay dan tanpa jeda, jadi angka
 * di bawah adalah durasi (detik). Hanya aktif saat slide induk (`group/slide`) bertanda
 * `data-active="true"`, sehingga animasi diputar ulang setiap slide menjadi aktif.
 */
export const fadeInUpClass = {
  0.5: "group-data-[active=true]/slide:animate-[fade-in-up_0.5s_1] group-data-[active=true]/slide:motion-reduce:animate-none",
  0.9: "group-data-[active=true]/slide:animate-[fade-in-up_0.9s_1] group-data-[active=true]/slide:motion-reduce:animate-none",
  1.4: "group-data-[active=true]/slide:animate-[fade-in-up_1.4s_1] group-data-[active=true]/slide:motion-reduce:animate-none",
  2.1: "group-data-[active=true]/slide:animate-[fade-in-up_2.1s_1] group-data-[active=true]/slide:motion-reduce:animate-none",
  2.4: "group-data-[active=true]/slide:animate-[fade-in-up_2.4s_1] group-data-[active=true]/slide:motion-reduce:animate-none",
  2.7: "group-data-[active=true]/slide:animate-[fade-in-up_2.7s_1] group-data-[active=true]/slide:motion-reduce:animate-none",
  3: "group-data-[active=true]/slide:animate-[fade-in-up_3s_1] group-data-[active=true]/slide:motion-reduce:animate-none",
} as const

export const fadeInRightClass = {
  2.5: "group-data-[active=true]/slide:animate-[fade-in-right_2.5s_1] group-data-[active=true]/slide:motion-reduce:animate-none",
} as const

export type FadeInUpDuration = keyof typeof fadeInUpClass
