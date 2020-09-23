import React from "react";
import { Form, DatePicker } from "antd";

const { RangePicker } = DatePicker;

const DateRangePickerContainer = ({ value, setValue }) => {
  return (
    <Form.Item label="Datumi:" name="dateRange">
      <RangePicker
        format="DD/MM/YYYY"
        placeholder=""
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      />
    </Form.Item>
  );
};

export default DateRangePickerContainer;
