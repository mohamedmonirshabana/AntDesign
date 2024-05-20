// import 'antd/dist/rest.css';
import { useEffect, useState } from 'react';
import './App.css';
// import { Table, Tag } from 'antd';
import Icon, {
  AppleFilled,
  BankTwoTone,
  LoadingOutlined,
  PieChartFilled,
} from '@ant-design/icons';
import { Divider } from 'antd';

function App() {
  const HardtIcon = (props) => {
    return (
      <Icon
        component={() => {
          return <svg></svg>;
        }}
        {...props}
      />
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <PieChartFilled style={{ color: 'purple', fontSize: '62px' }} />
          <AppleFilled style={{ color: 'green', fontSize: '62px' }} />
          <LoadingOutlined
            rotate={45}
            style={{ color: 'red', fontSize: '62px' }}
          />
          <BankTwoTone twoToneColor="green" style={{ fontSize: '62px' }} />
          <Divider />
        </div>
      </header>
    </div>
  );
}

export default App;
