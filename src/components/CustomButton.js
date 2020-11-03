import React from 'react';
import { Button } from 'antd';

const CustomButton = ({
                          htmlType = "submit",
                          type = "primary",
                          className,
                          children,
                          ...props
                      }) => {
    return (
        <Button {...props} type={type} htmlType={htmlType} className={className}>
            {children}
        </Button>
    );
};

export default CustomButton;