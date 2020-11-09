import React from "react";
import { DatePicker, Form } from "antd";
export const DataPickerInput = props => {
  const { handleChange, label, error } = props;
  return (
    <Form.Item label={label}>
      <DatePicker onChange={handleChange} />
      <span className="text-danger">{error}</span>
    </Form.Item>
  );
};
