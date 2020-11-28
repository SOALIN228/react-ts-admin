import React, { useEffect, useState } from 'react';
import FncButton from './components/fnc-button';
import axios from 'axios';
import { Button, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './App.less';

const { SubMenu } = Menu;

const App: React.FC<unknown> = props => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('e.target', e.target);
    console.log('e.currentTarget', e.currentTarget);
  };

  const [current, setCurrent] = useState('mail');

  const handleClick = (e: any) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  useEffect(() => {
    axios.post('/business/dt/get', {}).then(res => {
      console.log('res', res);
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1> 123</h1>
      <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
        <Menu.Item key='mail' icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key='app' disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu key='SubMenu' icon={<SettingOutlined />} title='Navigation Three - Submenu'>
          <Menu.ItemGroup title='Item 1'>
            <Menu.Item key='setting:1'>Option 1</Menu.Item>
            <Menu.Item key='setting:2'>Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title='Item 2'>
            <Menu.Item key='setting:3'>Option 3</Menu.Item>
            <Menu.Item key='setting:4'>Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key='alipay'>
          <a href='https://ant.design' target='_blank' rel='noopener noreferrer'>
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
      <FncButton onClick={onClick}>btn</FncButton>
      <Button type='primary'>Button</Button>
    </div>
  );
};

export default App;
