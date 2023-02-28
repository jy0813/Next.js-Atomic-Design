import React from 'react';
import {Table} from "@/components/molecule/Table";
import {TableRow} from "@/components/atom/TableRow";
import {TableCell} from "@/components/atom/TableCell";

const dataTitle = ['No','이메일','이름','권한','정지']

interface IData {
  no: number;
  email: string;
  name: string;
  admin: string;
  isChecked: boolean;
}

const data: IData[] = [
  {
    no: 1,
    email: "test@naver.com",
    name: "김테스트",
    admin: '최고관리자',
    isChecked: false,
  },
  {
    no: 2,
    email: "test2@naver.com",
    name: "박테스트",
    admin: '회원',
    isChecked: true,
  },
  {
    no: 3,
    email: "test3@naver.com",
    name: "이테스트",
    admin: '최고관리자',
    isChecked: false,
  },
];


function TableMember() {
  const renderRow = (item: IData, index: number) => {
    return (
        <TableRow key={index}>
          <TableCell>{item.no}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.admin}</TableCell>
          <TableCell>{item.isChecked ? 'Y' : 'N'}</TableCell>
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