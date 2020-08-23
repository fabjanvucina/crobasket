import React, { useContext, useEffect, useState } from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import City from "../components//City";
import HometownContext from "../contexts/HometownContext";
import { getCities } from "../firebase/crudMethods.js";
import "../style/CitiesContainer.css";

const CitiesContainer = () => {
  const [cities, setCities] = useState([]);
  const [hometown, setHometown] = useContext(HometownContext); //eslint-disable-line

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCities = await getCities();
      setCities(fetchedCities);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setHometown("");
  }, [setHometown]);

  return (
    <div className="display-cities">
      {cities.map((city) => (
        <City
          key={city.id}
          name={city.data().displayName}
          imgSrc={city.data().imgUrl}
          onClick={() => {
            console.log("called setHometown(" + city.id + ")");
            setHometown(city.id);
          }}
        />
      ))}
    </div>
  );
};

export default CitiesContainer;
