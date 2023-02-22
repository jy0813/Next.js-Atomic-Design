import React, {ReactNode} from 'react';
import TableRow from "@/components/Molecule/TableRow";

interface ITableHeader {
  children:ReactNode
}

export default function TableHeader({children}:ITableHeader) {
  return (
      <thead>{children}</thead>
  );
}

TableHeader.Row = TableRow;
