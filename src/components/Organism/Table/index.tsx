import {ReactNode} from "react";
import TableHeader from "@/components/Molecule/TableHeader";
import TableBody from "@/components/Molecule/TableBody";


interface ITable {
  children:ReactNode
}

export default function Table({children}:ITable) {
  return (
      <table>
        {children}
      </table>
  )
}

Table.Thead = TableHeader
Table.Tbody = TableBody
