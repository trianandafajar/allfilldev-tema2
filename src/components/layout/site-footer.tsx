import Link from "next/link"
import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import { ShapeImage } from "@/components/common/shape-image"
import { SiteImage } from "@/components/common/site-image"
import { contact } from "@/content/contact"
import { footerContent, siteLogo } from "@/content/layout"
import { FooterBottom } from "./footer-bottom"
import { FooterLinkList } from "./footer-link-list"
import { FooterWidget } from "./footer-widget"
import { SocialLinks } from "./social-links"

const addressTextClass = "text-[20px] leading-[150%] font-normal text-body-text capitalize"

/** Footer situs: kolom merek, tautan, alamat, aplikasi, dan bilah hak cipta. */
export function SiteFooter() {
  const { brand, address, support } = footerContent

  return (
    <footer className="relative overflow-hidden bg-surface">
      <ShapeImage
        src="shape/burger-shape-3.png"
        className="bottom-1/4 left-[2%] opacity-30 max-xl:hidden"
      />
      <ShapeImage
        src="shape/fry-shape-2.png"
        className="top-1/4 right-[5%] opacity-30 max-xl:hidden"
      />
      <Container>
        <div className="relative z-9 pt-[90px] pb-[120px] max-xl:pt-[60px] max-xl:pb-[90px] max-lg:pt-[50px] max-lg:pb-[70px]">
          <div className="grid grid-cols-12 gap-x-6">
            <Reveal
              delay={0.2}
              className="col-span-12 sm:col-span-6 lg:col-span-3"
            >
              <FooterWidget
                head={
                  <Link href="/" aria-label={siteLogo.homeLabel}>
                    <SiteImage src={siteLogo.src} alt={siteLogo.alt} />
                  </Link>
                }
              >
                <div>
                  <p>{brand.description}</p>
                  <span className="mt-[15px] inline-block font-medium max-sm:mt-2.5">
                    {brand.emailPrompt}
                  </span>
                  <br />
                  <a
                    href={contact.emailHref}
                    className="mt-[15px] inline-block text-[20px] font-bold text-theme max-sm:mt-2.5"
                  >
                    {contact.email}
                  </a>
                  <SocialLinks links={footerContent.socialLinks} variant="footer" />
                </div>
              </FooterWidget>
            </Reveal>

            <Reveal
              delay={0.4}
              className="col-span-12 sm:col-span-6 lg:col-span-3 lg:pl-9 xl:col-span-2"
            >
              <FooterWidget title={footerContent.quickLinks.title}>
                <FooterLinkList links={footerContent.quickLinks.links} />
              </FooterWidget>
            </Reveal>

            <Reveal
              delay={0.8}
              className="col-span-12 sm:col-span-6 lg:col-span-3 xl:col-span-3"
            >
              <FooterWidget title={address.title}>
                <div>
                  <h6 className={addressTextClass}>
                    {address.street}{" "}
                    <span className="text-theme-2">{address.postalCode}</span>
                  </h6>
                  <h5 className="py-5 capitalize">{address.hoursTitle}</h5>
                  <h6 className={addressTextClass}>{address.hours}</h6>
                </div>
              </FooterWidget>
            </Reveal>

            <Reveal
              delay={0.9}
              className="col-span-12 sm:col-span-6 lg:col-span-3 xl:col-span-4 xl:pl-9"
            >
              <FooterWidget title={support.title}>
                <div>
                  <h5 className="mb-2.5 font-normal text-body-text">{support.label}</h5>
                  <h3 className="text-[28px]">
                    <a href={contact.phoneHref} className="text-theme">
                      {contact.phone}
                    </a>
                  </h3>
                </div>
              </FooterWidget>
            </Reveal>
          </div>
        </div>
      </Container>
      <FooterBottom
        copyright={footerContent.copyright}
        legalLinks={footerContent.legalLinks}
      />
    </footer>
  )
}
