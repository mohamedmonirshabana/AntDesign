// import 'antd/dist/rest.css';
import { useState } from 'react';
import './App.css';
import { Input } from 'antd';
import { UserOutlined, EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';

function App() {
  const [loading, setLoading] = useState(false);
  const onButtonClicked = (e) => {
    console.log('Button Clicked');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Input.Search
          placeholder="Name"
          maxLength={10}
          prefix={<UserOutlined />}
          allowClear
        ></Input.Search>
      </header>
    </div>
  );
}

export default App;
