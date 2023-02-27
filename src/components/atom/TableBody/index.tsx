import {ReactNode} from "react";

export interface ITableBody<T> {
  className?: string;
  data:T[];
  renderRow:(item:T, index:number) => ReactNode;
}


export const TableBody = <T extends unknown>({className, data, renderRow}:ITableBody<T>) => {
  return (
      <tbody className={className}>
      {data.map(renderRow)}
      </tbody>
  )
}