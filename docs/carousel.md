# Carousel (Embla)

Slider di beranda memakai komponen shadcn `Carousel` (`src/components/ui/carousel.tsx`) di atas `embla-carousel-react`. Plugin tambahan: `embla-carousel-autoplay` dan `embla-carousel-fade`. Template asli memakai Swiper; Swiper **tidak** dipasang.

## Pemakaian

- `src/components/sections/home/autoplay-carousel.tsx`: pembungkus `Carousel` dengan loop, autoplay yang tidak berhenti saat disentuh (`stopOnInteraction: false`), dan opsi `fade`. Props: `delay` (ms), `duration`, `fade`.
- `src/components/sections/home/slider-array-buttons.tsx`: tombol panah prev/next; harus berada di dalam `<Carousel>` (memakai `useCarousel`).
- Dipakai oleh: hero (fade), kategori makanan, brand, dan dua slider testimoni yang saling disinkronkan lewat `setApi` + `scrollTo`.

## Memetakan opsi Swiper ke Embla

| Swiper | Embla |
| --- | --- |
| `loop: true` | `opts.loop: true` |
| `autoplay.delay` | `Autoplay({ delay })` |
| `speed` (ms) | `opts.duration` (satuan fisika scroll, **bukan** ms; ~25 ≈ 0,6 dtk, ~85 ≈ 2 dtk). Nilai di repo ini hasil perkiraan, sesuaikan dengan mata. |
| `effect: "fade"` | plugin `Fade()` |
| `slidesPerView` + `breakpoints` | lebar item lewat kelas responsif (`basis-1/2 lg:basis-1/3`, dst.) |
| `spaceBetween: 30` | `-ml-[30px]` di `CarouselContent` dan `pl-[30px]` di item |

## Keputusan dan hal yang perlu diketahui

- Breakpoint Tailwind di repo ini mengikuti Bootstrap (576/768/992/1200/1400), lihat `globals.css`. Jadi `lg:` = 992px; selisih 1px dibanding `max-width` Swiper (991) bisa muncul.
- `carousel.tsx` bawaan shadcn memanggil `setState` di dalam `useEffect`; aturan lint `react-hooks/set-state-in-effect` dimatikan di satu baris itu dengan komentar penjelasan. Periksa lagi bila komponen di-`add` ulang.
- Pagination fraction dan parallax hero di template asli tidak pernah tampil (selector menunjuk elemen yang tidak ada), jadi tidak dibuat.
- Hero memutar animasi masuk elemen setiap slide menjadi aktif (atribut `data-active`), meniru `data-animation` template.
