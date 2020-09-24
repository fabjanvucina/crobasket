import React from "react";
import { Form, DatePicker } from "antd";
import moment from "moment";

const DateTimePickerContainer = ({ value, setValue }) => {
  return (
    <Form.Item
      label="Datum i vrijeme"
      name="dateTime"
      rules={[
        {
          required: true,
          message: "Molimo odaberite datum i vrijeme!"
        }
      ]}
    >
      <DatePicker
        format="DD/MM/YYYY HH:mm"
        placeholder=""
        value={value}
        onChange={(value) => setValue(value.toISOString())}
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
        showNow={false}
        showToday={true}
        showTime={{ defaultValue: moment("07:00", "HH:mm") }}
      />
    </Form.Item>
  );
};

export default DateTimePickerContainer;
