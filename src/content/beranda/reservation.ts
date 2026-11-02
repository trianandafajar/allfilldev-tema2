import type { ReservationSectionProps } from "@/components/sections/home/reservation-section"
import { contact } from "@/content/contact"

export const reservationContent = {
  eyebrow: "Renyah di Setiap Gigitan",
  title: ["Mau Pesan Tempat?", "Reservasi Meja Anda"],
  support: {
    label: "Pusat Bantuan 24/7",
    phone: contact.phone,
    phoneHref: contact.phoneHref,
  },
  form: {
    title: "Buat Reservasi",
    guests: {
      label: "Jumlah orang",
      defaultValue: "1-orang",
      options: [
        { value: "1-orang", label: "1 Orang" },
        { value: "2-orang", label: "2 Orang" },
        { value: "3-orang", label: "3 Orang" },
      ],
    },
    phone: { label: "Nomor telepon", placeholder: "Nomor telepon" },
    date: { label: "Tanggal reservasi" },
    submit: { label: "Pesan Sekarang", href: "/kontak" },
  },
} satisfies ReservationSectionProps
