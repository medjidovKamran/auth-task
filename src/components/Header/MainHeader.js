import React from 'react';
import {Layout, Menu} from "antd";
import {NavLink, useLocation} from "react-router-dom";
import {URLS} from "../../constants/constants";

const {Header} = Layout;

const MainHeader = ({state, setState}) => {
    let location = useLocation()

    return (
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={location.pathname}>
                {state.isLogged
                    ? <Menu.Item
                        onClick={() => setState({isLogged: false})}
                        key={location.key}>
                        Sign out
                    </Menu.Item>
                    : <>
                        <Menu.Item key={URLS.login}>
                            <NavLink to={URLS.login}>Sign in</NavLink>
                        </Menu.Item>
                        <Menu.Item key={URLS.register}>
                            <NavLink to={URLS.register}>Sign up</NavLink>
                        </Menu.Item>
                    </>
                }


            </Menu>
        </Header>
    );
};

export default MainHeader;