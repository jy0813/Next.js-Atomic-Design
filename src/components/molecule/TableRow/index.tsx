import {ITableRow} from "@/atoms/tableState";

export default function TableRow({children}:ITableRow) {
  return (
      <tr>{children}</tr>
  );
}
