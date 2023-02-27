import React from 'react';
import {Table} from "@/components/molecule/Table";
import {TableRow} from "@/components/atom/TableRow";
import {TableCell} from "@/components/atom/TableCell";

const dataTitle = ['제목','내용','가격','체크']

interface IData {
  id: number;
  title: string;
  body: string;
  price: number;
  isChecked: boolean;
}

const data: IData[] = [
  {
    id: 1,
    title: "Product 1",
    body: "This is product 1",
    price: 100,
    isChecked: false,
  },
  {
    id: 2,
    title: "Product 2",
    body: "This is product 2",
    price: 200,
    isChecked: true,
  },
  {
    id: 3,
    title: "Product 3",
    body: "This is product 3",
    price: 300,
    isChecked: false,
  },
];


function TableMember() {
  const renderRow = (item: IData, index: number) => {
    return (
        <TableRow key={item.id}>
          <TableCell>{item.title}</TableCell>
          <TableCell>{item.body}</TableCell>
          <TableCell>{item.price}</TableCell>
          <TableCell>{item.isChecked ? 'true' : 'false'}</TableCell>
        </TableRow>
    );
  };

  return (
      <>
        <Table data={data} columns={dataTitle} renderRow={renderRow}/>
      </>
  );
}

export default TableMember;