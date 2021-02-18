import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  slot: {
      margin: "1rem",
      border: "2px solid #d37815",
      padding: "2rem",
      fontSize: "24px",
      backgroundColor: '#e4e978',
      color: '#556052',
      borderRadius: '1rem'
  },
});

const Slot = ({ id, number }) => {
  const classes = useStyles();
  return <div className={classes.slot} id={id}>{number} </div>;
};
export default Slot;
