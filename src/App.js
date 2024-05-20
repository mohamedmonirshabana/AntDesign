// import 'antd/dist/rest.css';
import { useState } from 'react';
import './App.css';
import { Form, Input, Button, message, Alert } from 'antd';

function App() {
  const [showAlert, setshowAlert] = useState(false);
  const onFinish = (e) => {
    console.log(e);
    setTimeout(() => {
      setshowAlert(true);
      // message.success('Log in sucess');
      // message.error('Login failed');
      // message.warning('Login failed');
    }, 2000);
  };
  return (
    <div className="App">
      <header className="App-header">
        {showAlert && (
          <Alert
            type="error"
            message="Error"
            description="There is error in password"
            closable
          />
        )}
        <Form onFinish={onFinish}>
          <Form.Item label="user Name" name="username">
            <Input placeholder="UserName" required></Input>
          </Form.Item>
          <Form.Item label="Password" name="passwword">
            <Input.Password placeholder="Password" required></Input.Password>
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
