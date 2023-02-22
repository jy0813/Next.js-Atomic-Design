import Table from "@/components/Organism/Table";
import {ReactNode} from "react";

interface NoticeProps {
  children?:ReactNode
}

export default function NoticeTemplates({children}: NoticeProps) {
  return (
      <div>{children}</div>
  )
}

NoticeTemplates.Table = Table;