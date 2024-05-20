// import 'antd/dist/rest.css';
import { useState } from 'react';
import './App.css';
import { Form, Input, Button } from 'antd';

function App() {
  const onFinish = (e) => {
    console.log(e);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Form onFinish={onFinish}>
          <Form.Item label="user Name" name="username">
            <Input placeholder="user name" required></Input>
          </Form.Item>
          <Form.Item label="password" name="userpassword">
            <Input.Password placeholder="user userpassword"></Input.Password>
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
}

export default App;
