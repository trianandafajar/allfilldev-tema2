import Link from "next/link"
import { BlogCard } from "@/components/cards/blog-card"
import { PageNav } from "@/components/common/page-nav"
import { Reveal } from "@/components/common/reveal"
import { blogCategories, blogPageContent, blogPosts, getAllTags } from "@/content/blog/posts"
import { getBlogCardProps, getBlogSidebarProps } from "@/content/blog/view-models"
import {
  BLOG_PAGE_SIZE,
  BLOG_PATH,
  buildBlogHref,
  filterPosts,
  parseBlogParams,
} from "@/lib/blog-query"
import { paginate } from "@/lib/paginate"
import { BlogSidebar } from "./blog-sidebar"

type BlogViewProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

/** Daftar artikel + sidebar. Membaca query string, jadi harus dirender di dalam `<Suspense>`. */
export async function BlogView({ searchParams }: BlogViewProps) {
  const { list, pagination } = blogPageContent
  const params = parseBlogParams(
    await searchParams,
    blogCategories.map((category) => category.slug),
    getAllTags()
  )
  const result = paginate(filterPosts(blogPosts, params), params.halaman, BLOG_PAGE_SIZE)

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
      <div className="min-w-0 lg:col-span-8">
        {params.q ? (
          <p className="mb-8 text-[20px] text-heading">
            {list.resultsFor} <strong>&ldquo;{params.q}&rdquo;</strong>
          </p>
        ) : null}
        {result.items.length === 0 ? (
          <div className="py-10 text-center">
            <p>{list.empty}</p>
            <Link href={BLOG_PATH} className="mt-4 inline-block font-bold text-theme underline">
              {list.emptyReset}
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {result.items.map((post, index) => (
                <Reveal key={post.slug} delay={0.2 + (index % 2) * 0.2}>
                  <BlogCard {...getBlogCardProps(post)} />
                </Reveal>
              ))}
            </div>
            <PageNav
              page={result.page}
              pageCount={result.pageCount}
              hrefs={Array.from({ length: result.pageCount }, (_, index) =>
                buildBlogHref(params, { halaman: index + 1 })
              )}
              label={pagination.label}
              previousLabel={pagination.previous}
              nextLabel={pagination.next}
            />
          </>
        )}
      </div>
      <div className="min-w-0 lg:col-span-4">
        <BlogSidebar {...getBlogSidebarProps(params)} />
      </div>
    </div>
  )
}
