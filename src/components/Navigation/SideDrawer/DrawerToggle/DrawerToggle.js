import React from "react";
import { Squash as Hamburger } from "hamburger-react";

import classes from "./DrawerToggle.module.css";

const drawerToggle = (props) => {
  const isOpen = false;

  return (
    <div className={classes.DrawerToggle}>
      <Hamburger toggled={isOpen} toggle={props.clicked} />
    </div>
  );
};

export default drawerToggle;
