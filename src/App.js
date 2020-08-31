import React, { useState } from "react";
import { render } from "react-dom";
import UserContext from "./contexts/UserContext";
import HometownContext from "./contexts/HometownContext";
import PageRouter from "./routers/PageRouter";
import "antd/dist/antd.dark.css";
import "./style/style.css";

const App = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const displayName = localStorage.getItem("displayName");
  const uid = localStorage.getItem("uid");
  const hometown = localStorage.getItem("hometown");

  const userHook = useState({
    isAuthenticated: isAuthenticated ? true : false,
    displayName: isAuthenticated ? displayName : "",
    uid: isAuthenticated ? uid : ""
  });
  const hometownHook = useState(hometown ? hometown : "");
  console.log("is authenticated: ", isAuthenticated ? true : false);

  return (
    /* <React.StrictMode> */
    <UserContext.Provider value={userHook}>
      <HometownContext.Provider value={hometownHook}>
        <PageRouter />
      </HometownContext.Provider>
    </UserContext.Provider>
    /* </React.StrictMode> */
  );
};

render(<App />, document.getElementById("root"));
