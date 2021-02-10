import React, { useState, useContext, useEffect } from "react";
import { Form } from "antd";
import SelectMultipleContainer from "../SelectMultipleContainer/SelectMultipleContainer";
import DateRangePickerContainer from "../DateRangePickerContainer/DateRangePickerContainer";
import TimeRangePickerContainer from "../TimeRangePickerContainer/TimeRangePickerContainer";
import FormButtonContainer from "../FormButtonContainer/FormButtonContainer";
import HometownContext from "../../contexts/HometownContext";
import { getFilteredInvites } from "../../firebase/inviteMethods.js";
import { getNeighbourhoods } from "../../firebase/citiesMethods.js";
import "./InvitesFilterContainer.css";

const InvitesFilterContainer = ({ handleFilterRequest }) => {
  const [hometown] = useContext(HometownContext);

  const [neighbourhoods, setNeighbourhoods] = useState([]);
  const [dateRange, setDateRange] = useState([]);
  const [timeRange, setTimeRange] = useState([]);

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
        onFinish={async () => {
          handleFilterRequest(
            await getFilteredInvites(
              hometown,
              neighbourhoods,
              dateRange,
              timeRange
            )
          );
        }}
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
