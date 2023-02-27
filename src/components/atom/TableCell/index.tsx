import {ReactNode} from "react";

export interface ITableCell{
  children?:ReactNode,
  header?:boolean;
}
export const TableCell = ({children, header}:ITableCell) => {
  const TableCell = header ? 'th' : 'td';
  return (
    <TableCell>
      {children}
    </TableCell>
  )
}