import React, { useState, useEffect } from "react";
import HeaderContainer from "../containers/HeaderContainer/HeaderContainer";
import CitiesListContainer from "../containers/CitiesListContainer/CitiesListContainer";
import Title from "../components/Title/Title";
import { getCities } from "../firebase/crudMethods.js";

const CitiesPage = () => {
  const [fetchedCities, setFetchedCities] = useState([]);
  const [loadingCities, setLoadingCities] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setFetchedCities(await getCities());
      setLoadingCities(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <HeaderContainer
        hideOptions={true}
        hideMenu={true}
        hideLogin={true}
        createInvitesActive={false}
        displayInvitesActive={false}
      />
      <Title value="Odaberi grad" type="cityPage" />
      <CitiesListContainer
        fetchedCities={fetchedCities}
        loadingCities={loadingCities}
      />
    </>
  );
};

export default CitiesPage;
