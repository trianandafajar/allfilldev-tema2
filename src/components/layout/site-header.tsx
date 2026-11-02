import Link from "next/link"
import { Container } from "@/components/common/container"
import { SiteImage } from "@/components/common/site-image"
import { ThemeButton } from "@/components/common/theme-button"
import { SheetClose } from "@/components/ui/sheet"
import {
  cartPreview,
  headerContent,
  navItems,
  offcanvasContent,
  offcanvasSocialLinks,
  siteLogo,
  topBarSocialLinks,
} from "@/content/layout"
import { DesktopNav } from "./desktop-nav"
import { HeaderCart } from "./header-cart"
import { HeaderTopBar } from "./header-top-bar"
import { MobileNav } from "./mobile-nav"
import { MobileNavMenu } from "./mobile-nav-menu"
import { OffcanvasContact } from "./offcanvas-contact"
import { OffcanvasIntro } from "./offcanvas-intro"
import { StickyHeaderBar } from "./sticky-header-bar"

/** Header situs: top bar, menu utama (sticky), keranjang, tombol kontak, dan offcanvas. */
export function SiteHeader() {
  const { topBar, cta } = headerContent

  return (
    <header className="bg-surface">
      <HeaderTopBar
        notice={topBar.notice}
        searchLabel={topBar.searchLabel}
        searchPlaceholder={topBar.searchPlaceholder}
        social={topBarSocialLinks}
      />
      <StickyHeaderBar>
        <Container>
          <div className="flex items-center justify-between py-2.5 group-data-[sticky=true]/sticky:min-[991px]:py-0">
            <div>
              <Link href="/" aria-label={siteLogo.homeLabel}>
                <SiteImage src={siteLogo.src} alt={siteLogo.alt} priority />
              </Link>
            </div>
            <div>
              <div className="hidden lg:block">
                <DesktopNav items={navItems} ariaLabel={headerContent.menuLabel} />
              </div>
            </div>
            <div className="flex items-center justify-end gap-[25px]">
              <HeaderCart {...cartPreview} />
              <div className="max-md:hidden">
                <ThemeButton href={cta.href} variant="theme-red">
                  {cta.label}
                </ThemeButton>
              </div>
              <div className="my-auto block">
                <MobileNav
                  title={offcanvasContent.title}
                  openLabel={headerContent.openMenuLabel}
                  closeLabel={offcanvasContent.closeLabel}
                  logo={
                    <SheetClose asChild>
                      <Link href="/" aria-label={siteLogo.homeLabel}>
                        <SiteImage
                          src={siteLogo.src}
                          alt={siteLogo.alt}
                          className="w-[150px]"
                        />
                      </Link>
                    </SheetClose>
                  }
                >
                  <OffcanvasIntro
                    about={offcanvasContent.about}
                    gallery={offcanvasContent.gallery}
                  />
                  <MobileNavMenu
                    items={navItems}
                    ariaLabel={headerContent.menuLabel}
                    expandLabel={offcanvasContent.expandLabel}
                  />
                  <OffcanvasContact
                    title={offcanvasContent.contactTitle}
                    items={offcanvasContent.contactItems}
                    cta={offcanvasContent.cta}
                    social={offcanvasSocialLinks}
                  />
                </MobileNav>
              </div>
            </div>
          </div>
        </Container>
      </StickyHeaderBar>
    </header>
  )
}
