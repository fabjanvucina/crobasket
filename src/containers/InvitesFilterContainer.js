import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import { Form } from "antd"; //eslint-disable-line
import SelectMultipleContainer from "./SelectMultipleContainer";
import DateRangePickerContainer from "./DateRangePickerContainer";
import TimeRangePickerContainer from "./TimeRangePickerContainer";
import FormButtonContainer from "./FormButtonContainer";
import UserContext from "../contexts/UserContext";
import HometownContext from "../contexts/HometownContext";
import { getNeighbourhoods } from "../firebase/crudMethods.js";
import "../styles/containers/InvitesFilterContainer.css";

const InvitesFilterContainer = () => {
  let history = useHistory(); //eslint-disable-line

  const [user] = useContext(UserContext); //eslint-disable-line
  const [hometown] = useContext(HometownContext);

  const [neighbourhoods, setNeighbourhoods] = useState([]);
  const [dateRange, setDateRange] = useState("");
  const [timeRange, setTimeRange] = useState("");

  const [fetchedNeighbourhoods, setFetchedNeighbourhoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setFetchedNeighbourhoods(await getNeighbourhoods(hometown));
    };

    fetchData();
  }, [hometown]);

  return (
    <div className="filtersForm">
      <Form
        onFinish={async () => {}}
        labelCol={{
          span: 10
        }}
        wrapperCol={{
          span: 24
        }}
        layout="vertical"
      >
        <SelectMultipleContainer
          value={neighbourhoods}
          setValue={setNeighbourhoods}
          fetchedNeighbourhoods={fetchedNeighbourhoods}
        />
        <DateRangePickerContainer value={dateRange} setValue={setDateRange} />
        <TimeRangePickerContainer value={timeRange} setValue={setTimeRange} />
        <FormButtonContainer value="Filtriraj" color="blue" />
      </Form>
    </div>
  );
};

export default InvitesFilterContainer;
