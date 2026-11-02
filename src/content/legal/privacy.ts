import type { LegalDocumentProps } from "@/components/legal/legal-document"
import { contact } from "@/content/contact"
import { formatDate } from "@/lib/format"

const UPDATED = "2026-11-02"

/**
 * DRAF UMUM, bukan nasihat hukum. Pemilik bisnis dan penasihat hukum harus meninjau dan
 * menyesuaikannya dengan praktik nyata (data yang dikumpulkan, pemroses pihak ketiga, masa
 * simpan) dan UU Pelindungan Data Pribadi sebelum situs dipublikasikan.
 */
export const privacyPageContent = {
  metadata: {
    title: "Kebijakan Privasi",
    description:
      "Cara Foodking mengumpulkan, memakai, dan melindungi data pribadi Anda saat memesan makanan atau menghubungi kami.",
  },
  banner: {
    title: "Kebijakan Privasi",
    crumbs: [{ label: "Beranda", href: "/" }, { label: "Kebijakan Privasi" }],
  },
  document: {
    updatedLabel: `Terakhir diperbarui: ${formatDate(UPDATED)}`,
    intro:
      "Kebijakan ini menjelaskan data apa yang kami kumpulkan saat Anda memakai situs Foodking, untuk apa data itu dipakai, dan pilihan yang Anda miliki.",
    sections: [
      {
        heading: "Data yang kami kumpulkan",
        paragraphs: ["Kami hanya mengumpulkan data yang Anda berikan sendiri, yaitu:"],
        items: [
          "Nama, nomor telepon, dan email saat memesan atau mengirim pesan",
          "Alamat pengiriman dan catatan pesanan",
          "Isi pesan yang Anda kirim lewat form kontak",
        ],
      },
      {
        heading: "Cara kami memakai data",
        items: [
          "Memproses dan mengantar pesanan Anda",
          "Menghubungi Anda terkait pesanan atau pertanyaan",
          "Memperbaiki menu dan layanan kami",
        ],
      },
      {
        heading: "Berbagi data",
        paragraphs: [
          "Kami tidak menjual data pribadi Anda. Data hanya dibagikan kepada pihak yang membantu menyelesaikan pesanan, misalnya kurir pengantaran dan penyedia pembayaran, sebatas yang diperlukan.",
        ],
      },
      {
        heading: "Penyimpanan dan keamanan",
        paragraphs: [
          "Kami menyimpan data selama diperlukan untuk melayani pesanan dan memenuhi kewajiban hukum, lalu menghapus atau menganonimkannya. Kami menjaga data dengan langkah keamanan yang wajar, meski tidak ada sistem yang sepenuhnya bebas risiko.",
        ],
      },
      {
        heading: "Cookie dan penyimpanan lokal",
        paragraphs: [
          "Situs ini menyimpan isi keranjang belanja di peramban Anda (penyimpanan lokal) agar pesanan tidak hilang saat halaman dimuat ulang. Data ini tidak dikirim ke server kami dan bisa dihapus lewat pengaturan peramban.",
        ],
      },
      {
        heading: "Hak Anda",
        paragraphs: [
          "Anda dapat meminta akses, perbaikan, atau penghapusan data pribadi Anda, serta menarik persetujuan kapan saja, dengan menghubungi kami.",
        ],
      },
      {
        heading: "Kontak",
        paragraphs: [
          `Pertanyaan soal kebijakan ini dapat dikirim ke ${contact.email} atau ${contact.phone}.`,
        ],
      },
    ],
  },
} satisfies {
  metadata: { title: string; description: string }
  banner: { title: string; crumbs: readonly { label: string; href?: string }[] }
  document: Omit<LegalDocumentProps, "title">
}
