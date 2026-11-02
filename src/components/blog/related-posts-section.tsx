import { BlogCard, type BlogCardProps } from "@/components/cards/blog-card"
import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import { Section } from "@/components/common/section"
import { SectionTitle } from "@/components/common/section-title"

type RelatedPostsSectionProps = {
  eyebrow: string
  title: string
  posts: readonly (BlogCardProps & { key: string })[]
}

/** Section "Artikel Terkait": judul di tengah dan kartu artikel. */
export function RelatedPostsSection({ eyebrow, title, posts }: RelatedPostsSectionProps) {
  return (
    <Section>
      <Container>
        <SectionTitle eyebrow={eyebrow} className="text-center">
          {title}
        </SectionTitle>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ key, ...card }, index) => (
            <Reveal key={key} delay={0.2 + index * 0.2}>
              <BlogCard {...card} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
