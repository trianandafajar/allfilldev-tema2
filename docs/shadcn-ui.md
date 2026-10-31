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

## Tema Foodking di `globals.css`

- Token brand: `--theme` (hijau), `--theme-2` (merah), `--theme-3` (kuning), `--heading`, `--body-text`, `--surface` (krem), `--rating`, `--navy`, `--line`, `--outline-muted`; dipetakan ke token shadcn (`--primary` = theme, dst.). Utility: `bg-theme`, `text-theme-2`, `bg-surface`, dst.
- Breakpoint **mengikuti Bootstrap** (xs 500, sm 576, md 768, lg 992, xl 1200, 2xl 1400, 3xl 1600, 4xl 1899), bukan default Tailwind, supaya responsif identik dengan template. Jadi `max-xl:` = `max-width: 1199px`.
- `@layer base` meniru `typography` template: body 18/28px, h1–h6 uppercase dengan ukuran responsif, scrollbar tipis 4px berwarna tema, `img` inline tanpa `max-width`.
- Lebar kontainer Bootstrap lewat `layout-container` (pakai komponen `Container`). Grid Bootstrap `row/col-*` diganti `grid grid-cols-12 gap-x-6`.
- Animasi (`animate-fade-in-up`, `animate-marquee-left`, dst.) ada di `globals.css`; efek muncul saat scroll lewat `Reveal` (pengganti WOW.js).
