import React, { useState, useContext, useEffect } from "react"; //eslint-disable-line
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import { Form, Select, DatePicker, InputNumber, Button } from "antd"; //eslint-disable-line
import UserContext from "../contexts/UserContext";
import HometownContext from "../contexts/HometownContext";
import { getNeighbourhoods } from "../firebase/crudMethods.js"; //eslint-disable-line
import "../styles/containers/InviteFormContainer.css";
import moment from "moment"; //eslint-disable-line

const InviteFormContainer = () => {
  let history = useHistory(); //eslint-disable-line

  const [fetchedNeighbourhoods, setFetchedNeighbourhoods] = useState([]); //eslint-disable-line

  const [neighbourhoods, setNeighbourhoods] = useState([]); //eslint-disable-line

  const [user] = useContext(UserContext); //eslint-disable-line
  const [hometown] = useContext(HometownContext); //eslint-disable-line

  /* useEffect(() => {
    const fetchData = async () => {
      setFetchedNeighbourhoods(await getNeighbourhoods(hometown));
    };

    fetchData();
  }, [hometown]); */

  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="inviteForm">
      <Form
        onFinish={async () => {}}
        labelCol={{
          span: 7
        }}
        wrapperCol={{
          span: 15
        }}
        layout="vertical"
        initialValues={{
          size: componentSize
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        {/* multiple and searchable */}
        {/* <Form.Item label="Kvart" name="neighbourhood">
          <Select
            value={neighbourhood}
            onChange={(value) => setNeighbourhood(value.toString())}
          >
            {fetchedNeighbourhoods.map((neighbourhood) => (
              <Select.Option key={neighbourhood.id} value={neighbourhood.id}>
                {neighbourhood.data().displayName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item> */}

        {/* ranged time picker and date picker*/}
        {/* <Form.Item
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
            value={dateTime}
            onChange={(value) => setDateTime(value.toISOString())}
            disabledSeconds={() => {
              const seconds = [];
              for (let i = 0; i < 60; i++) {
                seconds.push(i);
              }

              return seconds;
            }}
           
          />
        </Form.Item> */}

        <div className="form-bottom">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Objavi
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default InviteFormContainer;
