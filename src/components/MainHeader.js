import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';
import { SIGN_OUT, URLS } from '../utils/constants';
import { openNotification } from '../utils/showNotification';

const { Header } = Layout;

const MainHeader = ({ state, setState, location }) => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
        <Menu.Item key={URLS.home}>
          <NavLink to={URLS.home}>Home</NavLink>
        </Menu.Item>
        {state.isLogged ? (
          <>
            <Menu.Item key={URLS.profile}>
              <NavLink to={URLS.profile}>Profile</NavLink>
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                setState({ isLogged: false });
                openNotification(SIGN_OUT);
              }}
              key={location.key}
            >
              Sign out
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key={URLS.login}>
              <NavLink to={URLS.login}>Sign in</NavLink>
            </Menu.Item>
            <Menu.Item key={URLS.register}>
              <NavLink to={URLS.register}>Sign up</NavLink>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Header>
  );
};

export default withRouter(MainHeader);
