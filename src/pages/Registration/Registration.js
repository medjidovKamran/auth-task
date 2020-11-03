import React from 'react';
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from "@ant-design/icons/lib/icons";
import {BASE_URL, REGISTER, USER_IS_EXIST} from "../../constants/constants";
import {openNotification} from "../../notifications/showNotification";
import {getFetchOptions} from "../../utils/getFetchOptions";
import md5 from 'md5-hash'
import CustomForm from "../../components/CustomForm/CustomForm";

const formItemLayout = {
    labelCol: {span: 4},
    wrapperCol: {span: 8},
};

const Registration = () => {

    const isExist = (data) => {
        return !!data.length
    }

    const onFinish = async values => {
        try {
            const {username, password} = values;
            const findDuplicate = await fetch(`${BASE_URL}/users?username=${username}`)
            const found = await findDuplicate.json()
            if (isExist(found)) {

                return openNotification(USER_IS_EXIST)
            }
            const registered = await fetch(`${BASE_URL}/users`, getFetchOptions("POST",
                {
                    username,
                    password: md5(password),
                    createdAt: new Date().toLocaleString()
                }
            ))
            if (registered.status === 201) {
                openNotification(REGISTER)
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <CustomForm
                formTitle="Registration"
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
            >
                <Form.Item
                    {...formItemLayout}
                    name="username"
                    rules={[{required: true, message: 'Username required!'}]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="password"
                    rules={[{required: true, message: 'Password is required!'}]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item {...formItemLayout}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Sign in
                    </Button>
                </Form.Item>
            </CustomForm>
        </>
    );
};

export default Registration;