import { Icon } from "@/components/common/icon"
import { Reveal } from "@/components/common/reveal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type FaqListProps = {
  items: readonly { question: string; answer: string }[]
}

/** Ikon plus saat tertutup, minus saat terbuka (padanan `.accordion-button::after`). */
const toggleIcon = (
  <>
    <Icon
      name="plus"
      family="light"
      className="shrink-0 group-aria-expanded/accordion-trigger:hidden"
    />
    <Icon
      name="minus"
      family="light"
      className="hidden shrink-0 group-aria-expanded/accordion-trigger:inline-block"
    />
  </>
)

/**
 * Daftar tanya-jawab bergaya `.faq-content` template: item putih radius 10px tanpa border,
 * judul kapital 22px. Item pertama terbuka dan hanya satu yang terbuka sekaligus.
 */
export function FaqList({ items }: FaqListProps) {
  return (
    <Accordion type="single" collapsible defaultValue="faq-0">
      {items.map((item, index) => (
        <Reveal key={item.question} delay={0.1 + index * 0.2} className="mt-5">
          <AccordionItem value={`faq-${index}`} className="rounded-[10px] bg-white">
            <AccordionTrigger
              icon={toggleIcon}
              className="items-center gap-4 rounded-none border-0 bg-transparent px-5 py-4 text-[22px] font-semibold tracking-[-0.2px] text-heading uppercase hover:no-underline"
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pt-[5px] pr-[30px] pb-4 pl-5 text-[18px] text-heading">
              <p>{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        </Reveal>
      ))}
    </Accordion>
  )
}
