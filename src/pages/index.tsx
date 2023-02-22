import NoticeTemplates from "@/components/Template/NoticeTemplates";
import Table from "@/components/Organism/Table";



export default function Home() {

  return (
      <>
        <NoticeTemplates>
          <NoticeTemplates.Table>
            <NoticeTemplates.Table.Thead>
              <NoticeTemplates.Table.Thead.Row>
                <NoticeTemplates.Table.Thead.Row.Th/>
                <NoticeTemplates.Table.Thead.Row.Td/>
              </NoticeTemplates.Table.Thead.Row>
            </NoticeTemplates.Table.Thead>
            <NoticeTemplates.Table.Tbody>
              <NoticeTemplates.Table.Tbody.Row>
                <NoticeTemplates.Table.Tbody.Row.Th/>
                <NoticeTemplates.Table.Tbody.Row.Td/>
              </NoticeTemplates.Table.Tbody.Row>
            </NoticeTemplates.Table.Tbody>
          </NoticeTemplates.Table>
        </NoticeTemplates>
      </>
  )
}
