import React from 'react';
import md5 from 'md5-hash';

import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons/lib/icons';
import { BASE_URL, SIGN_IN, URLS, WRONG_DATA } from '../constants';
import { openNotification } from '../notifications/showNotification';
import { useHistory } from 'react-router-dom';
import CustomForm from '../components/CustomForm';
import CustomButton from '../components/CustomButton';

const formItemLayout = {
    labelCol: {span: 4},
    wrapperCol: {span: 8},
};

const Login = ({setState}) => {
    const history = useHistory();

    const onFinish = async (values) => {
        const {email, password} = values;
        try {
            const authorization = await fetch(`${BASE_URL}/users?email=${email}`);
            const user = await authorization.json();
            if (md5(password) === user[0].password) {
                await setState(prevState => ({...prevState, user: {...user[0]}, isLogged: true}));
                history.push(URLS.profile);
                openNotification(SIGN_IN);
            }

        } catch (e) {
            console.log(e);
            openNotification(WRONG_DATA);
        }
    };

    return (
        <>
            <CustomForm
                formTitle="Sign in"
                onFinish={onFinish}
                labelAlign="left"
            >
                <Form.Item
                    {...formItemLayout}
                    label="Email"
                    name="email"
                    rules={[
                        {required: true, message: 'Email required!'},
                        {type: 'email', message: 'The input is not valid E-mail!'}
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="email"/>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Password"
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
    );
};

export default Login;