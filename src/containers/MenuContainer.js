import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "../styles/containers/LoginTabContainer.css";
import "../styles/containers/MenuContainer.css";
import "../styles/misc/Tab.css";
import "../styles/misc/Hide.css";

const MenuContainer = ({ hideMenu }) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="drawer">
        <Link to="/organiziraj-basket" className="link">
          <ListItem button key="TRAŽIM EKIPU">
            <ListItemText primary="TRAŽIM EKIPU" className="drawer-item" />
          </ListItem>
        </Link>
        <Link to="/organiziraj-basket" className="link">
          <ListItem button key="NEDOSTAJE MI IGRAČ/I">
            <ListItemText
              primary="NEDOSTAJE MI IGRAČ/I"
              className="drawer-item"
            />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  const anchor = "bottom";
  return (
    <div
      className={
        hideMenu === true ? "menu login-container hide" : "menu login-container"
      }
    >
      <MenuIcon
        fontSize="large"
        id="menu-icon"
        className="tab"
        onClick={toggleDrawer(anchor, true)}
      />
      <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        {list(anchor)}
      </SwipeableDrawer>
    </div>
  );
};

export default MenuContainer;
