// import 'antd/dist/rest.css';
import { useEffect, useState } from 'react';
import './App.css';
import { Table, Tag } from 'antd';

function App() {
  const [alreadySelectedRows, setAlreadySelectedRows] = useState(['1', '3']);
  const columns = [
    {
      title: 'Student ID',
      dataIndex: 'id',
    },
    {
      title: 'Student Name',
      dataIndex: 'name',
    },
    {
      title: 'Student Grade',
      dataIndex: 'grade',
      render: (tag) => {
        const color = tag.includes('A')
          ? 'Green'
          : tag.includes('B')
          ? 'Blue'
          : tag.includes('C')
          ? 'Yellow'
          : tag.includes('D')
          ? 'Tomato'
          : tag.includes('F')
          ? 'Red'
          : '';
        return (
          <Tag color={color} key={tag}>
            {tag}
          </Tag>
        );
      },
    },
  ];
  const dataSource = [
    {
      key: '1',
      id: 1,
      name: 'Student 1',
      grade: 'A+',
    },
    {
      key: '2',
      id: 2,
      name: 'Student 2',
      grade: 'A+',
    },
    {
      key: '3',
      id: 3,
      name: 'Student 3',
      grade: 'C+',
    },
    {
      key: '4',
      id: 4,
      name: 'Student 4',
      grade: 'B+',
    },
    {
      key: '4',
      id: 4,
      name: 'Student 4',
      grade: 'F+',
    },
    {
      key: '5',
      id: 5,
      name: 'Student 5',
      grade: 'A+',
    },
    {
      key: '6',
      id: 6,
      name: 'Student 6',
      grade: 'D+',
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: alreadySelectedRows,
            onChange: (keys) => {
              setAlreadySelectedRows(keys);
            },
            onSelect: (record) => {
              console.log({ record });
            },
          }}
        ></Table>
      </header>
    </div>
  );
}

export default App;
