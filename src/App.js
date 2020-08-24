import React, { useState } from "react";
import { render } from "react-dom";
import UserContext from "./contexts/UserContext";
import HometownContext from "./contexts/HometownContext";
import PageRouter from "./routers/PageRouter";
import "./style/style.css";

const App = () => {
  const userHook = useState({ isAuthenticated: false, displayName: "" });
  const hometownHook = useState("");
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
