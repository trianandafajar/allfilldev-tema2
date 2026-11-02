import type { LegalDocumentProps } from "@/components/legal/legal-document"
import { contact } from "@/content/contact"
import { formatDate } from "@/lib/format"

const UPDATED = "2026-11-02"

/**
 * DRAF UMUM, bukan nasihat hukum. Pemilik bisnis dan penasihat hukum harus meninjau dan
 * menyesuaikannya (kebijakan pembatalan, pengembalian dana, area antar, hukum yang berlaku)
 * sebelum situs dipublikasikan.
 */
export const termsPageContent = {
  metadata: {
    title: "Syarat & Ketentuan",
    description:
      "Ketentuan memesan, membayar, dan memakai layanan pesan antar Foodking.",
  },
  banner: {
    title: "Syarat & Ketentuan",
    crumbs: [{ label: "Beranda", href: "/" }, { label: "Syarat & Ketentuan" }],
  },
  document: {
    updatedLabel: `Terakhir diperbarui: ${formatDate(UPDATED)}`,
    intro:
      "Dengan memakai situs dan memesan di Foodking, Anda menyetujui ketentuan berikut. Harap baca sebelum memesan.",
    sections: [
      {
        heading: "Pesanan",
        paragraphs: [
          "Pesanan dianggap diterima setelah Anda menyelesaikan checkout dan menerima nomor pesanan. Kami berhak menolak atau membatalkan pesanan jika stok habis, alamat di luar jangkauan, atau data pesanan tidak lengkap.",
        ],
      },
      {
        heading: "Harga dan pembayaran",
        paragraphs: [
          "Harga tertera dalam rupiah dan dapat berubah sewaktu-waktu tanpa pemberitahuan. Harga yang berlaku adalah harga pada saat pesanan dibuat, ditambah ongkos kirim yang tampil di keranjang.",
        ],
      },
      {
        heading: "Pengantaran",
        paragraphs: [
          "Estimasi waktu antar bersifat perkiraan dan dapat berubah karena kepadatan pesanan, lalu lintas, atau cuaca. Pastikan alamat dan nomor telepon Anda benar dan aktif.",
        ],
      },
      {
        heading: "Perubahan dan pembatalan",
        paragraphs: [
          "Pesanan dapat diubah atau dibatalkan selama belum diproses dapur. Setelah diproses, pesanan tidak dapat dibatalkan.",
        ],
      },
      {
        heading: "Alergi dan informasi bahan",
        paragraphs: [
          "Dapur kami menggunakan bahan yang sama di beberapa menu, sehingga kami tidak dapat menjamin menu bebas dari jejak alergen. Mohon informasikan alergi Anda sebelum memesan.",
        ],
      },
      {
        heading: "Keluhan",
        paragraphs: [
          `Jika pesanan tidak sesuai atau bermasalah, hubungi kami di ${contact.phone} atau ${contact.email} dalam waktu 24 jam agar dapat kami tindaklanjuti.`,
        ],
      },
      {
        heading: "Perubahan ketentuan",
        paragraphs: [
          "Kami dapat memperbarui ketentuan ini dari waktu ke waktu. Versi terbaru selalu tersedia di halaman ini.",
        ],
      },
    ],
  },
} satisfies {
  metadata: { title: string; description: string }
  banner: { title: string; crumbs: readonly { label: string; href?: string }[] }
  document: Omit<LegalDocumentProps, "title">
}
