import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";

const NotLogged = (props) => {
    const navigate = useNavigate()
  return (
    <div>
      <Dialog
        open={props.LoggedModalStatus}
        onClose={props.handleLoggedModalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"You are not logged in !"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Signup to artme or Login if you have an existing account
            to view more collections.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{color:"rgba(165, 42, 42, 1)"}} onClick={ () => {  navigate("/Art_me/login"); }}>login/signup</Button>
          <Button sx={{color:"rgba(165, 42, 42, 1)"}} onClick={props.handleLoggedModalClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NotLogged;
