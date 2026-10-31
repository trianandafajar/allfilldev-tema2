import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import { Section } from "@/components/common/section"
import { SectionTitle } from "@/components/common/section-title"
import { ThemeButton } from "@/components/common/theme-button"
import { ProductCard, type ProductCardData } from "@/components/cards/product-card"

export type PopularProductsSectionProps = {
  eyebrow: string
  title: string
  products: ProductCardData[]
  cartHref: string
  addToCartLabel: string
  favoriteLabel: string
  viewMoreLabel: string
  viewMoreHref: string
}

/** Jeda animasi muncul per kartu, berulang tiap baris (padanan `data-wow-delay`). */
const CARD_DELAYS = [0.3, 0.5, 0.7, 0.8] as const

export function PopularProductsSection({
  eyebrow,
  title,
  products,
  cartHref,
  addToCartLabel,
  favoriteLabel,
  viewMoreLabel,
  viewMoreHref,
}: PopularProductsSectionProps) {
  return (
    <Section surface>
      <Container>
        <SectionTitle eyebrow={eyebrow} className="text-center">
          {title}
        </SectionTitle>

        <div className="grid grid-cols-12 gap-x-6">
          {products.map((product, index) => (
            <Reveal
              key={product.href}
              delay={CARD_DELAYS[index % CARD_DELAYS.length]}
              className="col-span-12 md:col-span-6 xl:col-span-3"
            >
              <ProductCard
                {...product}
                cartHref={cartHref}
                addToCartLabel={addToCartLabel}
                favoriteLabel={favoriteLabel}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="pt-6 text-center">
          <ThemeButton href={viewMoreHref} icon="flaticon-delivery" className="border-0">
            {viewMoreLabel}
          </ThemeButton>
        </Reveal>
      </Container>
    </Section>
  )
}
