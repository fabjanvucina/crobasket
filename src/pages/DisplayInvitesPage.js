import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";
import InvitesFilterContainer from "../containers/InvitesFilterContainer";
import InvitesListContainer from "../containers/InvitesListContainer";
import HometownContext from "../contexts/HometownContext";
import { getEligibleInvites } from "../firebase/crudMethods.js";

const DisplayInvitesPage = () => {
  const [hometown] = useContext(HometownContext);

  const [fetchedInvites, setFetchedInvites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setFetchedInvites(await getEligibleInvites(hometown));
    };

    fetchData();
  }, [hometown]);

  return (
    <>
      <HeaderContainer
        hideOptions={false}
        hideMenu={false}
        hideLogin={false}
        createInvitesActive={false}
        displayInvitesActive={true}
      />
      <InvitesFilterContainer handleFilterRequest={setFetchedInvites} />
      <InvitesListContainer fetchedInvites={fetchedInvites} />
    </>
  );
};

export default DisplayInvitesPage;
