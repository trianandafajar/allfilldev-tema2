/** Data kontak bersama (header, footer, reservasi). Nilai contoh; ganti dengan data asli. */
export const contact = {
  phone: "+62 812-3456-7890",
  phoneHref: "tel:+6281234567890",
  email: "halo@foodking.id",
  emailHref: "mailto:halo@foodking.id",
  address: "Jl. Jenderal Sudirman No. 123, Jakarta Pusat 10220",
  hours: "Setiap hari, 10.00 – 22.00 WIB",
  /** Bentuk terstruktur dari `address` dan `hours` untuk data terstruktur (JSON-LD). */
  location: {
    street: "Jl. Jenderal Sudirman No. 123",
    city: "Jakarta Pusat",
    region: "DKI Jakarta",
    postalCode: "10220",
    country: "ID",
  },
  opens: "10:00",
  closes: "22:00",
} as const
