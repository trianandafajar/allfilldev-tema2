import { Icon } from "@/components/common/icon"
import { SiteImage } from "@/components/common/site-image"
import { cn } from "@/lib/utils"
import type { TeamMember } from "@/types/team"

type TeamCardProps = {
  member: TeamMember
  /** Label grup ikon sosial untuk pembaca layar. */
  socialLabel: string
  /** Tampilan "terbuka" permanen (padanan `.single-team-items.active`). */
  active?: boolean
}

/** Bingkai titik-titik berputar di belakang foto saat kartu di-hover, fokus, atau aktif. */
const frameOpenClass =
  "group-hover/team:before:rotate-[-3.136deg] group-focus-within/team:before:rotate-[-3.136deg] group-data-[active=true]/team:before:rotate-[-3.136deg]"

/** Ikon sosial muncul saat kartu di-hover, fokus, atau aktif. */
const socialOpenClass =
  "group-hover/team:visible group-hover/team:opacity-100 group-focus-within/team:visible group-focus-within/team:opacity-100 group-data-[active=true]/team:visible group-data-[active=true]/team:opacity-100"

/** Kartu anggota tim: foto berbingkai titik, ikon sosial di sisi kiri, jabatan, dan nama. */
export function TeamCard({ member, socialLabel, active }: TeamCardProps) {
  return (
    <div className="group/team mt-[30px]" data-active={active ? "true" : undefined}>
      <div
        className={cn(
          "relative z-9 mx-auto h-[435px] max-w-[345px] text-center",
          "max-lg:h-[380px] max-lg:max-w-[290px] max-md:max-w-[345px]",
          "before:absolute before:top-[-16px] before:bottom-0 before:left-10 before:-z-1 before:h-full before:w-[95%] before:rounded-[13px] before:border-2 before:border-dotted before:border-theme before:transition-all before:duration-400 before:ease-in-out max-sm:before:top-[-10px]",
          frameOpenClass
        )}
      >
        <SiteImage
          src={member.photo}
          alt={member.photoAlt}
          sizes="345px"
          className="h-full w-full rounded-[13px] max-lg:object-cover"
        />
        <div
          role="group"
          aria-label={`${socialLabel} ${member.name}`}
          className={cn(
            "invisible absolute top-1/2 left-0 grid -translate-x-1/2 -translate-y-1/2 gap-[15px] bg-theme p-5 opacity-0 transition-all duration-400 ease-in-out",
            "before:absolute before:top-[-24px] before:left-0 before:h-0 before:w-0 before:rotate-[-180.509deg] before:border-t-[25px] before:border-r-[30px] before:border-t-theme before:border-r-transparent",
            "after:absolute after:right-[-7px] after:bottom-1/2 after:h-0 after:w-0 after:rotate-[139deg] after:border-t-[20px] after:border-r-[16px] after:border-t-theme after:border-r-transparent",
            socialOpenClass
          )}
        >
          {member.social.map((link) => (
            <a key={link.label} href={link.href} aria-label={link.label}>
              <Icon name={link.icon} family="brands" className="text-white" />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-5 text-center">
        <p className="text-[18px] font-medium text-theme capitalize">{member.role}</p>
        <h3 className="mt-[5px] text-[28px] max-sm:text-[24px]">{member.name}</h3>
      </div>
    </div>
  )
}
