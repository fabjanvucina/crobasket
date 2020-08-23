import React, { useState, useEffect } from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import City from "./City"; //eslint-disable-line
import { getCities } from "../firebase/crudMethods.js"; //eslint-disable-line
import "../style/CitiesContainer.css";

const CitiesContainer = () => {
  const [cities, setCities] = useState([]); //eslint-disable-line

  useEffect(() => {
    async () => {
      console.log("about to fetch");
      const fetchedCities = await getCities();
      setCities(fetchedCities);
      console.log("am alive");
    };
  }, []);

  return (
    <div className="display-cities">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <City key={n} />
      ))}
      {/* {cities.map((city) => (
        <City
          key={city.id}
          name={city.data().displayName}
          imgSrc={city.data().imgUrl}
        />
      ))} */}
    </div>
  );
};

export default CitiesContainer;

//i need to fetch the cities array from the database and then map its displayName and imgURl into the city component
