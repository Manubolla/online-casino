import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { DataGrid } from '@material-ui/data-grid';
import Machine from "../Machine";

const useStyles = makeStyles({
    modalMain: {
        display: "grid",
        placeItems: "center",
        textAlign: "-webkit-center",
    },
    wrapper:{
        minHeight:"100%",
    }
});
const StartGame = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(props.data.rows)
  return (
    <div className={classes.wrapper}>
    <div style={{ height: 500, width: '50%', marginTop: '2rem'}}>
      <DataGrid rows={props.data.rows} columns={props.data.columns} pageSize={7} />
    </div>
      <Button onClick={handleOpen}>Start a game!</Button>
      <Modal className={classes.modalMain} open={open} onClose={handleClose} aria-labelledby="Slot Machine">
        <Machine handleClose={handleClose} balance={props.balance} setBalance={props.setBalance} data={props.data} setData={props.setData}/>
      </Modal>
    </div>
  );
};
export default StartGame;
