import { Icon } from "@/components/common/icon"
import type { IconName } from "@/components/common/icon-glyphs"
import { Reveal } from "@/components/common/reveal"
import { cn } from "@/lib/utils"

export type FeatureItemData = {
  icon: IconName
  title: string
  description: string
}

type FeatureItemProps = FeatureItemData & {
  /** `stacked`: ikon di atas teks, untuk latar gelap. `inline`: ikon di samping teks, untuk latar terang. */
  variant?: "stacked" | "inline"
  /** Jeda animasi muncul dalam detik. */
  delay?: number
  className?: string
}

const variantClass = {
  stacked: {
    root: "max-lg:text-center",
    icon: "text-theme-3",
    content: "mt-5",
    title: "mb-2.5 text-white",
    description: "text-white",
  },
  inline: {
    root: "flex gap-5",
    icon: "text-theme-2",
    content: "",
    title: "mb-[5px]",
    description: "text-heading",
  },
} as const

/** Ikon besar dengan judul dan deskripsi singkat (padanan `single-food-icon` dan `icon-items`). */
export function FeatureItem({
  icon,
  title,
  description,
  variant = "stacked",
  delay,
  className,
}: FeatureItemProps) {
  const styles = variantClass[variant]

  return (
    <Reveal delay={delay} className={cn(styles.root, className)}>
      <div className={cn("text-[55px]", styles.icon)}>
        <Icon name={icon} />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </Reveal>
  )
}
