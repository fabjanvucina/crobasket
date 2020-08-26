import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import City from "../components//City";
import HometownContext from "../contexts/HometownContext";
import { getCities } from "../firebase/crudMethods.js";
import "../style/CitiesContainer.css";

const CitiesContainer = () => {
  let history = useHistory();
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
            setHometown(city.id);
            history.push("/profil");
          }}
        />
      ))}
    </div>
  );
};

export default CitiesContainer;
