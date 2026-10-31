# Ikon (Font Awesome Pro 5 + Flaticon)

Ikon beranda memakai font bawaan template Foodking, bukan SVG:

- Font Awesome 5 Pro (light/regular/solid) dan Brands, aset berlisensi komersial milik template. **Pastikan lisensi template mencakup pemakaian ini sebelum produksi.**
- Flaticon (font custom): `delivery`, `quality`, `cooking`, `fast-delivery`, `reputation`, `phone-call-2`.

`lucide-react` tetap dipakai komponen shadcn (`src/components/ui/`), tetapi ikon desain Foodking memakai font ini agar tampilan 1:1.

## File

| File | Isi |
| --- | --- |
| `public/fonts/*.woff2` | Hanya woff2 (eot/woff dibuang) |
| `src/styles/icons.css` | `@font-face` + token `font-fa`, `font-fa-brands`, `font-flaticon`; diimpor dari `globals.css`. Satu-satunya CSS non-Tailwind di repo (vendor font) |
| `src/components/common/icon-glyphs.ts` | Peta nama → codepoint |
| `src/components/common/icon.tsx` | Komponen `<Icon name family className />` |

## Pemakaian

```tsx
<Icon name="heart" />                       // regular (kelas `far`)
<Icon name="star" family="solid" />         // `fas`
<Icon name="facebook-f" family="brands" />  // `fab`
<Icon name="flaticon-delivery" />           // family otomatis `flaticon`
```

Glyph dirender sebagai karakter di dalam `<i aria-hidden>`, jadi tidak ada CSS per ikon. Untuk ikon di pseudo-element: `before:font-fa before:font-black before:content-['\f107']`.

## Menambah glyph

1. Cari codepoint di `foodking-fast-food-restaurant-*/package/foodking/public/assets/css/font-awesome.css` (`.fa-<nama>:before{content:"\f..."}` atau `.flaticon-<nama>:before`).
2. Tambahkan ke `iconGlyphs` di `icon-glyphs.ts`.
3. Hanya glyph yang ada di file font yang tersalin yang akan tampil.
