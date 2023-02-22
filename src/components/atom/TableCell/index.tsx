import React, {ReactNode} from 'react';

interface ITd {
  children?:ReactNode
  text?:string | number;
}

export default function TableCell({children, text}:ITd) {
  return (
      <td>
        {text}
        {children}
      </td>
  );
}
