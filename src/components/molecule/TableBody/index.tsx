import {ITableBody} from "@/atoms/tableState";

export default function TableBody({children}:ITableBody) {
  return (
      <tbody>{children}</tbody>
  );
}
