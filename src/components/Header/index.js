import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Avatar, makeStyles } from "@material-ui/core";
import { Button, IconButton, Toolbar } from "@material-ui/core";
import Login from "../Login";

const useStyles = makeStyles({
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  btn: {
    display: "flex",
    justifyContent: "flex-end",
  },
  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "10rem",
    fontSize: "18px",
  },
});
const Header = (props) => {
  const classes = useStyles();

  return (
    <header>
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <IconButton edge="start" color="white">
          <img
            src="https://www.paktolus.com/wp-content/uploads/2017/12/paktolus-logo.png"
            alt="logo"
            width="150"
            heigth="150"
          />
        </IconButton>
        <Login
          login={props.login}
          balance={props.balance}
          setLogin={props.setLogin}
          setBalance={props.setBalance}
        />
      </Toolbar>
    </AppBar>
    </header>
  );
};
export default Header;
