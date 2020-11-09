import React from "react";
import { DatePicker, Form } from "antd";
export const DataPickerInput = props => {
  const { handleChange, label } = props;
  return (
    <Form.Item label={label}>
      <DatePicker onChange={handleChange} />
    </Form.Item>
  );
};
