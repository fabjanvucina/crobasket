import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";
import CityCard from "../components/CityCard";
import HometownContext from "../contexts/HometownContext";
import { getCities } from "../firebase/crudMethods.js";
import "../styles/containers/CitiesListContainer.css";

const CitiesListContainer = () => {
  let history = useHistory();
  const [fetchedCities, setFetchedCities] = useState([]);
  const [loadingCities, setLoadingCities] = useState(true);

  const [hometown, setHometown] = useContext(HometownContext); //eslint-disable-line

  useEffect(() => {
    const fetchData = async () => {
      setFetchedCities(await getCities());
      setLoadingCities(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.removeItem("hometown");
    setHometown("");
  }, [setHometown]);

  return (
    <div className="display-cities">
      {loadingCities ? (
        <Spin size="large" />
      ) : (
        fetchedCities.map((city) => (
          <CityCard
            key={city.id}
            name={city.data().displayName}
            imgSrc={city.data().imgUrl}
            onClick={() => {
              localStorage.setItem("hometown", city.data().displayName);
              setHometown(city.data().displayName);
              history.push("/profil");
            }}
          />
        ))
      )}
    </div>
  );
};

export default CitiesListContainer;
