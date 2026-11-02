type ContactMapProps = {
  title: string
  /** URL embed Google Maps (`output=embed`, tanpa API key). */
  src: string
}

/** Peta lokasi tertanam. Dimuat malas supaya tidak memperlambat halaman. */
export function ContactMap({ title, src }: ContactMapProps) {
  return (
    <div className="h-[420px] overflow-hidden rounded-[5px] bg-surface max-md:h-[320px]">
      <iframe
        title={title}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="size-full border-0"
      />
    </div>
  )
}
