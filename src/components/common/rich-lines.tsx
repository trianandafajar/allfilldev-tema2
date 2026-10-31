import { Fragment } from "react"

export type RichSegment = string | { accent: string }

/** Satu baris teks: string biasa, atau potongan yang boleh memuat kata beraksen. */
export type RichLine = string | readonly RichSegment[]

type RichLinesProps = {
  lines: readonly RichLine[]
  /** Kelas untuk kata beraksen (padanan `<span>` warna aksen pada judul). */
  accentClassName?: string
}

/** Teks multibaris (pemisah `<br />`) dengan kata beraksen opsional, untuk judul dan deskripsi. */
export function RichLines({ lines, accentClassName }: RichLinesProps) {
  return lines.map((line, lineIndex) => (
    <Fragment key={lineIndex}>
      {lineIndex > 0 ? <br /> : null}
      {typeof line === "string"
        ? line
        : line.map((segment, segmentIndex) =>
            typeof segment === "string" ? (
              <Fragment key={segmentIndex}>{segment}</Fragment>
            ) : (
              <span key={segmentIndex} className={accentClassName}>
                {segment.accent}
              </span>
            )
          )}
    </Fragment>
  ))
}
