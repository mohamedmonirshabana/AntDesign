// import 'antd/dist/rest.css';
import { useState } from 'react';
import './App.css';
import { Button } from 'antd';
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
        <Button
          type="primary"
          block
          loading={loading}
          icon={<PoweroffOutlined />}
          className="my-button"
          onClick={onButtonClicked}
        >
          My First Button
        </Button>
      </header>
    </div>
  );
}

export default App;
