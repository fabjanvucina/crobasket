import React from "react";
import { Form, Button } from "antd";

const FormButtonContainer = ({ value, color }) => {
  return (
    <div className="form-bottom">
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={color === "blue" ? "blue" : ""}
        >
          {value}
        </Button>
      </Form.Item>
    </div>
  );
};

export default FormButtonContainer;
