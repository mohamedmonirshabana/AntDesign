// import 'antd/dist/rest.css';
import { useState } from 'react';
import './App.css';
import { Progress } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Progress percent={33} />
        <Progress percent={33} type="circle" />
        <Progress percent={33} type="line" strokeColor="red" />
        <Progress percent={33} type="line" strokeColor="red" strokeWidth={50} />
        <Progress percent={33} type="line" strokeColor="red" status="active" />
        <Progress percent={33} type="circle" status="success" />
        <Progress percent={33} type="circle" status="exception" />
        <Progress percent={33} type="line" status="success" />
        <Progress percent={33} type="line" status="success" steps={3} />
      </header>
    </div>
  );
}

export default App;
