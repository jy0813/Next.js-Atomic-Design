import {ReactNode} from "react";

export interface ITable {
  children:ReactNode
}

export interface ITableHeader {
  children:ReactNode
}

export interface ITableBody {
  children:ReactNode
}

export interface ITableRow {
  children?:ReactNode
}

export interface ITd {
  children?:ReactNode
  text?:string | number;
}

export interface ITh {
  children?:ReactNode
  text?:string | number;
}
