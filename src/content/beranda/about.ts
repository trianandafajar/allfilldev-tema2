import type { AboutSectionProps } from "@/components/sections/home/about-section"

export const aboutContent: AboutSectionProps = {
  image: "about/burger.png",
  imageAlt: "Burger daging dengan keju, selada, dan tomat",
  circularTextImage: "about/burger-text.png",
  price: "Rp49.000",
  sinceLabel: "sejak /1985",
  sinceBackground: "shape/food-shape.png",
  eyebrow: "Tentang Makanan Kami",
  title: "Kualitas Unggul, Layanan",
  titleAccent: "Prima.",
  description:
    "Setiap hidangan dibuat dari bahan segar pilihan. Rasakan layanan cepat dan efisien yang memastikan makanan Anda tersaji hangat, dengan rasa, kebersihan, dan keramahan yang selalu terjaga di setiap kunjungan.",
  features: [
    {
      icon: "flaticon-quality",
      title: "Makanan Berkualitas Super",
      description: "Tim dapur kami meracik setiap menu dengan resep terjaga",
    },
    {
      icon: "flaticon-reputation",
      title: "Reputasi Terpercaya",
      description: "Dipercaya ribuan pelanggan setia sejak tahun 1985",
    },
  ],
  ctaLabel: "Tentang Kami",
  ctaHref: "/tentang-kami",
  quoteName: "Budi Santoso",
  quote: "Kepuasan pelanggan adalah prioritas utama kami.",
}
