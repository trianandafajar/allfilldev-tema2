import { contact } from "@/content/contact"

/** Teks halaman Kontak. Data alamat, telepon, dan email berasal dari `src/content/contact.ts`. */
export const contactPageContent = {
  metadata: {
    title: "Kontak",
    description:
      "Hubungi Foodking untuk pertanyaan, pesanan besar, atau kerja sama. Temukan alamat, telepon, email, dan jam buka kami.",
  },
  banner: {
    title: "Hubungi Kami",
    crumbs: [{ label: "Beranda", href: "/" }, { label: "Kontak" }],
  },
  info: {
    cards: [
      {
        icon: "icon/location.svg",
        title: "Alamat",
        text: contact.address,
        href: `https://www.google.com/maps/search/?api=1&hl=id&query=${encodeURIComponent(contact.address)}`,
      },
      {
        icon: "icon/phone.svg",
        title: "Telepon",
        text: contact.phone,
        href: contact.phoneHref,
      },
      {
        icon: "icon/email.svg",
        title: "Email",
        text: contact.email,
        href: contact.emailHref,
      },
    ],
  },
  intro: {
    title: "Mari Mengobrol",
    description:
      "Ada pertanyaan soal menu, pesanan untuk acara, atau ingin bekerja sama? Kirim pesan dan tim kami membalas pada hari kerja.",
    hoursLabel: "Jam buka",
    hours: contact.hours,
  },
  map: {
    title: "Peta lokasi Foodking",
    src: `https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&hl=id&output=embed`,
  },
  form: {
    title: "Kirim Pesan",
    hint: "Kolom bertanda * wajib diisi.",
    fields: {
      name: { label: "Nama", placeholder: "Nama Anda" },
      email: { label: "Email", placeholder: "nama@email.com" },
      phone: { label: "Telepon (opsional)", placeholder: "0812-3456-7890" },
      message: { label: "Pesan", placeholder: "Tulis pesan Anda di sini" },
    },
    errors: {
      required: "Wajib diisi.",
      email: "Format email belum benar.",
      phone: "Nomor telepon harus 8–16 digit.",
    },
    submit: "Kirim Pesan",
    success: {
      title: "Pesan terkirim",
      message: "Terima kasih, {name}. Kami akan membalas lewat email secepatnya.",
      again: "Kirim pesan lain",
    },
  },
} as const
