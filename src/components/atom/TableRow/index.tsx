import {ReactNode} from "react";
import styles from './index.module.css';

export interface ITableRow {
  children?:ReactNode;
  className?: string;
}

export const TableRow = ({children}:ITableRow) => {
  return (
      <tr className={styles.tr}>
        {children}
      </tr>
  )
}