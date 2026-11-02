# SEO, GEO, sitemap

Catatan setup. Dokumen ini diperbarui seiring fitur ditambah; bagian "Belum dikerjakan" adalah daftar kerja berikutnya.

"GEO" di sini berarti Generative Engine Optimization (agar muncul/terkutip di jawaban AI). SEO lokal (area layanan, alamat) dicatat terpisah di bagian terakhir.

## Yang sudah ada

| Fitur | File | Keterangan |
| --- | --- | --- |
| Identitas situs | `src/config/site.ts` | `siteConfig` (nama, deskripsi, bahasa, locale, url) dan `sitePages` (daftar halaman publik) |
| Metadata global | `src/app/layout.tsx` | `metadataBase`, title template `%s \| Jasalocal`, description, Open Graph dasar |
| Canonical | `src/app/page.tsx` | `alternates: { canonical: "/" }` per halaman |
| robots.txt | `src/app/robots.ts` | Izinkan semua, tunjuk ke sitemap |
| sitemap.xml | `src/app/sitemap.ts` | Dibuat dari `sitePages` |
| llms.txt | `src/app/llms.txt/route.ts` | Ringkasan situs untuk AI, dibuat dari `siteConfig` + `sitePages` |
| JSON-LD | `src/components/seo/json-ld.tsx` | `Organization` + `WebSite` di layout |
| Helper | `src/lib/seo.ts` | `absoluteUrl()`, `serializeJsonLd()` |

Tidak ada package tambahan; semua memakai fitur bawaan Next.

## Environment

`NEXT_PUBLIC_SITE_URL` (lihat `.env.example`) menentukan domain di canonical, sitemap, robots, llms.txt, dan JSON-LD. Jika kosong, jatuh ke `http://localhost:3000`, jadi **wajib diisi di production**. Nilainya ikut tertanam saat build, bukan saat runtime.

## Menambah halaman baru

1. Buat route di `src/app/...`.
2. Daftarkan di `sitePages` (`src/config/site.ts`). Otomatis masuk sitemap dan llms.txt.
3. Di `page.tsx` export `metadata` berisi `title`, `description`, dan `alternates: { canonical: "/path" }`. Title otomatis diberi akhiran nama situs.
4. Halaman yang tidak boleh diindeks (login, dashboard): jangan masukkan ke `sitePages`, dan set `robots: { index: false }` pada metadata-nya.

## Halaman produk dan keranjang

- `sitePages` menambahkan satu entri `/menu/<slug>` per produk di katalog (`src/content/toko/products.ts`), jadi produk baru otomatis masuk sitemap dan llms.txt.
- Detail produk memakai `generateMetadata` (title = nama produk, canonical `/menu/<slug>`) dan JSON-LD `Product` dengan `offers`. Tidak ada `aggregateRating`/`review` karena ulasan di halaman hanya contoh; tambahkan setelah ulasan nyata ada.
- `/keranjang` bersifat transaksional: `robots: { index: false, follow: true }` dan tidak didaftarkan di `sitePages`.

## Halaman konten

- Terdaftar di `sitePages`: `/blog`, setiap `/blog/<slug>` (diturunkan dari `src/content/blog/posts.ts`), `/tentang-kami`, `/tim`, `/galeri`, `/faq`, `/kontak`, `/kebijakan-privasi`, `/syarat-ketentuan`. Metadata tiap halaman (title, description) diambil dari objek `metadata` di file kontennya, jadi sitemap, llms.txt, dan `<head>` selalu sama.
- Detail artikel memakai `generateMetadata` (Open Graph `article`) dan JSON-LD `BlogPosting`. Tanpa `aggregateRating`, tanpa komentar.
- `/faq` menyertakan JSON-LD `FAQPage` dari daftar tanya-jawab di `src/content/faq/faq-page.ts` (jawaban teks biasa, sama dengan yang tampil).
- `/checkout` bersifat transaksional: `robots: { index: false, follow: true }` dan tidak ada di `sitePages`, seperti `/keranjang`.
- `src/app/not-found.tsx` memakai `robots: { index: false }`.
- Teks `/kebijakan-privasi` dan `/syarat-ketentuan` adalah draf umum; tinjau sebelum production.
- Hindari impor `siteConfig` dari file di `src/content/`: `src/config/site.ts` mengimpor konten untuk `sitePages`, sehingga impor balik membuat siklus (build gagal dengan "Cannot access ... before initialization").

## Keputusan dan batasan

- **Sitemap tanpa `lastModified`.** Dengan `cacheComponents: true`, `new Date()` saat prerender membuat build gagal (contoh di doc Next memakainya, tapi tidak berlaku di setup ini). Isi `lastModified` hanya dari data nyata, mis. `updatedAt` konten dari database.
- **Canonical diset per halaman, bukan di layout.** Canonical di layout akan menunjuk semua halaman ke `/`.
- **`twitter:card` = `summary_large_image`** (sekaligus default Next). Kartu ini butuh gambar; sebelum OG image ada, pratinjau di X/Twitter akan kosong.
- **`<html lang>`** diambil dari `siteConfig.language` (`id`).
- **JSON-LD** disisipkan lewat `<script>` biasa, dengan `<` di-escape (`<`) sesuai panduan Next, supaya data dinamis tidak bisa menutup tag script.
- **llms.txt** adalah usulan standar komunitas, dan belum ada bukti kuat mesin AI utama membacanya. Biayanya kecil, jadi disertakan, tapi jangan dianggap pengganti konten yang jelas, JSON-LD, dan halaman yang bisa di-crawl.
- **Crawler AI** (GPTBot, ClaudeBot, PerplexityBot, dll.) tidak diblokir karena aturan `*` mengizinkan semua. Untuk membatasi, tambah rule per `userAgent` di `robots.ts`.

## Belum dikerjakan

- [ ] **OG image** (`opengraph-image.tsx` atau file statis di `src/app/`), agar `twitter:card` di layout punya gambar. Baca `opengraph-image.md` di docs Next.
- [ ] **Warna/logo brand** di `Organization` JSON-LD (`logo`, `sameAs` untuk profil sosial).
- [ ] **Search Console / Bing Webmaster**: verifikasi domain dan submit `sitemap.xml` setelah domain final.
- [ ] **Skema per jenis halaman**: `Service`, `BreadcrumbList`. (`FAQPage` dan `BlogPosting` sudah ada.)
- [ ] **`manifest.ts`** bila dibutuhkan (PWA).
- [ ] **Multi-bahasa** (`alternates.languages` / hreflang) bila situs lebih dari satu bahasa. Lihat guide `internationalization.md`.
- [ ] **Validasi** dengan Rich Results Test dan Schema Markup Validator setelah ada URL publik.

## SEO lokal (area layanan)

Belum ada data bisnis, jadi belum diimplementasi. Untuk bisnis jasa lokal, tambahkan `LocalBusiness` (atau subtipe) JSON-LD dengan `address`, `geo`, `areaServed`, `openingHoursSpecification`, `telephone`. Datanya harus sama persis dengan Google Business Profile. Letakkan di halaman terkait (bukan layout), memakai komponen `JsonLd`.
