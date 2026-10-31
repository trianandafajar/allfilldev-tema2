import type { MarqueeSectionProps } from "@/components/sections/home/marquee-section"

export const marqueeContent: MarqueeSectionProps = {
  repeat: 4,
  items: [
    { kind: "text", text: "Populer", tone: "muted" },
    { kind: "text", text: "Hidangan", tone: "muted" },
    { kind: "icon", src: "icon/burger.png" },
    { kind: "text", text: "Makanan Lezat", tone: "accent" },
    { kind: "icon", src: "icon/pizza.png" },
  ],
}
