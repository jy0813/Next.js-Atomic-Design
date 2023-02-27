import {ReactNode} from "react";

export interface ITableHeader {
  children:ReactNode;
  className?: string;
}

export const TableHeader = ({children, className}:ITableHeader) => {
  return (
      <thead className={className}>
      {children}
      </thead>
  )
}