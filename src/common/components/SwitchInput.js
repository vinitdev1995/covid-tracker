import React from "react";
import { Form, Switch } from "antd";
export const CustomSwitchInput = props => {
  const { name, checked, handleChange, label } = props;
  return (
    <Form.Item label={label}>
      <Switch
        size="small"
        name={name}
        checked={checked}
        onChange={handleChange}
      />
    </Form.Item>
  );
};
