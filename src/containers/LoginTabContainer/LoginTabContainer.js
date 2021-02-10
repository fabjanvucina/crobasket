import React, { useContext } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import LoggedInDisplay from "../../components/LoginStatusDisplay/LoggedInDisplay";
import LoggedOutDisplay from "../../components/LoginStatusDisplay/LoggedOutDisplay";
import "./LoginTabContainer.css";
import "../../styles/Tab.css";
import "../../styles/Hide.css";

const LoginTabContainer = ({ hideLogin, profileActive }) => {
  const [user] = useContext(UserContext);

  return (
    <Link to={user.isAuthenticated ? "/profil" : "/prijava"} className="link">
      <div
        id="login-container"
        className={
          hideLogin === true
            ? "login-container hide"
            : profileActive === true
            ? "login-container tab tab-active"
            : "login-container tab"
        }
      >
        {user.isAuthenticated ? (
          <LoggedInDisplay displayName={user.displayName} />
        ) : (
          <LoggedOutDisplay />
        )}
        <AccountCircleIcon id="login-icon" />
      </div>
    </Link>
  );
};

export default LoginTabContainer;
