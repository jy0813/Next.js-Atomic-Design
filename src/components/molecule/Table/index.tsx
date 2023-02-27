import {TableHeader} from "@/components/atom/TableHeader";
import {TableBody} from "@/components/atom/TableBody";
import {TableRow} from "@/components/atom/TableRow";
import {TableCell} from "@/components/atom/TableCell";
import {ReactNode} from "react";

export interface ITable<T> {
  className?: string;
  data:T[];
  columns:string[];
  renderRow: (item: T, index: number) => ReactNode;
}

export const Table = <T extends unknown>({className, columns, data, renderRow}:ITable<T>) => {
  return(
      <table className={`table${className ? `${className}` : ''}`}>
        <Table.Thead columns={columns}/>
        <Table.Tbody data={data} renderRow={renderRow}/>
      </table>
  )
}

Table.Thead = TableHeader;
Table.Tbody = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;