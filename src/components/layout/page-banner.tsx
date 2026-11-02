import Link from "next/link"
import { Fragment } from "react"
import { Container } from "@/components/common/container"
import { Icon } from "@/components/common/icon"

export type PageBannerCrumb = { label: string; href?: string }

type PageBannerProps = {
  title: string
  /** Jejak halaman; item terakhir tampil sebagai teks biasa, lainnya sebagai tautan. */
  crumbs: PageBannerCrumb[]
}

/** Banner judul halaman berlatar foto dengan breadcrumb (padanan `.breadcrumb-wrapper`). */
export function PageBanner({ title, crumbs }: PageBannerProps) {
  const lastIndex = crumbs.length - 1

  return (
    <div className="relative bg-[url('/images/banner/breadcrumb.jpg')] bg-cover bg-center bg-no-repeat">
      <Container>
        <div className="relative mx-auto py-[120px] text-center max-lg:py-20">
          <h1 className="relative z-9 text-[70px] text-white max-lg:text-[50px] max-sm:text-[36px]">
            {title}
          </h1>
          <ul className="mt-5 flex items-center justify-center gap-2.5 max-lg:mt-[15px]">
            {crumbs.map((crumb, index) => {
              const isLast = index === lastIndex
              return (
                <Fragment key={index}>
                  <li
                    aria-current={isLast ? "page" : undefined}
                    className="text-[20px] font-semibold text-theme-2 uppercase max-lg:text-base"
                  >
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="text-theme-2 transition-all duration-400 ease-in-out hover:text-theme"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      crumb.label
                    )}
                  </li>
                  {isLast ? null : (
                    <li aria-hidden="true">
                      <Icon
                        name="chevron-right"
                        className="text-[20px] text-theme-2 max-sm:text-[18px]"
                      />
                    </li>
                  )}
                </Fragment>
              )
            })}
          </ul>
        </div>
      </Container>
    </div>
  )
}
