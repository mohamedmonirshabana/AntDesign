// import 'antd/dist/rest.css';
import { useState } from 'react';
import './App.css';
import { Input } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

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
        <Input placeholder="Name" maxLength={10} type="password"></Input>
      </header>
    </div>
  );
}

export default App;
