// import 'antd/dist/rest.css';
import { useState } from 'react';
import './App.css';
import { Select } from 'antd';

function App() {
  const fruits = ['Banana', 'mango', 'orange', 'cherry'];
  return (
    <div className="App">
      <header className="App-header">
        <p>Which is your Favorite fruit?</p>
        <Select
          mode="multiple"
          maxTagCount={2}
          allowClear
          placeholder="Select Fruit"
          style={{ width: '50%' }}
        >
          {fruits.map((fruit, index) => {
            return (
              <Select.Option key={index} value={index}>
                {fruit}
              </Select.Option>
            );
          })}
        </Select>
      </header>
    </div>
  );
}

export default App;
