import { notification } from 'antd';
import { USER_IS_EXIST, SIGN_IN, REGISTER, WRONG_DATA, SIGN_OUT } from './constants';

export const openNotification = (value) => {
  switch (value) {
    case REGISTER:
      return notification.success({
        message: 'Registration completed successfully!',
        description: 'Now you can log in.',
      });
    case SIGN_IN:
      return notification.success({
        message: 'Authorization was successful',
      });
    case USER_IS_EXIST:
      return notification.warning({
        message: 'Such mail already exists.',
        description: 'Try to use another email.',
      });
    case WRONG_DATA:
      return notification.error({
        message: 'Something went wrong.',
        description: 'It seems that you entered incorrect email / password information',
      });
    case SIGN_OUT:
      return notification.info({
        message: 'You are logged out.',
      });
    default:
      return null;
  }
};
