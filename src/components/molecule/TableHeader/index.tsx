import {ITableHeader} from "@/atoms/tableState";

export default function TableHeader({children}:ITableHeader) {
  return (
      <thead>{children}</thead>
  );
}
