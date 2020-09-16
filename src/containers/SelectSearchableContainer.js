import React from "react";
import { Form, Select } from "antd";

/* TODO: searchable */

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
      <Select value={value} onChange={(value) => setValue(value.toString())}>
        {fetchedNeighbourhoods.map((neighbourhood) => (
          <Select.Option key={neighbourhood.id} value={neighbourhood.id}>
            {neighbourhood.data().displayName}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SelectSearchableContainer;
