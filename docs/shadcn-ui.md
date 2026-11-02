# shadcn/ui

Terpasang pada 2026-10-29 lewat `bunx shadcn@latest init -t next -b radix -d -y`.

## Konfigurasi

Sumber kebenaran ada di `components.json`.

| Item | Nilai |
| --- | --- |
| Style | `radix-nova` |
| Base library | Radix (paket `radix-ui`) |
| Base color | `neutral` |
| CSS variables | ya, di `src/app/globals.css` |
| Icon | `lucide-react` |
| RSC | ya |
| Tailwind config | kosong (Tailwind v4, token lewat CSS) |

Alias:

| Alias | Lokasi |
| --- | --- |
| `@/components` | `src/components/` |
| `@/components/ui` | `src/components/ui/` (komponen shadcn) |
| `@/lib/utils` | `src/lib/utils.ts` (`cn`) |
| `@/hooks` | `src/hooks/` |

## Menambah komponen

```bash
bunx shadcn@latest add card
bunx shadcn@latest add dialog input label
```

File masuk ke `src/components/ui/` dan **menjadi milik repo ini**: boleh diedit. Jangan menimpa komponen yang sudah dimodifikasi tanpa `git diff` dulu (`add` akan menanyakan sebelum menimpa; jangan pakai `--overwrite` sembarangan).

Jika sebuah komponen shadcn dimodifikasi dari aslinya, catat perubahannya di bagian "Keputusan dan hal yang perlu diketahui" di bawah.

## Mengubah tema

Seluruh warna dan radius ada di `src/app/globals.css`:

- `:root` untuk mode terang, `.dark` untuk mode gelap (format `oklch`).
- `--radius` mengatur skala radius seluruh komponen.
- `--primary` adalah warna brand utama. Saat ini masih netral bawaan shadcn dan **belum** warna brand Jasalocal.

Komponen hanya memakai utility token (`bg-primary`, `text-muted-foreground`, `border-border`). Jangan menulis hex atau palet Tailwind mentah (`zinc-500`) di komponen.

## Keputusan dan hal yang perlu diketahui

- **Radix, bukan Base UI.** CLI menawarkan `radix`, `base`, `aria`. Dipilih Radix karena paling umum dan dokumentasinya paling banyak. Mengganti base di kemudian hari berarti meng-install ulang semua komponen.
- **`cn` dari paket `cn`**, bukan `clsx` + `tailwind-merge`. Ini bawaan CLI saat ini (`src/lib/utils.ts` hanya `export { cn } from "cn"`). Paket tersebut dari org `shadcn-ui` di GitHub. Impor tetap lewat `@/lib/utils`, jadi bisa diganti tanpa menyentuh komponen.
- **Dark mode berbasis class `.dark`.** Boilerplate Next sebelumnya memakai `prefers-color-scheme`; itu dihapus oleh CLI. Saat ini tidak ada toggle dan class `.dark` tidak dipasang di mana pun, jadi tampilan selalu terang. Untuk mengaktifkan, pasang provider tema (mis. `next-themes`) atau pasang class `dark` sendiri. Belum diputuskan.
- **Perbaikan font di `globals.css`.** CLI menulis `--font-sans: var(--font-sans)` (merujuk dirinya sendiri, font tidak akan termuat). Sekarang `--font-sans` dan `--font-heading` memakai `var(--font-barlow-condensed)` (Barlow Condensed via `next/font`, didefinisikan di `src/app/layout.tsx`). Jika menjalankan `shadcn init` ulang atau `--reinstall`, periksa baris ini lagi.
- **Dependency yang ikut terpasang**: `radix-ui`, `class-variance-authority`, `cn`, `lucide-react`, `tw-animate-css`, dan `shadcn` (dipakai untuk `@import "shadcn/tailwind.css"`).
- **Verifikasi**: `tsc --noEmit`, `eslint`, dan `next build` lolos setelah setup. Tampilan di browser belum dicek.

## Komponen yang ditambahkan untuk beranda Foodking

`carousel`, `tabs`, `select`, `sheet`, `accordion`, `input` (Radix + embla, lihat `docs/carousel.md`).

Perubahan terhadap bawaan shadcn:

- `button.tsx`: variant `theme`, `theme-white`, `theme-yellow`, `theme-red`, `theme-dark` dan size `theme`/`theme-dark` (padanan `.theme-btn` dan `.theme-btn-2` template: lapisan hover membesar dari tengah). Dipakai lewat `ThemeButton` (`src/components/common/theme-button.tsx`).
- `tabs.tsx`: varian `data-active:` diganti `data-[state=active]:` karena Radix memberi atribut `data-state`, bukan `data-active`.
- `carousel.tsx`: satu baris `eslint-disable` untuk `react-hooks/set-state-in-effect`.

## Komponen yang ditambahkan untuk halaman Toko

`slider`, `checkbox`, `pagination` (dipasang dengan `bunx shadcn@latest add`; jawab `n` bila diminta menimpa `button.tsx`, karena variant `theme` di sana buatan repo ini).

- `slider` menggantikan `rc-slider` template untuk filter harga. Gayanya (track, range, handle) ditimpa dari `className` di `src/components/shop/price-filter-widget.tsx` lewat selector `**:data-[slot=...]:`, jadi `ui/slider.tsx` tetap bawaan.
- `checkbox` dipakai di filter ukuran; beri `name` dan `value` agar ikut terkirim saat form disubmit.
- `pagination` dibungkus `src/components/common/page-nav.tsx`. Nomor halaman memakai `Button asChild` + `next/link` (bukan `PaginationLink`) supaya navigasi tidak full reload.

## Halaman Toko (`/toko`)

Filter, urutan, dan halaman disimpan di query string, tanpa state global. Parameter dan logikanya ada di `src/lib/shop-query.ts`:

| Parameter | Isi | Default |
| --- | --- | --- |
| `urut` | `terbaru`, `harga-asc`, `harga-desc`, `rating`, `nama` | `terbaru` |
| `halaman` | nomor halaman (5 produk per halaman) | `1` |
| `kategori` | slug kategori | semua |
| `harga` | `min-max` dalam rupiah (0-100000) | rentang penuh |
| `ukuran` | slug ukuran, boleh diulang | semua |

- Nilai tidak valid jatuh ke default; `halaman` di luar rentang dijepit ke halaman terakhir.
- Buat URL lewat `buildShopHref(params, override)`. Gunakan `withFilterChange` bila filter atau urutan berubah (otomatis kembali ke halaman 1).
- `searchParams` dibaca di `ShopView` (`src/components/shop/shop-view.tsx`) yang dibungkus `<Suspense>` di `src/app/toko/page.tsx`. Dengan `cacheComponents`, banner dan CTA tetap statis dan hanya blok sidebar + hasil yang dinamis.
- Filter sidebar adalah `<Form action="/toko">` dari `next/form` (GET), jadi tetap bekerja tanpa JavaScript. Kategori berupa link biasa; mengklik kategori aktif mematikannya.
- Katalog ada di `src/content/toko/products.ts` dan juga dipakai beranda (`content/beranda/popular-products.ts`). Link detail produk `/menu/<slug>`, keranjang `/keranjang`, dan checkout `/checkout` sudah ada halamannya.

## Detail produk (`/menu/[slug]`) dan keranjang (`/keranjang`)

`textarea` ditambahkan untuk form ulasan (`bunx shadcn@latest add textarea`).

**Keranjang** (`src/lib/cart.ts` + `src/components/cart/cart-provider.tsx`)
- Disimpan di `localStorage` kunci `foodking.cart` sebagai `[{ slug, quantity }]`. Harga tidak disimpan; selalu dibaca dari katalog `src/content/toko/products.ts`.
- `useCart()` memberi `lines`, `items`, `totals` (`count`, `subtotal`, `shipping`, `total`), `add`, `setQuantity`, `remove`, `clear`. Pasang `CartProvider` di root layout (sudah).
- Penyimpanan memakai `useSyncExternalStore`: snapshot server selalu keranjang kosong, nilai asli muncul setelah hidrasi. Komponen yang menampilkan isi keranjang harus siap dengan keadaan awal kosong (lihat `cart-view.tsx`).
- Data rusak, slug yang tidak ada di katalog, dan duplikat dibuang saat dibaca; jumlah dijepit 1-99. Sinkron antar tab lewat event `storage`.
- Ongkir tetap `CART_SHIPPING` (Rp10.000) selama ada item. Kode promo hanya tampilan. Tombol Checkout menuju `/checkout`.
- Tombol tambah: `AddToCartButton` (`components/cart/add-to-cart-button.tsx`), dipakai kartu produk dan halaman detail.

**Detail produk**
- Teks dan data turunan (galeri, SKU, spesifikasi, ulasan contoh, produk terkait) di `src/content/toko/product-details.ts`; pemetaan ke props di `src/content/produk/detail-page.ts`. `productDetailContent` berisi fungsi, jadi panggil di server dan oper string ke komponen client.
- Foto galeri ke-3 dan ke-4 memakai aset template sampai ada foto produk. Ulasan hanya contoh dan form tidak mengirim apa pun; karena itu JSON-LD `Product` sengaja tanpa `aggregateRating`/`review`.
- Route memakai `generateStaticParams` (semua slug katalog dirender statis) dan `export const instant = false`: slug tak dikenal harus menjawab 404 sebelum respons dikirim, jadi rute sengaja memblokir (pola "blocking route" di dokumentasi Next).

## Komponen untuk Checkout, Galeri, dan halaman lain

`radio-group` dan `dialog` (`bunx shadcn@latest add radio-group dialog`; jawab `n` saat diminta menimpa `button.tsx`).

- `radio-group` dipakai di pilihan pembayaran (`components/checkout/payment-methods.tsx`). Bawaannya memakai token `primary`; warna tema ditimpa lewat `data-[state=checked]:` pada `RadioGroupItem`.
- `dialog` dipakai untuk lightbox galeri (`components/gallery/gallery-tile.tsx`). Tiga perubahan terhadap bawaan: overlay `bg-black/70` (bawaan `bg-black/10` terlalu terang untuk lightbox), `z-1000` pada overlay dan konten (bawaan `z-50` tertutup header sticky yang `z-100`), dan prop `closeLabel` (default `"Tutup"`) menggantikan teks sr-only `Close`.
- `accordion` dipakai di FAQ (`components/faq/faq-list.tsx`). Bawaan shadcn memakai varian `data-open:`/`data-closed:` dan animasi `animate-accordion-*` yang tidak ada di `globals.css`, jadi isi akordion membuka tanpa animasi tinggi. Tambahkan keyframes bila ingin animasi. `AccordionTrigger` punya prop `icon` opsional untuk mengganti chevron bawaan; FAQ memakainya untuk ikon plus/minus gaya template (`group-aria-expanded/accordion-trigger:` menukar tampilan). `LegalDocument` memakai pola kartu putih yang sama.

**Form** (Checkout, Kontak): hanya tampilan, tidak ada data yang dikirim. Field dan pesan kesalahan lewat `components/common/form-field.tsx`, validasi lewat `lib/validation.ts`. Titik sambung ke backend ditandai komentar di `checkout-form.tsx` dan `contact-form.tsx`.

**Blog** (`/blog`): query string `q`, `kategori`, `tag`, `halaman` (4 artikel per halaman); logikanya di `src/lib/blog-query.ts`, pagination memakai `lib/paginate.ts` yang juga dipakai Toko. Data artikel di `src/content/blog/posts.ts`.

## Tema Foodking di `globals.css`

- Token brand: `--theme` (hijau), `--theme-2` (merah), `--theme-3` (kuning), `--heading`, `--body-text`, `--surface` (krem), `--rating`, `--navy`, `--line`, `--outline-muted`; dipetakan ke token shadcn (`--primary` = theme, dst.). Utility: `bg-theme`, `text-theme-2`, `bg-surface`, dst.
- Breakpoint **mengikuti Bootstrap** (xs 500, sm 576, md 768, lg 992, xl 1200, 2xl 1400, 3xl 1600, 4xl 1899), bukan default Tailwind, supaya responsif identik dengan template. Jadi `max-xl:` = `max-width: 1199px`.
- `@layer base` meniru `typography` template: body 18/28px, h1–h6 uppercase dengan ukuran responsif, scrollbar tipis 4px berwarna tema, `img` inline tanpa `max-width`.
- Lebar kontainer Bootstrap lewat `layout-container` (pakai komponen `Container`). Grid Bootstrap `row/col-*` diganti `grid grid-cols-12 gap-x-6`.
- Animasi (`animate-fade-in-up`, `animate-marquee-left`, dst.) ada di `globals.css`; efek muncul saat scroll lewat `Reveal` (pengganti WOW.js).
