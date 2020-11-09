import React from "react";
import { Form, Select } from "antd";
export const CustomSelectInput = props => {
  const { label, value, onChange, name, options, mode, error } = props;
  return (
    <Form.Item label={label}>
      <Select name={name} value={value} onChange={onChange} mode={mode || ""}>
        {(options || []).map(x => (
          <Select.Option value={x} key={x}>
            {x}
          </Select.Option>
        ))}
      </Select>
      <span className="text-danger">{error}</span>
    </Form.Item>
  );
};
