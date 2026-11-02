import { ProductCard, type ProductCardData } from "@/components/cards/product-card"
import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import { Section } from "@/components/common/section"
import { SectionTitle } from "@/components/common/section-title"

export type RelatedProductsSectionProps = {
  eyebrow: string
  title: string
  products: ProductCardData[]
  addToCartLabel: string
  addedLabel: string
  favoriteLabel: string
}

/** Jeda animasi muncul per kartu (padanan `data-wow-delay`). */
const CARD_DELAYS = [0.3, 0.5, 0.7, 0.9] as const

/** Section "Produk Terkait": judul di tengah dan deretan kartu produk. */
export function RelatedProductsSection({
  eyebrow,
  title,
  products,
  addToCartLabel,
  addedLabel,
  favoriteLabel,
}: RelatedProductsSectionProps) {
  return (
    <Section surface>
      <Container>
        <SectionTitle eyebrow={eyebrow} className="text-center">
          {title}
        </SectionTitle>
        <div className="grid grid-cols-12 gap-x-6">
          {products.map((product, index) => (
            <Reveal
              key={product.slug}
              delay={CARD_DELAYS[index % CARD_DELAYS.length]}
              className="col-span-12 md:col-span-6 xl:col-span-3"
            >
              <ProductCard
                {...product}
                addToCartLabel={addToCartLabel}
                addedLabel={addedLabel}
                favoriteLabel={favoriteLabel}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
