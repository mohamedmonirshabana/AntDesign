// import 'antd/dist/rest.css';
import { useEffect, useState } from 'react';
import './App.css';
import { Table } from 'antd';

function App() {
  const [loading, setLoading] = useState(false);
  const [datSource, setDataSource] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setDataSource(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: '2',
      title: 'user Id',
      dataIndex: 'userId',
      sorter: (record1, record2) => {
        return record1.userId > record2.userId;
      },
    },
    {
      key: '3',
      title: 'Status',
      dataIndex: 'completed',
      render: (completed) => {
        return <p>{completed ? 'complete' : 'In progress'}</p>;
      },
      filters: [
        { text: 'Complete', value: true },
        { text: 'In Prograss', value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Table
          loading={loading}
          columns={columns}
          dataSource={datSource}
          pagination={{
            current: page,
            pageSize: pageSize,
            total: 500,
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
          }}
        ></Table>
      </header>
    </div>
  );
}

export default App;
