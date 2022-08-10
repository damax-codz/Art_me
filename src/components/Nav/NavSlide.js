import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import {  Box, IconButton, Slide,  } from "@mui/material";
import "./NavSlide.scss"
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const NavSlide = (props) => {
  return (
    <div>
      <Dialog
        fullScreen
        open={props.openSideNavValue}
        onClose={props.closeSideNav}
        TransitionComponent={Transition}
        sx={{
          "& .MuiDialog-container": {
            display: "flex",
            justifyContent: "flex-end",
            "& .MuiPaper-root": {
              width: "40%",
              maxWidth: "568px",
            },
          },
          background: "rgba(229,229,229,0.4)",
          display: { md: "none" },
        }}
      >
        <Box
          color="default"
          elevation={1}
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
          }}
        >
          <Box className="mainpage-logo">
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <IconButton aria-label="close"  onClick={props.closeSideNav} sx={{width:"50px",height:"50px"}}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        <Box className="nav-slide-links">
            <Link to="Artme/home" onClick={props.closeSideNav} className='links'>Home</Link>
            <Link to="Artme/home"  onClick={props.closeSideNav} className='links'>Artist</Link>
            <Link to="Artme/gallery"  onClick={props.closeSideNav} className='links'>Shop</Link>
            <Link to="Artme/home"  onClick={props.closeSideNav} className='links'>About</Link>
            <Link to="Artme/signup"  onClick={props.closeSideNav} className='links'>Login</Link>
            <Link to="Artme/signup"  onClick={props.closeSideNav} className='links'>Signup</Link>
        </Box>
      </Dialog>
    </div>
  );
};

export default NavSlide;
