import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PostDetailsSection } from "@/components/blog/post-details-section"
import { RelatedPostsSection } from "@/components/blog/related-posts-section"
import { PageBanner } from "@/components/layout/page-banner"
import { CtaBannerSection } from "@/components/sections/shared/cta-banner-section"
import { JsonLd } from "@/components/seo/json-ld"
import { siteConfig } from "@/config/site"
import { blogPageContent, blogPosts, getCategory, getPost, getRelatedPosts } from "@/content/blog/posts"
import { getShareLinks, postPageContent } from "@/content/blog/post-page"
import {
  emptyBlogParams,
  getBlogCardProps,
  getBlogSidebarProps,
  getPostJsonLd,
  getPostPath,
} from "@/content/blog/view-models"
import { ctaBannerContent } from "@/content/shared/cta-banner"
import { BLOG_PATH, withBlogFilter } from "@/lib/blog-query"
import { formatDate } from "@/lib/format"

type PostPageProps = { params: Promise<{ slug: string }> }

/** Semua slug artikel dirender statis; slug tak dikenal menjawab 404 sebelum respons dikirim, jadi rute ini sengaja memblokir. */
export const instant = false

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}

  const canonical = getPostPath(post)
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      type: "article",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: post.title,
      description: post.excerpt,
      url: canonical,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: `/images/${post.cover}`, alt: post.coverAlt }],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const { banner, tagsTitle, shareTitle, related } = postPageContent
  const { list } = blogPageContent

  return (
    <>
      <PageBanner
        title={banner.title}
        crumbs={[
          { label: banner.homeLabel, href: "/" },
          { label: banner.blogLabel, href: BLOG_PATH },
          { label: post.title },
        ]}
      />
      <PostDetailsSection
        title={post.title}
        cover={post.cover}
        coverAlt={post.coverAlt}
        categoryLabel={getCategory(post.category)?.label ?? post.category}
        meta={[formatDate(post.date), post.author, `${post.readingMinutes} ${list.readingTime}`]}
        body={post.body}
        share={{
          tagsTitle,
          tags: post.tags.map((tag) => ({
            label: tag,
            href: withBlogFilter(emptyBlogParams, { tag }),
          })),
          shareTitle,
          shareLinks: getShareLinks(post),
        }}
        sidebar={getBlogSidebarProps()}
      />
      <RelatedPostsSection
        eyebrow={related.eyebrow}
        title={related.title}
        posts={getRelatedPosts(post).map((item) => ({
          key: item.slug,
          ...getBlogCardProps(item),
        }))}
      />
      <CtaBannerSection {...ctaBannerContent} />
      <JsonLd data={getPostJsonLd(post)} />
    </>
  )
}
