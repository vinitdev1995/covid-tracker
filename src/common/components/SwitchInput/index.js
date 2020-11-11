import React from "react";
import { Form, Switch } from "antd";
export const CustomSwitchInput = props => {
  const { name, checked, handleChange, label, isLabelPadding } = props;
  return (
    <Form.Item label={label} className={`${isLabelPadding && "label-padding"}`}>
      <Switch
        size="small"
        name={name}
        checked={checked}
        onChange={handleChange}
      />
    </Form.Item>
  );
};
