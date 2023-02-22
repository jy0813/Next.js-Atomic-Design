import {ITd} from "@/atoms/tableState";

export default function TableCell({children, text}:ITd) {
  return (
      <td>
        {text}
        {children}
      </td>
  );
}
