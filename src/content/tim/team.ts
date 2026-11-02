import type { SocialLink } from "@/components/layout/types"
import type { TeamMember } from "@/types/team"

/** Profil sosial contoh; ganti `href` dengan akun asli tiap anggota. */
const social = (name: string): readonly SocialLink[] => [
  { label: `Facebook ${name}`, href: "#", icon: "facebook-f" },
  { label: `Twitter ${name}`, href: "#", icon: "twitter" },
  { label: `LinkedIn ${name}`, href: "#", icon: "linkedin-in" },
  { label: `YouTube ${name}`, href: "#", icon: "youtube" },
]

/** Anggota tim dapur dan layanan (nama dan foto contoh). */
export const teamMembers: readonly TeamMember[] = [
  {
    name: "Rizky Pratama",
    role: "Kepala Koki",
    photo: "tim/01.jpg",
    photoAlt: "Foto Rizky Pratama, kepala koki",
    social: social("Rizky Pratama"),
  },
  {
    name: "Dewi Lestari",
    role: "Sous Chef",
    photo: "tim/02.jpg",
    photoAlt: "Foto Dewi Lestari, sous chef",
    social: social("Dewi Lestari"),
  },
  {
    name: "Agus Wijaya",
    role: "Koki Panggang",
    photo: "tim/03.jpg",
    photoAlt: "Foto Agus Wijaya, koki panggang",
    social: social("Agus Wijaya"),
  },
  {
    name: "Maya Anggraini",
    role: "Koki Pastry",
    photo: "tim/04.jpg",
    photoAlt: "Foto Maya Anggraini, koki pastry",
    social: social("Maya Anggraini"),
  },
  {
    name: "Hendra Kusuma",
    role: "Manajer Dapur",
    photo: "tim/05.jpg",
    photoAlt: "Foto Hendra Kusuma, manajer dapur",
    social: social("Hendra Kusuma"),
  },
  {
    name: "Putri Ayu",
    role: "Koki Pasta",
    photo: "tim/06.jpg",
    photoAlt: "Foto Putri Ayu, koki pasta",
    social: social("Putri Ayu"),
  },
]
