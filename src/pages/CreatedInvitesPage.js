import React, { useState, useContext, useEffect } from "react";
import { Spin } from "antd";
import HeaderContainer from "../containers/HeaderContainer/HeaderContainer";
import Title from "../components/Title/Title";
import UserInvitesListContainer from "../containers/UserInvitesListContainer/UserInvitesListContainer";
import HometownContext from "../contexts/HometownContext";
import {
  getActiveCreatedInvites,
  getExpiredCreatedInvites
} from "../firebase/crudMethods.js";

const CreatedInvitesPage = () => {
  const [hometown] = useContext(HometownContext);

  const [activeCreatedInvites, setActiveCreatedInvites] = useState([]);
  const [expiredCreatedInvites, setExpiredCreatedInvites] = useState([]);
  const [loadingInvites, setLoadingInvites] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setActiveCreatedInvites(await getActiveCreatedInvites(hometown));
      setExpiredCreatedInvites(await getExpiredCreatedInvites(hometown));
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
        displayInvitesActive={false}
      />
      <Title value="Objavljene pozivnice" type="userInvites" />
      {loadingInvites ? (
        <Spin size="large" />
      ) : (
        <>
          <UserInvitesListContainer
            activeInvites={activeCreatedInvites}
            expiredInvites={expiredCreatedInvites}
            type="created"
          />
        </>
      )}
    </>
  );
};

export default CreatedInvitesPage;
