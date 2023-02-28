import {ReactNode} from "react";
import styles from './index.module.css';

export interface ITableCell{
  children?:ReactNode,
  header?:boolean;
}
export const TableCell = ({children, header}:ITableCell) => {
  const TableCell = header ? 'th' : 'td';
  return (
    <TableCell className={styles.cell}>
      {children}
    </TableCell>
  )
}