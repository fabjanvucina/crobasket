import React, { useState, useContext } from "react";
import app from "./firebase/firebase.js"; //eslint-disable-line
import { render } from "react-dom";
import UserContext from "./contexts/UserContext";
import HometownContext from "./contexts/HometownContext";
import PageRouter from "./routers/PageRouter";
import "./style/style.css";

const App = () => {
  const [user] = useContext(UserContext);
  const userHook = useState({
    isAuthenticated: user.isAuthenticated ? true : false,
    displayName: user.isAuthenticated ? user.displayName : ""
  });
  const hometownHook = useState("");

  /* console.log(
    "firebase says you're: ",
    app.auth().currentUser ? "logged in" : "logged out"
  ); */
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
