// import 'antd/dist/rest.css';
import { useEffect, useState } from 'react';
import './App.css';
import { Table, Button, Modal, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: 'John',
      email: 'Johan@itcodx.com',
      address: 'Johan Address',
    },
    {
      id: 2,
      name: 'Adam',
      email: 'Adam@google.com',
      address: 'Adam Address',
    },
    {
      id: 3,
      name: 'Jolia',
      email: 'Jolia@Microsoft.com',
      address: 'Jolia Address',
    },
    {
      id: 4,
      name: 'Kate',
      email: 'kate@yahoo.com',
      address: 'kate Address',
    },
  ]);
  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: '2',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: '3',
      title: 'Email',
      dataIndex: 'email',
    },
    {
      key: '4',
      title: 'Address',
      dataIndex: 'address',
    },
    {
      key: '5',
      title: 'Actions',
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
              style={{ fontSize: '18px', color: 'blue', margin: '0 8px' }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ fontSize: '18px', color: 'red', margin: '0 8px' }}
            />
          </>
        );
      },
    },
  ];
  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1e9);
    const newStudent = [
      {
        id: randomNumber,
        name: 'Name ' + randomNumber,
        email: randomNumber + '@google.com',
        address: 'Address ' + randomNumber,
      },
    ];
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: 'Are you want to Delete This Student',
      okText: 'Yes',
      okType: 'danger',
      onOK: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={onAddStudent}>Add a new Studet</Button>
        <Table dataSource={dataSource} columns={columns}></Table>
        <Modal
          title="Edit Student"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
            setIsEditing(false);
          }}
          onOk={() => {
            setIsEditing(false);
          }}
        >
          <Input
            value={editingStudent?.name}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.email}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <Input
            value={editingStudent?.address}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
}

export default App;
