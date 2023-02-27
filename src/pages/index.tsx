import {Table} from "@/components/molecule/Table";


const dataTitle = ['제목', '내용','가격', '체크']

const data = {
  content:[
    {
      id:0,
      isChecked:true,
      title:'asdfasfascdwqfc',
      body:'내용1',
      price:30000
    },
    {
      id:1,
      isChecked:true,
      title:'sadcfzxcvxzvzxv',
      body:'내용2',
      price:30000
    },
  ]
}

export default function Home() {

  return (
      <>
          <Table>
            <Table.Thead>
              <Table.Row>
                {dataTitle.map((item, index) => <Table.Cell key={index} header>{item}</Table.Cell>)}
              </Table.Row>
            </Table.Thead>
            <Table.Tbody>
              {data.content.map((item) =>
                  <Table.Row key={item.id}>
                    <Table.Cell>
                      {item.title}
                    </Table.Cell>
                    <Table.Cell>
                      {item.body}
                    </Table.Cell>
                    <Table.Cell>
                      {item.price}
                    </Table.Cell>
                    <Table.Cell>
                      {item.isChecked}
                    </Table.Cell>
                  </Table.Row>
              )}
            </Table.Tbody>
          </Table>
      </>
  )
}
