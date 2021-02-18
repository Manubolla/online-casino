import React from "react";
import Slot from "../Slot";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const randomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber) + 1;

const useStyles = makeStyles({
  machineContainer: {
    display: "grid",
    placeItems: "center",
    alignItems: "center",
    textAlign: "-webkit-center;",
    background: "white",
    width: "500px",
    height: "200px",
    border: "1px solid gold",
  },
  slotCtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  btnGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

const Machine = ({ handleClose, balance, setBalance, data, setData }) => {
  const classes = useStyles();

  const [slots, setSlots] = React.useState({
    first: "-",
    second: "-",
    third: "-",
  });
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [row, setRow] = React.useState(0);

  const Message = (severity, msg) => {
    setOpen(true);
    setType(severity);
    setMessage(msg);
  };
  const handleBalance = (type, slots) => {
    const day = (new Date()).getDate();
    const month = (new Date()).getMonth() + 1;
    const year = (new Date()).getFullYear();
    const user = JSON.parse(window.localStorage.getItem('user'));

    setData(oldData => {
      return {...oldData, rows: [...oldData.rows, {id: `${oldData.rows.length} - ${user}`, slots, time: `${day}/${month}/${year}`}]}
    })
    console.log(data)
    window.localStorage.setItem('data', JSON.stringify({...data, rows: [...data.rows, {id: `${data.rows.length} - ${user}`, slots, time: `${day}/${month}/${year}`}]}))
    if (row === 2) {
      setBalance(balance + 5);
      setRow(0);
      window.localStorage.setItem('balance', JSON.stringify(balance + 5)); 
      return Message("success", "Three in a row! Nice you win $5");
    } else if (type === "debug") {
      setBalance(balance + 10);
      window.localStorage.setItem('balance', JSON.stringify(balance + 10)); 
      setRow(row + 1);
      return Message("success", "Cheating using Debug but ill give you $10");
    } else if (type === "pair") {
      setBalance(balance + 0.5);
      window.localStorage.setItem('balance', JSON.stringify(balance + 0.5)); 
      setRow(row + 1);
      return Message("success", "Nice you win $0.5!");
    } else if (type === "777") {
      setBalance(balance + 10);
      window.localStorage.setItem('balance', JSON.stringify(balance + 10)); 
      setRow(row + 1);
      return Message("success", "Wow three 7's?! Nice you win $10!!");
    }
  };
  const handleDebug = () => {
    setSlots({ first: 7, second: 7, third: 7 });
    handleBalance("debug", 777);
  };

  const handlePlay = () => {
    const first = randomNumber(9);
    const second = randomNumber(9);
    const third = randomNumber(9);
    const slots = parseInt(`${first}${second}${third}`)
    setBalance(balance - 1)
    window.localStorage.setItem('balance', JSON.stringify(balance - 1)); 

    setSlots({ first, second, third });
    if (first === 7 && second === 7 && third === 7) {
      return handleBalance("777", slots );
    } else if (first === second || second === third || first === third) {
        console.log("hola")
      return handleBalance("pair", slots);
    } else {
      setRow(0);
    }
  };
  return (
    <div className={classes.machineContainer}>
      <div className={classes.slotCtn}>
        <Slot id={1} number={slots.first} />
        <Slot id={2} number={slots.second} />
        <Slot id={3} number={slots.third} />
      </div>
      <div className={classes.btnGroup}>
        <Button onClick={handlePlay}>Play!</Button>
        <Button onClick={handleDebug}>777</Button>
        <Button onClick={handleClose}>Finish game!</Button>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
      >
        <Alert severity={type}>{message}</Alert>
      </Snackbar>
    </div>
  );
};

export default Machine;
