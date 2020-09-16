import React from "react";
import { Form, TimePicker } from "antd";

const { RangePicker } = TimePicker;

const TimeRangePickerContainer = ({ value, setValue }) => {
  return (
    <Form.Item label="Vrijeme:" name="timeRange">
      <RangePicker
        placeholder=""
        value={value}
        onChange={(value) => setValue(value ? value.toString() : "")}
        disabledSeconds={() => {
          const seconds = [];
          for (let i = 0; i < 60; i++) {
            seconds.push(i);
          }

          return seconds;
        }}
        disabledMinutes={() => {
          const minutes = [];
          for (let i = 0; i < 60; i++) {
            if (i !== 0 && i !== 15 && i !== 30 && i !== 45) {
              minutes.push(i);
            }
          }

          return minutes;
        }}
        disabledHours={() => {
          const hours = [];
          for (let i = 0; i < 24; i++) {
            if (i <= 6 || i == 23) {
              hours.push(i);
            }
          }

          return hours;
        }}
        hideDisabledOptions={true}
      />
    </Form.Item>
  );
};

export default TimeRangePickerContainer;
