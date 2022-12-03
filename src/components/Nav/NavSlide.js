import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Typography,
} from "@mui/material";
import "./NavSlide.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { loggedOut } from "../../redux/Logged";
import { useDispatch } from "react-redux";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const NavSlide = (props) => {
  const navigate = useNavigate();
  const { logvalue } = useSelector((state) => state.logged);
  const { userdetails } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState("");

  // if (userdetails !== [] && userdetails[0].profileImg) {
  //   setProfile(userdetails[0].profileImg); //problem
  // }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    userdetails === [] ?  setProfile("") :  setProfile(userdetails[0].profileImg) 
  }, []);

  return (
    <div>
      {logvalue ? (
        <>
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
                  width: "100%",
                },
                "& .css-m9glnp-MuiPaper-root-MuiDialog-paper": {
                  backgroundColor: "#ffffff",
                },
              },

              background: "rgba(229,229,229,0.4)",
              display: { md: "none" },
            }}
          >
            <Box
              // color="default"
              elevation={1}
              // sx={{
              //   display: "grid",
              //   gridTemplateColumns: "1fr 1fr",
              //   alignItems: "center",
              // }}
              className="nav-slide-container"
            >
              <Box className="nav-buttons">
                <Box sx={{ display: "flex", alignItem: "center" }}>
                  <Box>
                    {profile ? (
                      <Avatar
                        aria-controls={openMenu ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openMenu ? "true" : undefined}
                        onClick={handleClick}
                        sx={{ cursor: "pointer" }}
                        src={profile}
                      ></Avatar>
                    ) : (
                      <Avatar
                        aria-controls={openMenu ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openMenu ? "true" : undefined}
                        onClick={handleClick}
                        sx={{ cursor: "pointer" }}
                      >
                        <PersonOutlineIcon
                          sx={{ fontSize: "30px", color: "black" }}
                        />
                      </Avatar>
                    )}
                    <Menu
                      id="basic-menu"
                      className="menu"
                      anchorEl={anchorEl}
                      open={openMenu}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem
                        onClick={() => {
                          navigate("/Art_me/profile");
                          handleClose();
                        }}
                        className="menu_item"
                      >
                        Profile
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleClose();
                          dispatch(loggedOut());
                          navigate("/Art_me/home");
                        }}
                        className="menu_item"
                      >
                        Logout
                      </MenuItem>
                    </Menu>
                  </Box>

                  <Button variant="contained" className="log-nav-main-btn">
                    upload
                  </Button>
                </Box>

                <Box className="nav-search">
                  <IconButton className="icon">
                    <SearchIcon />
                  </IconButton>
                  <input
                    className="input-field"
                    type="text"
                    placeHolder="Search"
                  />
                </Box>
              </Box>

              <Box
                sx={{ display: "flex", justifyContent: "end", width: "20%" }}
              >
                <IconButton
                  aria-label="close"
                  onClick={props.closeSideNav}
                  size="large"
                  sx={{ width: "50px" }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>

            <Box className="nav-slide-links">
              <Link
                to="/Art_me/home"
                onClick={props.closeSideNav}
                className="links"
              >
                Home
              </Link>
              <hr />
              <Link
                to="/Art_me/home"
                onClick={props.closeSideNav}
                className="links"
              >
                Find Artist
              </Link>
              <hr />
              <Link
                to="/Art_me/gallery"
                onClick={props.closeSideNav}
                className="links"
              >
                Gallery
              </Link>
              <hr />

              <Link
                to="/Art_me/home"
                onClick={props.closeSideNav}
                className="links"
              >
                About
              </Link>
              <hr />

              <Box
                className="btns"
                sx={{ display: logvalue ? "none" : "flex" }}
              >
                <Link
                  to="/Art_me/login"
                  className="nav-slide-btn-link"
                  onClick={props.closeSideNav}
                >
                  <Button variant="outlined" className="nav-btn">
                    Login
                  </Button>
                </Link>
                <Link
                  to="/Art_me/signup"
                  className="nav-slide-btn-link"
                  onClick={props.closeSideNav}
                >
                  <Button variant="contained" className="nav-btn signup-btn">
                    Signup
                  </Button>
                </Link>
              </Box>
            </Box>

            <Box
              className="profile_left_navslide"
              // sx={{
              //   display: { xs: "none", lg: "flex" },
              //   width: { xs: "0%", lg: "20%" },
              // }}
            >
              <Typography className="left_nav_title">MENU</Typography>
              <Typography className="left_nav_link"> Home</Typography>
              <Typography className="left_nav_link">Discussion</Typography>
              <Typography className="left_nav_link">Friends</Typography>
              <Typography className="left_nav_link">Event</Typography>
              <Typography className="left_nav_link">Videos</Typography>
              <Typography className="left_nav_link">Photos</Typography>
              <Typography className="left_nav_link">Files</Typography>
              <Typography className="left_nav_title">YOUR FAVORITES</Typography>
              <Typography className="left_nav_link">Lorem 1</Typography>
              <Typography className="left_nav_link">Lorem 2</Typography>
              <Typography className="left_nav_link">Lorem 3</Typography>
              <Typography className="left_nav_link">Lorem 4</Typography>
              <Typography className="left_nav_link">Lorem 5</Typography>
              <Typography className="left_nav_link">Lorem 6</Typography>
              <Typography className="left_nav_link">Lorem 7</Typography>
            </Box>

            <Box
              className="profile_right_navslide"
              // sx={{
              //   display: { xs: "none", lg: "flex" },
              //   width: { xs: "0%", lg: "20%" },
              // }}
            >
              <Typography className="right_nav_title">YOUR PAGES</Typography>
              <Box className="page_following">
                <Avatar sx={{ width: 35, height: 35 }}>M</Avatar>
                <Typography className="page_name">Mollitia aut</Typography>
              </Box>
              <Box className="page_following">
                <Avatar sx={{ bgcolor: "rgb(247, 148, 0)" }}>N</Avatar>
                <Typography className="page_name">Nisi aliquid</Typography>
              </Box>
              <Box className="page_following">
                <Avatar sx={{ bgcolor: "rgb(203, 16, 16)" }}>O</Avatar>
                <Typography className="page_name">Oistinctio Param</Typography>
              </Box>
              <Box className="page_following">
                <Avatar sx={{ bgcolor: "rgb(247, 148, 0)" }}>N</Avatar>
                <Typography className="page_name">Napita</Typography>
              </Box>

              <Typography className="right_nav_title">YOUR CONTACT</Typography>

              <Box className="page_following">
                <Avatar sx={{ width: 35, height: 35 }}>B</Avatar>
                <Typography className="page_name">Bhadmus Damilola</Typography>
              </Box>

              <Box className="page_following">
                <Avatar sx={{ width: 35, height: 35 }}>E</Avatar>
                <Typography className="page_name">Suoku Ezra</Typography>
              </Box>

              <Box className="page_following">
                <Avatar sx={{ width: 35, height: 35 }}>G</Avatar>
                <Typography className="page_name">Goodnews </Typography>
              </Box>

              <Box className="page_following">
                <Avatar sx={{ width: 35, height: 35 }}>O</Avatar>
                <Typography className="page_name">Orabueze Stanley</Typography>
              </Box>

              <Box className="page_following">
                <Avatar sx={{ width: 35, height: 35 }}>O</Avatar>
                <Typography className="page_name">Orji Bright</Typography>
              </Box>
            </Box>
          </Dialog>
        </>
      ) : (
        <>
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
                  width: "100%",
                },
                "& .css-m9glnp-MuiPaper-root-MuiDialog-paper": {
                  backgroundColor: "#ffffff",
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
              className="nav-slide-container"
            >
              <Box className="mainpage-logo">
                <Box className="anim-circle"></Box>
                <Typography
                  variant="h3"
                  className="nav-title-text"
                  onClick={() => {
                    setTimeout(() => navigate("/Art_me/home"), 1000);
                  }}
                >
                  Artme{" "}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <IconButton
                  aria-label="close"
                  onClick={props.closeSideNav}
                  size="large"
                  sx={{ width: "50px" }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>

            <Box className="nav-slide-links">
              <Link
                to="/Art_me/home"
                onClick={props.closeSideNav}
                className="links"
              >
                Home
              </Link>
              <hr />
              <Link
                to="/Art_me/home"
                onClick={props.closeSideNav}
                className="links"
              >
                Artist
              </Link>
              <hr />

              <Link
                to="/Art_me/home"
                onClick={props.closeSideNav}
                className="links"
              >
                About
              </Link>
              <hr />

              <Box className="btns">
                <Link
                  to="/Art_me/login"
                  className="nav-slide-btn-link"
                  onClick={props.closeSideNav}
                >
                  <Button variant="outlined" className="nav-btn">
                    Login
                  </Button>
                </Link>
                <Link
                  to="/Art_me/signup"
                  className="nav-slide-btn-link"
                  onClick={props.closeSideNav}
                >
                  <Button variant="contained" className="nav-btn signup-btn">
                    Signup
                  </Button>
                </Link>
              </Box>
            </Box>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default NavSlide;
