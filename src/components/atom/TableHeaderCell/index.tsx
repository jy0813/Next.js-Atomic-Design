import {ITh} from "@/atoms/tableState";

export default function TableHeaderCell({children, text}:ITh) {
  return (
      <th>
        {text}
        {children}
      </th>
  )
}
