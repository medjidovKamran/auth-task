import React from 'react';
import {notification} from "antd";
import {USER_IS_EXIST, LOGIN, REGISTER} from "../constants/constants";

export const openNotification = (value) => {
    switch (value) {
        case REGISTER:
            return notification.success({
                message: 'Registration completed successfully!',
                description: 'Now you can log in.',
            });
        case LOGIN:
            return notification.success({
                message: 'Authorization was successful',
            });
            case USER_IS_EXIST:
            return notification.warning({
                message: 'The user exists.',
                description: 'Try to find a different nickname.',
            });
    }

};