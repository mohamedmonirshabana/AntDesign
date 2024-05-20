// import 'antd/dist/rest.css';
import { useState } from 'react';
import './App.css';
import { Button, Spin } from 'antd';

function App() {
  const [spinPlay, setSpinPlay] = useState(true);
  const changeSpin = () => {
    setSpinPlay((preValue) => !preValue);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Spin spinning={spinPlay}></Spin>
        <Button onClick={changeSpin}>Toggle Button</Button>
        <Spin spinning={spinPlay}>
          <p>P tag 1</p>
          <p>P tag 2</p>
          <p>P tag 3</p>
        </Spin>
      </header>
    </div>
  );
}

export default App;
