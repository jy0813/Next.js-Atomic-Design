import {ReactNode} from "react";

interface ITh {
  children?:ReactNode
  text?:string | number;
}


export default function TableHeaderCell({children, text}:ITh) {
  return (
      <th>
        {text}
        {children}
      </th>
  )
}
