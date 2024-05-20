// import 'antd/dist/rest.css';
import { useState } from 'react';
import './App.css';
import { DatePicker, TimePicker } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DatePicker picker="quarter" disabled />
        <DatePicker.RangePicker picker="month" />
        <TimePicker />
      </header>
    </div>
  );
}

export default App;
