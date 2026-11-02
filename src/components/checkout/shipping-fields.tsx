"use client"

import { useId } from "react"
import { fieldA11y } from "@/components/common/form-field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { FieldErrors } from "@/lib/validation"
import { CheckoutField, checkoutInputClass, checkoutTextareaClass } from "./checkout-field"

export type ShippingFieldName =
  | "name"
  | "phone"
  | "email"
  | "address"
  | "city"
  | "postalCode"
  | "note"

type FieldCopy = { label: string; placeholder: string }

type ShippingFieldsProps = {
  fields: Record<ShippingFieldName, FieldCopy>
  errors: FieldErrors<ShippingFieldName>
}

/** Kolom data pengiriman (padanan `.checkout-single-form` + `row g-4`). Nilai dibaca dari `FormData`. */
export function ShippingFields({ fields, errors }: ShippingFieldsProps) {
  const id = useId()
  const fid = (name: ShippingFieldName) => `${id}-${name}`

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <CheckoutField id={fid("name")} label={fields.name.label} error={errors.name}>
        <Input
          {...fieldA11y(fid("name"), errors.name)}
          name="name"
          autoComplete="name"
          aria-required="true"
          placeholder={fields.name.placeholder}
          className={checkoutInputClass}
        />
      </CheckoutField>
      <CheckoutField id={fid("phone")} label={fields.phone.label} error={errors.phone}>
        <Input
          {...fieldA11y(fid("phone"), errors.phone)}
          name="phone"
          type="tel"
          autoComplete="tel"
          aria-required="true"
          placeholder={fields.phone.placeholder}
          className={checkoutInputClass}
        />
      </CheckoutField>
      <CheckoutField
        id={fid("email")}
        label={fields.email.label}
        error={errors.email}
        className="lg:col-span-2"
      >
        <Input
          {...fieldA11y(fid("email"), errors.email)}
          name="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          placeholder={fields.email.placeholder}
          className={checkoutInputClass}
        />
      </CheckoutField>
      <CheckoutField id={fid("city")} label={fields.city.label} error={errors.city}>
        <Input
          {...fieldA11y(fid("city"), errors.city)}
          name="city"
          autoComplete="address-level2"
          aria-required="true"
          placeholder={fields.city.placeholder}
          className={checkoutInputClass}
        />
      </CheckoutField>
      <CheckoutField id={fid("postalCode")} label={fields.postalCode.label} error={errors.postalCode}>
        <Input
          {...fieldA11y(fid("postalCode"), errors.postalCode)}
          name="postalCode"
          inputMode="numeric"
          autoComplete="postal-code"
          aria-required="true"
          placeholder={fields.postalCode.placeholder}
          className={checkoutInputClass}
        />
      </CheckoutField>
      <CheckoutField
        id={fid("address")}
        label={fields.address.label}
        error={errors.address}
        className="lg:col-span-2"
      >
        <Textarea
          {...fieldA11y(fid("address"), errors.address)}
          name="address"
          rows={2}
          autoComplete="street-address"
          aria-required="true"
          placeholder={fields.address.placeholder}
          className={checkoutTextareaClass}
        />
      </CheckoutField>
      <CheckoutField id={fid("note")} label={fields.note.label} className="lg:col-span-2">
        <Textarea
          id={fid("note")}
          name="note"
          rows={2}
          placeholder={fields.note.placeholder}
          className={checkoutTextareaClass}
        />
      </CheckoutField>
    </div>
  )
}
