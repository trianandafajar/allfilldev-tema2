import type { SocialLink } from "@/components/layout/types"

export type TeamMember = {
  name: string
  role: string
  /** Path foto relatif terhadap `public/images`. */
  photo: string
  photoAlt: string
  social: readonly SocialLink[]
}
