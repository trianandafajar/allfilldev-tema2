import { contact } from "@/content/contact"

export type FaqItem = { question: string; answer: string }

/** Teks halaman FAQ. Jawaban berupa teks biasa agar bisa dipakai ulang di JSON-LD `FAQPage`. */
export const faqPageContent = {
  metadata: {
    title: "FAQ",
    description:
      "Jawaban untuk pertanyaan yang sering diajukan soal pesan antar, pembayaran, jam buka, dan pesanan besar di Foodking.",
  },
  banner: {
    title: "FAQ",
    crumbs: [{ label: "Beranda", href: "/" }, { label: "FAQ" }],
  },
  intro: {
    eyebrow: "Pertanyaan Umum",
    title: "Yang Sering Ditanyakan",
  },
  items: [
    {
      question: "Berapa lama pesanan antar sampai?",
      answer:
        "Rata-rata 30 menit untuk alamat dalam jangkauan antar kami. Saat jam sibuk atau cuaca buruk, waktunya bisa bertambah dan kami akan mengabari Anda.",
    },
    {
      question: "Apakah harga di aplikasi dan di gerai sama?",
      answer:
        "Harga menu sama. Pesanan antar dikenakan ongkos kirim tetap yang terlihat di keranjang sebelum Anda membayar.",
    },
    {
      question: "Metode pembayaran apa saja yang diterima?",
      answer:
        "Bayar di tempat (tunai), transfer bank, dan e-wallet atau QRIS. Pilihan metode muncul di halaman checkout.",
    },
    {
      question: "Bisakah saya mengubah atau membatalkan pesanan?",
      answer: `Pesanan masih bisa diubah atau dibatalkan selama belum diproses dapur. Hubungi kami secepatnya di ${contact.phone} dan sebutkan nomor pesanan Anda.`,
    },
    {
      question: "Bagaimana jika saya alergi bahan tertentu?",
      answer:
        "Tulis alergi Anda di kolom catatan saat checkout, atau hubungi kami sebelum memesan. Dapur kami memakai bahan yang sama di beberapa menu, jadi kami tidak bisa menjamin bebas jejak alergen.",
    },
    {
      question: "Jam berapa Foodking buka?",
      answer: `${contact.hours}. Pesanan antar online mengikuti jam yang sama.`,
    },
    {
      question: "Apakah melayani pesanan dalam jumlah besar untuk acara atau kantor?",
      answer:
        "Ya. Untuk pesanan besar, hubungi kami minimal satu hari sebelumnya agar dapur bisa menyiapkan stok dan jadwal antarnya.",
    },
    {
      question: "Bagaimana cara menghubungi Foodking?",
      answer: `Telepon ${contact.phone}, kirim email ke ${contact.email}, atau gunakan form di halaman Kontak.`,
    },
  ] satisfies readonly FaqItem[],
} as const

/** JSON-LD `FAQPage` dari daftar tanya-jawab. */
export function getFaqJsonLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }
}
