import React from 'react';
import {Button} from "antd";

const CustomButton = ({
                          htmlType = "submit",
                          type = "primary",
                          className,
                          ...props
                      }) => {
    return (
        <Button {...props} type={type} htmlType={htmlType} className={className}>
            Sign in
        </Button>
    );
};

export default CustomButton;