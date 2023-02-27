import {ReactNode} from "react";
import {TableRow} from "@/components/atom/TableRow";
import {TableCell} from "@/components/atom/TableCell";

export interface ITableHeader {
  className?: string;
  columns:string[];
}

export const TableHeader = ({className, columns}:ITableHeader) => {
  return (
      <thead className={className}>
        <TableRow>
          {columns.map((column, index) => (
              <TableCell header key={index}>{column}</TableCell>
          ))}
        </TableRow>
      </thead>
  )
}