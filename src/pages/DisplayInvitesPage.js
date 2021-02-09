import React, { useContext, useState, useEffect } from "react";
import HeaderContainer from "../containers/HeaderContainer/HeaderContainer";
import InvitesFilterContainer from "../containers/InvitesFilterContainer/InvitesFilterContainer";
import InvitesListContainer from "../containers/InvitesListContainer/InvitesListContainer";
import HometownContext from "../contexts/HometownContext";
import { getEligibleInvites } from "../firebase/crudMethods.js";

const DisplayInvitesPage = () => {
  const [hometown] = useContext(HometownContext);

  const [fetchedInvites, setFetchedInvites] = useState([]);
  const [loadingInvites, setLoadingInvites] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setFetchedInvites(await getEligibleInvites(hometown));
      setLoadingInvites(false);
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
      <InvitesListContainer
        fetchedInvites={fetchedInvites}
        loadingInvites={loadingInvites}
      />
    </>
  );
};

export default DisplayInvitesPage;
