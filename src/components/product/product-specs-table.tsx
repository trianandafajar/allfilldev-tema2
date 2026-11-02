export type ProductSpecsTableProps = {
  rows: { label: string; value: string }[]
}

/** Tabel "Informasi Tambahan" berbingkai (`table table-bordered`). */
export function ProductSpecsTable({ rows }: ProductSpecsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="mb-4 w-full border-collapse align-top text-heading">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row" className="border border-line p-2 text-left font-normal">
                {row.label}
              </th>
              <td className="border border-line p-2">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
