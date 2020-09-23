import React from "react";
import { Form, Select } from "antd";

const SelectMultipleContainer = ({
  value,
  setValue,
  fetchedNeighbourhoods
}) => {
  return (
    <Form.Item label="Lokacija:" name="neighbourhoods">
      <Select
        mode="multiple"
        allowClear
        value={value}
        onChange={(value) => {
          setValue(value)
        }}
      >
        {fetchedNeighbourhoods.map((neighbourhood) => (
          <Select.Option
            key={neighbourhood.id}
            value={neighbourhood.data().displayName}
          >
            {neighbourhood.data().displayName}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SelectMultipleContainer;
