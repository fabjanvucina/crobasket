import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import { Spin } from "antd";
import HeaderContainer from "../containers/HeaderContainer";
import Title from "../components/Title";
import UserInvitesListContainer from "../containers/UserInvitesListContainer";
import HometownContext from "../contexts/HometownContext";
import {
  getActiveAcceptedInvites,
  getExpiredAcceptedInvites
} from "../firebase/crudMethods.js";

const AcceptedInvitesPage = () => {
  const [hometown] = useContext(HometownContext);

  const [activeAcceptedInvites, setActiveAcceptedInvites] = useState([]);
  const [expiredAcceptedInvites, setExpiredAcceptedInvites] = useState([]);
  const [loadingInvites, setLoadingInvites] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setActiveAcceptedInvites(await getActiveAcceptedInvites(hometown));
      setExpiredAcceptedInvites(await getExpiredAcceptedInvites(hometown));
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
      <Title value="Prihvaćene pozivnice" type="userInvites" />
      {loadingInvites ? (
        <Spin size="large" />
      ) : (
        <UserInvitesListContainer
          activeInvites={activeAcceptedInvites}
          expiredInvites={expiredAcceptedInvites}
          type="accepted"
        />
      )}
    </>
  );
};

export default AcceptedInvitesPage;
