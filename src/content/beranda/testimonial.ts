import type { TestimonialSectionProps } from "@/components/sections/home/testimonial-section"
import type { TestimonialItem } from "@/components/sections/home/testimonial-slider"

const clients: readonly TestimonialItem[] = [
  {
    name: "Budi Santoso",
    role: "CEO & Co-Founder",
    quote:
      "“Terima kasih untuk makan malam semalam. Luar biasa! Ini hidangan terbaik yang pernah saya santap. Kami pasti akan makan di sini lagi.”",
    rating: 5,
    avatar: { src: "client/01.jpg", alt: "Foto Budi Santoso" },
  },
  {
    name: "Siti Rahmawati",
    role: "Pemilik Kafe & Pegiat Kuliner",
    quote:
      "“Ayam panggangnya empuk dan bumbunya meresap. Pelayanannya cepat dan ramah, keluarga kami langsung jadi pelanggan tetap.”",
    rating: 5,
    avatar: { src: "client/02.jpg", alt: "Foto Siti Rahmawati" },
  },
  {
    name: "Andi Prasetyo",
    role: "Manajer Operasional",
    quote:
      "“Pesanan makan siang kantor kami selalu tiba tepat waktu dan masih hangat. Rasanya konsisten dan seluruh tim selalu puas.”",
    rating: 5,
    avatar: { src: "client/03.jpg", alt: "Foto Andi Prasetyo" },
  },
]

export const testimonialContent = {
  contentLabel: "Testimoni pelanggan",
  avatarLabel: "Foto pelanggan",
  // Tiga testimoni diulang dua kali (6 slide, sama seperti template) agar loop slider mulus.
  items: [...clients, ...clients],
} satisfies TestimonialSectionProps
