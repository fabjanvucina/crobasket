import React from "react";
import { Form, Select } from "antd";

const SelectSearchableContainer = ({
  value,
  setValue,
  fetchedNeighbourhoods
}) => {
  return (
    <Form.Item
      label="Kvart"
      name="neighbourhood"
      rules={[{ required: true, message: "Molimo odaberite kvart!" }]}
    >
      <Select
        showSearch={true}
        value={value}
        onChange={(value) => setValue(value.toString())}
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

export default SelectSearchableContainer;
