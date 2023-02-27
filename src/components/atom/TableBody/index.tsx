import {ReactNode} from "react";

export interface ITableBody {
  children:ReactNode;
  className?: string;
}


export const TableBody = ({children, className}:ITableBody) => {
  return (
      <tbody className={className}>
      {children}
      </tbody>
  )
}