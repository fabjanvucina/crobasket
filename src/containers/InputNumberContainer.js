import React from "react";
import { Form, InputNumber } from "antd";

const InputNumberContainer = ({ value, setValue }) => {
  return (
    <Form.Item
      label="Nedostaje igrača"
      name="invitees"
      rules={[
        {
          required: true,
          message: "Molimo unesite broj igrača koji Vam nedostaje!"
        }
      ]}
    >
      <InputNumber
        min="0"
        max="9"
        value={value}
        onChange={(value) => setValue(value.toString())}
      />
    </Form.Item>
  );
};

export default InputNumberContainer;