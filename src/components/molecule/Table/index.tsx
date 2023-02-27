import {TableHeader} from "@/components/atom/TableHeader";
import {TableBody} from "@/components/atom/TableBody";
import {TableRow} from "@/components/atom/TableRow";
import {TableCell} from "@/components/atom/TableCell";
import {ReactNode} from "react";

export interface ITable {
  children:ReactNode;
  className?: string;
}

export const Table = ({children, className}:ITable) => {
  return(
      <table className={`table${className ? `${className}` : ''}`}>
        {children}
      </table>
  )
}

Table.Thead = TableHeader;
Table.Tbody = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;