import { TeamCard } from "@/components/cards/team-card"
import { Container } from "@/components/common/container"
import { Reveal } from "@/components/common/reveal"
import { Section } from "@/components/common/section"
import { SectionTitle } from "@/components/common/section-title"
import { ThemeButton } from "@/components/common/theme-button"
import type { LinkItem } from "@/components/layout/types"
import type { TeamMember } from "@/types/team"

export type TeamSectionProps = {
  eyebrow: string
  title: string
  socialLabel: string
  members: readonly TeamMember[]
  /** Tombol di bawah daftar, mis. "Lihat semua tim". */
  action?: LinkItem
}

/** Section tim: judul tengah dan kartu anggota (kartu kedua selalu terbuka, seperti template). */
export function TeamSection({ eyebrow, title, socialLabel, members, action }: TeamSectionProps) {
  return (
    <Section surface>
      <Container>
        <div className="text-center">
          <SectionTitle eyebrow={eyebrow}>{title}</SectionTitle>
        </div>
        <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
          {members.map((member, index) => (
            <Reveal key={member.name} delay={0.3 + (index % 3) * 0.2}>
              <TeamCard member={member} socialLabel={socialLabel} active={index === 1} />
            </Reveal>
          ))}
        </div>
        {action ? (
          <Reveal delay={0.4} className="mt-12 text-center">
            <ThemeButton href={action.href}>{action.label}</ThemeButton>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  )
}
