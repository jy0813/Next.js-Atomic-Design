import React, {ReactNode} from 'react';
import TableRow from "@/components/Molecule/TableRow";
import TableHeader from "@/components/Molecule/TableHeader";

interface ITableBody {
  children:ReactNode
}

export default function TableBody({children}:ITableBody) {
  return (
      <tbody>{children}</tbody>
  );
}

TableBody.Row = TableRow;