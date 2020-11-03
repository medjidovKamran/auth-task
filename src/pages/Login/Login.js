import React from 'react';
import md5 from 'md5-hash'

import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined} from "@ant-design/icons/lib/icons";
import {BASE_URL, LOGIN, URLS, WRONG_DATA} from "../../constants/constants";
import {openNotification} from "../../notifications/showNotification";
import {useHistory} from "react-router-dom";
import CustomForm from "../../components/CustomUI/CustomForm";
import CustomButton from "../../components/CustomUI/CustomButton";

const formItemLayout = {
    labelCol: {span: 4},
    wrapperCol: {span: 8},
};

const Login = ({setState}) => {
    const history = useHistory();

    const onFinish = async (values) => {
        const {username, password} = values;
        try {
            const authorization = await fetch(`${BASE_URL}/users?username=${username}`)
            const user = await authorization.json()
            if (md5(password) === user[0].password) {
                await setState(prevState => ({...prevState, user: {...user[0]}, isLogged: true}))
                history.push(URLS.home)
                openNotification(LOGIN)
            }

        } catch (e) {
            console.log(e)
            openNotification(WRONG_DATA)
        }
    }

    return (
        <>
            <CustomForm
                formTitle="Sign in"
                onFinish={onFinish}
            >
                <Form.Item
                    {...formItemLayout}
                    name="username"
                    rules={[{required: true, message: 'Please input your Username!'}]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="password"
                    rules={[{required: true, message: 'Please input your Password!'}]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item {...formItemLayout}>
                    <CustomButton>
                        Log in
                    </CustomButton>
                </Form.Item>
            </CustomForm>
        </>
    )
};

export default Login;