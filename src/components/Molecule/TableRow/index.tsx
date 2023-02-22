import React, {ReactNode} from 'react';
import TableCell from "@/components/atom/TableCell";
import TableHeaderCell from "@/components/atom/TableHeaderCell";

interface ITableRow {
  children?:ReactNode
}

export default function TableRow({children}:ITableRow) {
  return (
      <tr>{children}</tr>
  );
}

TableRow.Th = TableHeaderCell;
TableRow.Td = TableCell;
