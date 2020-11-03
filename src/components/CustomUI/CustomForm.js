import React from 'react';
import {Form} from "antd";

const CustomForm = ({
                        name,
                        className,
                        initialValues,
                        onFinish,
                        formTitle,
                        children
                    }) => {
    return (
        <Form
            name={name}
            className={className}
            initialValues={initialValues}
            onFinish={onFinish}
        >
            <h1>{formTitle}</h1>
            {children}
        </Form>
    );
};

export default CustomForm;