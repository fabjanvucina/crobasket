import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";
import CityCard from "../components/CityCard";
import HometownContext from "../contexts/HometownContext";
import "../styles/containers/CitiesListContainer.css";

const CitiesListContainer = ({ fetchedCities, loadingCities }) => {
  let history = useHistory();

  const [hometown, setHometown] = useContext(HometownContext); //eslint-disable-line

  return (
    <div className="display-cities">
      {loadingCities ? (
        <Spin size="large" />
      ) : fetchedCities.length === 0 ? (
        <div className="no-cities">
          Nažalost, došlo je do pogreške prilikom dohvaćanja gradova.
        </div>
      ) : (
        <>
          {fetchedCities.map((city) => (
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
          ))}
          {/* <FooterContainer /> */}
        </>
      )}
    </div>
  );
};

export default CitiesListContainer;
