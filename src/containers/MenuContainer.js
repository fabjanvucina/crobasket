import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "../style/LoginContainer.css";
import "../style/Tab.css";
import "../style/Hide.css";
import "../style/MenuContainer.css";

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
        {["TRAŽIM EKIPU", "NEDOSTAJE MI IGRAČ/I"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} className="drawer-item" />
          </ListItem>
        ))}
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
