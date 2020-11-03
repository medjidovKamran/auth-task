import React from 'react';
import { Form } from 'antd';

const CustomForm = ({
  name,
  className,
  layout = 'vertical',
  initialValues,
  onFinish,
  formTitle,
  labelAlign,
  children,
}) => {
  return (
    <Form
      name={name}
      layout={layout}
      className={className}
      initialValues={initialValues}
      onFinish={onFinish}
      labelAlign={labelAlign}
    >
      <h1>{formTitle}</h1>
      {children}
    </Form>
  );
};

export default CustomForm;
