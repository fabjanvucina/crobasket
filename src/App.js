import React, { useState, useContext } from "react"; //eslint-disable-line
import app from "./firebase/firebase.js"; //eslint-disable-line
import { render } from "react-dom";
import UserContext from "./contexts/UserContext"; //eslint-disable-line
import HometownContext from "./contexts/HometownContext";
import PageRouter from "./routers/PageRouter";
import "./style/style.css";

const App = () => {
  /* const [user] = useContext(UserContext);
  const userHook = useState({
    isAuthenticated: user.isAuthenticated ? true : false,
    displayName: user.displayName ? user.displayName : ""
  }); */
  let authState = {};
  if (localStorage.getItem("isAuthenticated")) {
    authState = {
      isAuthenticated: true,
      displayName: localStorage.getItem("displayName")
    };
  } else {
    authState = { isAuthenticated: false, displayName: "" };
  }

  const hometownHook = useState("");

  return (
    <React.StrictMode>
      <UserContext.Provider value={authState}>
        <HometownContext.Provider value={hometownHook}>
          <PageRouter />
        </HometownContext.Provider>
      </UserContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
