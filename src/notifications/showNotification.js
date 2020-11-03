import {notification} from "antd";
import {USER_IS_EXIST, LOGIN, REGISTER, WRONG_DATA} from "../constants/constants";

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
        case WRONG_DATA:

            return notification.error({
                message: 'Something went wrong.',
                description: 'It seems that you entered incorrect login / password information',
            });
    }

};