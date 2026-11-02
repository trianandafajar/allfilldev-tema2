import type { SocialLink } from "@/components/layout/types"
import { absoluteUrl } from "@/lib/seo"
import type { BlogPost } from "@/types/blog"
import { getPostPath } from "./view-models"

/** Teks halaman detail artikel. */
export const postPageContent = {
  banner: { title: "Artikel Blog", homeLabel: "Beranda", blogLabel: "Blog" },
  tagsTitle: "Tag Terkait",
  shareTitle: "Bagikan",
  related: { eyebrow: "Baca Juga", title: "Artikel Terkait" },
} as const

/** Tautan bagikan ke Facebook, X/Twitter, dan LinkedIn untuk satu artikel. */
export function getShareLinks(post: BlogPost): SocialLink[] {
  const url = encodeURIComponent(absoluteUrl(getPostPath(post)))
  const text = encodeURIComponent(post.title)
  return [
    {
      label: "Bagikan ke Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      icon: "facebook-f",
    },
    {
      label: "Bagikan ke Twitter",
      href: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      icon: "twitter",
    },
    {
      label: "Bagikan ke LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      icon: "linkedin-in",
    },
  ]
}
