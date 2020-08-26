import React, { useState } from "react";
import { render } from "react-dom";
import UserContext from "./contexts/UserContext";
import HometownContext from "./contexts/HometownContext";
import PageRouter from "./routers/PageRouter";
import "./style/style.css";

const App = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated"); //on app render, instead of user state, we're reading from localStorage which persists regardless of refresh
  const displayName = localStorage.getItem("displayName");
  const userHook = useState({
    isAuthenticated: isAuthenticated ? true : false,
    displayName: isAuthenticated ? displayName : ""
  });
  const hometownHook = useState("");
  console.log("is authenticated: ", isAuthenticated ? true : false);

  return (
    <React.StrictMode>
      <UserContext.Provider value={userHook}>
        <HometownContext.Provider value={hometownHook}>
          <PageRouter />
        </HometownContext.Provider>
      </UserContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
