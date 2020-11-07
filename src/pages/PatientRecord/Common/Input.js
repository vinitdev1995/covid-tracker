import React from "react";
import { Form, Input } from "antd";
export const CustomInput = props => {
  const { label, value, onChange, name } = props;
  return (
    <Form.Item label={label}>
      <Input name={name} value={value} onChange={onChange} />
    </Form.Item>
  );
};
