import React, { useEffect, useState } from 'react';
import FncButton from './components/fnc-button';
import { postTest, getTest } from './api/demo';
import { connect } from 'react-redux';
import { RootState, Dispatch } from './store';
import { Button, Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import './App.less';

const { SubMenu } = Menu;

const mapState = (state: RootState) => ({
  username: state.app,
});
const mapDispatch = (dispatch: Dispatch) => ({});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

const App: React.FC<Props> = props => {
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
    // post 请求demo
    postTest().then(res => {
      if (res) console.log('res', res);
    });
    // get 请求demo
    // getTest({ id: 100, name: 'sss' }).then(res => {
    //   if (res) console.log('res', res);
    // });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
        <Menu.Item key='mail' icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key='app' disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu
          key='SubMenu'
          icon={<SettingOutlined />}
          title='Navigation Three - Submenu'
        >
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
          <a
            href='https://ant.design'
            target='_blank'
            rel='noopener noreferrer'
          >
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
      <FncButton onClick={onClick}>btn</FncButton>
      <Button type='primary'>Button</Button>
    </div>
  );
};

export default connect(mapState, mapDispatch)(App);
