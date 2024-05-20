// import 'antd/dist/rest.css';
import { useEffect, useState } from 'react';
import './App.css';
import { Table } from 'antd';

function App() {
  const [loading, setLoading] = useState(false);
  const [datSource, setDataSource] = useState([]);

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
    },
    {
      key: '3',
      title: 'Status',
      dataIndex: 'completed',
      render: (completed) => {
        return <p>{completed ? 'complete' : 'In progress'}</p>;
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
        ></Table>
      </header>
    </div>
  );
}

export default App;
