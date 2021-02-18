import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
  footer: {
    marginTop: "1rem",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    alignItems: "center",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.footer}>
      <Toolbar className={classes.toolBar}>
        copyright © 2021 by Manuel Bolla Agrelo
      </Toolbar>
    </AppBar>
  );
};
export default Footer;
