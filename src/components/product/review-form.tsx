"use client"

import { useId, useState } from "react"
import { Icon } from "@/components/common/icon"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type Field = { label: string; placeholder: string }

export type ReviewFormProps = {
  title: string
  ratePrompt: string
  /** Label tiap bintang, berurutan dari 1 sampai 5. */
  starLabels: string[]
  fields: { name: Field; email: Field; message: Field }
  submit: string
}

const inputClass =
  "h-auto rounded-none border-0 bg-heading/[4.5%] px-[35px] py-[18px] text-[16px] font-medium text-body-text uppercase shadow-none focus-visible:ring-2 focus-visible:ring-theme/40 max-sm:px-5 max-sm:py-[15px] md:text-[16px] dark:bg-heading/[4.5%]"

const textareaClass =
  "field-sizing-fixed min-h-0 rounded-none border-0 bg-heading/[4.5%] px-[35px] pt-[18px] pb-[170px] text-[14px] text-body-text uppercase shadow-none focus-visible:ring-2 focus-visible:ring-theme/40 max-sm:px-5 max-sm:pt-[15px] max-sm:pb-[15px] md:text-[14px] dark:bg-heading/[4.5%]"

/** Formulir "Tulis ulasan". Hanya tampilan: tidak mengirim data ke mana pun. */
export function ReviewForm({ title, ratePrompt, starLabels, fields, submit }: ReviewFormProps) {
  const id = useId()
  const [rating, setRating] = useState(starLabels.length)

  return (
    <div className="mt-12">
      <h4>{title}</h4>
      <div className="mt-[15px] flex items-center gap-[15px]">
        <p className="text-[16px] uppercase">{ratePrompt}</p>
        <div className="flex">
          {starLabels.map((label, index) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              aria-pressed={rating === index + 1}
              onClick={() => setRating(index + 1)}
              className="cursor-pointer p-0 text-[16px] outline-none focus-visible:outline-2 focus-visible:outline-theme"
            >
              <Icon
                name="star"
                family="solid"
                className={cn("text-[16px]", index < rating ? "text-rating" : "text-line")}
              />
            </button>
          ))}
        </div>
      </div>

      <form
        onSubmit={(event) => event.preventDefault()}
        className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2"
      >
        <div>
          <label htmlFor={`${id}-name`} className="sr-only">
            {fields.name.label}
          </label>
          <Input
            id={`${id}-name`}
            type="text"
            name="name"
            placeholder={fields.name.placeholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="sr-only">
            {fields.email.label}
          </label>
          <Input
            id={`${id}-email`}
            type="email"
            name="email"
            placeholder={fields.email.placeholder}
            className={inputClass}
          />
        </div>
        <div className="lg:col-span-2">
          <label htmlFor={`${id}-message`} className="sr-only">
            {fields.message.label}
          </label>
          <Textarea
            id={`${id}-message`}
            name="message"
            placeholder={fields.message.placeholder}
            className={textareaClass}
          />
        </div>
        <div>
          <Button type="submit" variant="theme" size="theme">
            {submit}
          </Button>
        </div>
      </form>
    </div>
  )
}
