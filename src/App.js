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
      key: '5',
      id: 5,
      name: 'Student 5',
      grade: 'F+',
    },
    {
      key: '6',
      id: 6,
      name: 'Student 6',
      grade: 'A+',
    },
    {
      key: '7',
      id: 7,
      name: 'Student 7',
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
            // getCheckboxProps: (record) => ({
            //   disabled: record.grade === 'C+',
            // }),
            hideSelectAll: false,
            selections: [
              Table.SELECTION_NONE,
              Table.SELECTION_ALL,
              Table.SELECTION_INVERT,
              {
                key: 'even',
                text: 'Select Even Rows',
                onSelect: (allKeys) => {
                  const selectedKeys = allKeys.filter((key) => {
                    return key % 2 === 0;
                  });
                  setAlreadySelectedRows(selectedKeys);
                },
              },
              {
                key: 'odd',
                text: 'Select ODD Rows',
                onSelect: (allKeys) => {
                  const selectedKeys = allKeys.filter((key) => {
                    return key % 2 != 0;
                  });
                  setAlreadySelectedRows(selectedKeys);
                },
              },
              {
                key: 'excellent',
                text: 'Select Excellent Rows',
                onSelect: (allKeys) => {
                  const selectedKeys = allKeys.filter((key) => {
                    const isExcellent = dataSource.find((student) => {
                      return student.key === key && student.grade.includes('A');
                    });
                    return isExcellent;
                  });
                  setAlreadySelectedRows(selectedKeys);
                },
              },
            ],
          }}
        ></Table>
      </header>
    </div>
  );
}

export default App;
