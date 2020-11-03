import React from 'react';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons/lib/icons';
import { BASE_URL, REGISTER, URLS, USER_IS_EXIST } from '../constants';
import { openNotification } from '../notifications/showNotification';
import { getFetchOptions } from '../utils/getFetchOptions';
import md5 from 'md5-hash';
import CustomForm from '../components/CustomForm';
import CustomButton from '../components/CustomButton';
import { useHistory } from 'react-router-dom';

const formItemLayout = {
    labelCol: {span: 4},
    wrapperCol: {span: 8},
};

const Registration = () => {
    const history = useHistory();
    const isExist = (data) => {

        return !!data.length;
    };
    const onFinish = async values => {
        try {
            const {email, password} = values;
            const findDuplicate = await fetch(`${BASE_URL}/users?email=${email}`);
            const found = await findDuplicate.json();

            if (isExist(found)) {

                return openNotification(USER_IS_EXIST);
            }

            const registered = await fetch(`${BASE_URL}/users`, getFetchOptions("POST",
                {
                    email,
                    password: md5(password),
                    createdAt: new Date().toLocaleString()
                }
            ));

            if (registered.status === 201) {
                openNotification(REGISTER);
                history.push(URLS.login);
            }

        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <CustomForm
                formTitle="Sign Up"
                onFinish={onFinish}
            >
                <Form.Item
                    label="E-mail"
                    {...formItemLayout}
                    name="email"
                    rules={[
                        {required: true, message: 'Email required!'},
                        {type: 'email', message: 'The input is not valid E-mail!'}
                    ]}
                >
                    <Input prefix={<UserOutlined/>} placeholder="email"/>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Password"
                    hasFeedback
                    name="password"
                    rules={[{required: true, message: 'Password is required!'}]}
                >
                    <Input
                        prefix={<LockOutlined/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    name="confirm"
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({getFieldValue}) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input
                        prefix={<LockOutlined/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item {...formItemLayout}>
                    <CustomButton>
                        Register
                    </CustomButton>
                </Form.Item>
            </CustomForm>
        </>
    );
};

export default Registration;