import React from 'react';
import {Form, Input} from 'antd';
import {UserOutlined, LockOutlined} from "@ant-design/icons/lib/icons";
import {BASE_URL, REGISTER, USER_IS_EXIST} from "../../constants/constants";
import {openNotification} from "../../notifications/showNotification";
import {getFetchOptions} from "../../utils/getFetchOptions";
import md5 from 'md5-hash'
import CustomForm from "../../components/CustomUI/CustomForm";
import CustomButton from "../../components/CustomUI/CustomButton";

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
                formTitle="Sign Up"
                onFinish={onFinish}
            >
                <Form.Item
                    {...formItemLayout}
                    name="username"
                    rules={[{required: true, message: 'Username required!'}]}
                >
                    <Input prefix={<UserOutlined/>} placeholder="Username"/>
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="password"
                    rules={[{required: true, message: 'Password is required!'}]}
                >
                    <Input
                        prefix={<LockOutlined/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item {...formItemLayout}>
                    <CustomButton>
                        Sign up
                    </CustomButton>
                </Form.Item>
            </CustomForm>
        </>
    );
};

export default Registration;