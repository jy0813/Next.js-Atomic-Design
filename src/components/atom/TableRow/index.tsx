import {ReactNode} from "react";

export interface ITableRow {
  children?:ReactNode;
  className?: string;
}

export const TableRow = ({children}:ITableRow) => {
  return (
      <tr>
        {children}
      </tr>
  )
}