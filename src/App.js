// import 'antd/dist/rest.css';
import { useState } from 'react';
import './App.css';
import { Table } from 'antd';

function App() {
  const data = [
    { name: 'Name1', age: 20, address: 'Address 1', kay: '1' },
    { name: 'Name2', age: 21, address: 'Address 2', kay: '2' },
    { name: 'Name3', age: 22, address: 'Address 3', kay: '3' },
    { name: 'Name4', age: 23, address: 'Address 4', kay: '4' },
    { name: 'Name5', age: 24, address: 'Address 5', kay: '5' },
    { name: 'Name6', age: 25, address: 'Address 6', kay: '6' },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'key',
      render: (name) => {
        return <a>{name}</a>;
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'key',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'key',
    },
    {
      title: 'Granduated',
      key: 'key',
      render: (payload) => {
        return <p>{payload.age > 20 ? 'True' : 'false'}</p>;
      },
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Table dataSource={data} columns={columns}></Table>
      </header>
    </div>
  );
}

export default App;
