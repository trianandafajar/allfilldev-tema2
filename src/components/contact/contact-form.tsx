"use client"

import { useId, useState, type FormEvent } from "react"
import {
  FormField,
  fieldA11y,
  fieldInputClass,
  fieldTextareaClass,
} from "@/components/common/form-field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { isEmail, isPhone, readText, type FieldErrors } from "@/lib/validation"

type FieldCopy = { label: string; placeholder: string }
type FieldName = "name" | "email" | "phone" | "message"

export type ContactFormProps = {
  title: string
  hint: string
  fields: Record<FieldName, FieldCopy>
  errors: { required: string; email: string; phone: string }
  submit: string
  success: { title: string; message: string; again: string }
}

const REQUIRED_FIELDS: readonly FieldName[] = ["name", "email", "message"]

/**
 * Form kontak. Hanya tampilan: pesan tidak dikirim ke mana pun. Sambungkan ke backend
 * atau layanan email di `handleSubmit`, sebelum `setSentName`.
 */
export function ContactForm({ title, hint, fields, errors, submit, success }: ContactFormProps) {
  const id = useId()
  const fid = (name: FieldName) => `${id}-${name}`
  const [fieldErrors, setFieldErrors] = useState<FieldErrors<FieldName>>({})
  const [sentName, setSentName] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const next: FieldErrors<FieldName> = {}

    for (const name of REQUIRED_FIELDS) {
      if (!readText(data, name)) next[name] = errors.required
    }
    if (!next.email && !isEmail(readText(data, "email"))) next.email = errors.email
    const phone = readText(data, "phone")
    if (phone && !isPhone(phone)) next.phone = errors.phone

    setFieldErrors(next)
    const firstInvalid = (["name", "email", "phone", "message"] as const).find(
      (name) => next[name]
    )
    if (firstInvalid) {
      const control = form.elements.namedItem(firstInvalid)
      if (control instanceof HTMLElement) control.focus()
      return
    }

    setSentName(readText(data, "name"))
  }

  if (sentName !== null) {
    return (
      <div className="rounded-[5px] bg-white p-10 text-center shadow-[0_6px_30px_0] shadow-black/6 max-sm:p-6">
        <h3 className="text-heading">{success.title}</h3>
        <p className="mt-3 mb-8" role="status">
          {success.message.replace("{name}", sentName)}
        </p>
        <Button
          type="button"
          variant="theme"
          size="theme"
          className="rounded-none"
          onClick={() => {
            setSentName(null)
            setFieldErrors({})
          }}
        >
          {success.again}
        </Button>
      </div>
    )
  }

  return (
    <div className="rounded-[5px] bg-white p-10 shadow-[0_6px_30px_0] shadow-black/6 max-sm:p-6">
      <h3 className="text-heading">{title}</h3>
      <p className="mt-2 mb-6 text-sm">{hint}</p>
      <form noValidate onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
        <FormField id={fid("name")} label={fields.name.label} required error={fieldErrors.name}>
          <Input
            {...fieldA11y(fid("name"), fieldErrors.name)}
            name="name"
            autoComplete="name"
            placeholder={fields.name.placeholder}
            className={fieldInputClass}
          />
        </FormField>
        <FormField id={fid("email")} label={fields.email.label} required error={fieldErrors.email}>
          <Input
            {...fieldA11y(fid("email"), fieldErrors.email)}
            name="email"
            type="email"
            autoComplete="email"
            placeholder={fields.email.placeholder}
            className={fieldInputClass}
          />
        </FormField>
        <FormField id={fid("phone")} label={fields.phone.label} error={fieldErrors.phone}>
          <Input
            {...fieldA11y(fid("phone"), fieldErrors.phone)}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={fields.phone.placeholder}
            className={fieldInputClass}
          />
        </FormField>
        <FormField
          id={fid("message")}
          label={fields.message.label}
          required
          error={fieldErrors.message}
        >
          <Textarea
            {...fieldA11y(fid("message"), fieldErrors.message)}
            name="message"
            placeholder={fields.message.placeholder}
            className={fieldTextareaClass}
          />
        </FormField>
        <div>
          <Button type="submit" variant="theme" size="theme" className="rounded-none">
            {submit}
          </Button>
        </div>
      </form>
    </div>
  )
}
