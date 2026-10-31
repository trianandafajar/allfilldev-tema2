import type { Metadata } from "next"
import { AboutSection } from "@/components/sections/home/about-section"
import { BrandSection } from "@/components/sections/home/brand-section"
import { CategorySliderSection } from "@/components/sections/home/category-slider-section"
import { ComboOfferSection } from "@/components/sections/home/combo-offer-section"
import { CountdownPromoSection } from "@/components/sections/home/countdown-promo-section"
import { DeliveryCtaSection } from "@/components/sections/home/delivery-cta-section"
import { GrilledBannerSection } from "@/components/sections/home/grilled-banner-section"
import { HeroSection } from "@/components/sections/home/hero-section"
import { MarqueeSection } from "@/components/sections/home/marquee-section"
import { PopularProductsSection } from "@/components/sections/home/popular-products-section"
import { PromoBannersSection } from "@/components/sections/home/promo-banners-section"
import { ReservationSection } from "@/components/sections/home/reservation-section"
import { SpecialBannersSection } from "@/components/sections/home/special-banners-section"
import { TestimonialSection } from "@/components/sections/home/testimonial-section"
import { aboutContent } from "@/content/beranda/about"
import { brandContent } from "@/content/beranda/brand"
import { categorySliderContent } from "@/content/beranda/category-slider"
import { comboOfferContent } from "@/content/beranda/combo-offer"
import { countdownPromoContent } from "@/content/beranda/countdown-promo"
import { deliveryCtaContent } from "@/content/beranda/delivery-cta"
import { grilledBannerContent } from "@/content/beranda/grilled-banner"
import { heroContent } from "@/content/beranda/hero"
import { marqueeContent } from "@/content/beranda/marquee"
import { popularProductsContent } from "@/content/beranda/popular-products"
import { promoBannersContent } from "@/content/beranda/promo-banners"
import { reservationContent } from "@/content/beranda/reservation"
import { specialBannersContent } from "@/content/beranda/special-banners"
import { testimonialContent } from "@/content/beranda/testimonial"
import { whyChooseUsContent } from "@/content/beranda/why-choose-us"
import { WhyChooseUsSection } from "@/components/sections/home/why-choose-us-section"

export const metadata: Metadata = {
  title: "Restoran Cepat Saji Renyah & Lezat",
  description:
    "Foodking menyajikan ayam goreng krispi, burger, pizza, dan pasta dengan bahan segar. Pesan antar cepat 30 menit atau reservasi meja sekarang.",
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <main>
      <HeroSection {...heroContent} />
      <CategorySliderSection {...categorySliderContent} />
      <PromoBannersSection {...promoBannersContent} />
      <BrandSection {...brandContent} />
      <GrilledBannerSection {...grilledBannerContent} />
      <PopularProductsSection {...popularProductsContent} />
      <ComboOfferSection {...comboOfferContent} />
      <MarqueeSection {...marqueeContent} />
      <WhyChooseUsSection {...whyChooseUsContent} />
      <AboutSection {...aboutContent} />
      <SpecialBannersSection {...specialBannersContent} />
      <CountdownPromoSection {...countdownPromoContent} />
      <TestimonialSection {...testimonialContent} />
      <DeliveryCtaSection {...deliveryCtaContent} />
      <ReservationSection {...reservationContent} />
    </main>
  )
}
