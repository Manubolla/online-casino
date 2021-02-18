import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  loginScreen: {
    display: "grid",
    placeItems: "center",
    background: "white",
    width: "300px",
    height: "150px",
  },
  modalCtn:{
    display: "flex",
    justifyContent: "center",
    margin: "10rem"
  },
  modalTitle:{
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase"
  },
  avatar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "15rem",
    fontSize: "18px",
  },
});
const Login = ({login, setLogin, balance, setBalance}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => setName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem("user", JSON.stringify(name));
    window.localStorage.setItem('balance', JSON.stringify(balance));
    setLogin(true);
    handleClose();
    return alert(`You are now Login as ${name}`);
  };
  const handleLogOut = () => {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('balance')
    setLogin(false)
    setBalance(100)
    return alert('Goodbye, hope you enjoy the game!')
  }
 
  return (
    <>
      {!login && <Button onClick={handleOpen}>Login</Button>}
      {login && (
        <div className={classes.avatar}>
          {`$${balance}`}
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Button onClick={handleLogOut}>Logout</Button>
        </div>
      )}
      <Modal open={open} onClose={handleClose} aria-labelledby="Login Screen" className={classes.modalCtn}>
        <div className={classes.loginScreen}>
          <form onSubmit={handleSubmit}>
            <h5 className={classes.modalTitle}>Log in</h5>
            <input type="text" required onChange={handleChange} />
            <Button type="submit">Confirm</Button>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default Login;
