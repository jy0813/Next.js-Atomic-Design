import {ReactNode} from "react";
import TableHeader from "@/components/molecule/TableHeader";
import TableBody from "@/components/molecule/TableBody";
import TableRow from "@/components/molecule/TableRow";
import TableCell from "@/components/atom/TableCell";
import TableHeaderCell from "@/components/atom/TableHeaderCell";
import {ITable} from "@/atoms/tableState";

function TableMain({children}:ITable) {
  return (
      <table>
        {children}
      </table>
  )
}

export const Table = Object.assign(TableMain, {
  Thead:TableHeader,
  Tbody:TableBody,
  Tr:TableRow,
  Th:TableHeaderCell,
  Td:TableCell,
})
