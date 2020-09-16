import React from "react";
import { Form, Button } from "antd";

const FormButtonContainer = ({ value }) => {
  return (
    <div className="form-bottom">
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {value}
        </Button>
      </Form.Item>
    </div>
  );
};

export default FormButtonContainer;
