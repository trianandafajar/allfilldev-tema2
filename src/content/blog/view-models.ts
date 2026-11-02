import type { BlogCardProps } from "@/components/cards/blog-card"
import type { BlogSidebarProps } from "@/components/blog/blog-sidebar"
import { absoluteUrl } from "@/lib/seo"
import { BLOG_PATH, withBlogFilter, type BlogParams } from "@/lib/blog-query"
import { formatDate } from "@/lib/format"
import type { BlogPost } from "@/types/blog"
import {
  blogCategories,
  blogPageContent,
  blogPosts,
  getAllTags,
  getCategory,
} from "./posts"

const RECENT_COUNT = 3

export const emptyBlogParams: BlogParams = { halaman: 1, kategori: null, tag: null, q: "" }

export function getPostPath(post: BlogPost): string {
  return `${BLOG_PATH}/${post.slug}`
}

/** Props kartu artikel untuk satu post. */
export function getBlogCardProps(post: BlogPost): BlogCardProps {
  const { list } = blogPageContent
  return {
    href: getPostPath(post),
    title: post.title,
    excerpt: post.excerpt,
    cover: post.cover,
    coverAlt: post.coverAlt,
    categoryLabel: getCategory(post.category)?.label ?? post.category,
    date: formatDate(post.date),
    author: post.author,
    readingTime: `${post.readingMinutes} ${list.readingTime}`,
    readMoreLabel: list.readMore,
  }
}

/** Props sidebar blog. `params` menandai kategori, tag, dan kata kunci yang sedang aktif. */
export function getBlogSidebarProps(params: BlogParams = emptyBlogParams): BlogSidebarProps {
  const { sidebar } = blogPageContent
  return {
    searchAction: BLOG_PATH,
    searchValue: params.q,
    titles: {
      search: sidebar.searchTitle,
      categories: sidebar.categoriesTitle,
      recent: sidebar.recentTitle,
      tags: sidebar.tagsTitle,
    },
    searchLabel: sidebar.searchLabel,
    searchPlaceholder: sidebar.searchPlaceholder,
    searchButton: sidebar.searchButton,
    categories: blogCategories.map((category) => {
      const active = category.slug === params.kategori
      return {
        label: category.label,
        count: blogPosts.filter((post) => post.category === category.slug).length,
        active,
        href: withBlogFilter(params, { kategori: active ? null : category.slug }),
      }
    }),
    recent: blogPosts.slice(0, RECENT_COUNT).map((post) => ({
      title: post.title,
      href: getPostPath(post),
      cover: post.cover,
      date: formatDate(post.date),
    })),
    tags: getAllTags().map((tag) => {
      const active = tag === params.tag
      return {
        label: tag,
        active,
        href: withBlogFilter(params, { tag: active ? null : tag }),
      }
    }),
  }
}

/** JSON-LD `BlogPosting` untuk halaman detail artikel. */
export function getPostJsonLd(post: BlogPost): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(`/images/${post.cover}`),
    datePublished: post.date,
    inLanguage: "id",
    keywords: post.tags.join(", "),
    author: { "@type": "Person", name: post.author },
    mainEntityOfPage: absoluteUrl(getPostPath(post)),
  }
}
