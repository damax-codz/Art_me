import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Nav.scss";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavSlide from "./NavSlide";
import NotLogged from "../modals/NotLogged/NotLogged";
import SearchIcon from "@mui/icons-material/Search";
import { loggedOut } from "../../redux/Logged";
import { resetDetails } from "../../redux/UserDetail"
import { useDispatch, useSelector } from "react-redux";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Nav = () => {
  const [animation, setAnimation] = useState();
  const [showText, setShowText] = useState(false);
  const [LoggedModalStatus, setLoggedModalStatus] = useState(false);
  const navigate = useNavigate();
  const { logvalue } = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  const { userdetails } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const [ profile,setProfile ] = useState("")
  // const [number,setNumber] = useState(userdetails[0].phone_number);

 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    userdetails === [] ?  setProfile("") :  setProfile(userdetails[0].profileImg) 
  }, []);




  function startAnim() {
    setAnimation({
      scale: [1, 200, 200, 1],
      borderRadius: ["50%", "50%", "50%", "50%", "50%"],
    });
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setAnimation({});
      setTimeout(() => {
        document.body.style.overflow = "scroll";
        document.body.style.overflowX = "hidden";
      }, 1500);
    }, 2000);
    setTimeout(() => {
      setShowText(true);
      setTimeout(() => {
        setShowText(false);
      }, 3000);
    }, 500);
  }
  const [open, setOpen] = useState(false);

  function handleOpenSlideNav() {
    setOpen(true);
  }

  function CloseSideNav() {
    setOpen(false);
  }

  function handleLoggedModalClose() {
    setLoggedModalStatus(!LoggedModalStatus);
  }
  function handleLoggedModalOpen() {
    // would first useSelector to check if the person is logged in if not prompt the login modal if the
    // person is logged in, would navigate to gallery
    // navigate("/Art_me/gallery") if person is logged in
    setLoggedModalStatus(!LoggedModalStatus);
  }
  return (
    <>
      {logvalue ? (
        <>
          <nav className="nav-container">
            <Box className="logged_in_nav">
              <Box className="nav-title">
                <Box className="anim">
                  <motion.div
                    animate={animation}
                    transition={{ duration: 2 }}
                    className="anim-circle"
                  >
                    {showText && (
                      <Typography className="anim-circle-text">
                        Artme ..
                      </Typography>
                    )}
                  </motion.div>
                </Box>
                <Typography
                  variant="h3"
                  className="nav-title-text"
                  onClick={() => {
                    setTimeout(() => navigate("/Art_me/home"), 2000);
                  }}
                >
                  Artme{" "}
                </Typography>
              </Box>

              <Box
                className="nav-links"
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                <ul>
                  <li className="nav-container-link" onClick={startAnim}>
                    <Box
                      className="link"
                      onClick={() => {
                        setTimeout(() => navigate("/Art_me/home"), 2000);
                      }}
                    >
                      Home
                    </Box>
                  </li>
                  <li className="nav-container-link" onClick={startAnim}>
                    <Box
                      className="link"
                      onClick={() => {
                        setTimeout(() => navigate("/Art_me/home"), 2000);
                      }}
                    >
                      Find Artist
                    </Box>
                  </li>

                  {/* i can later hide this link to be viewable by only those who are logged in  */}
                  <li className="nav-container-link" onClick={startAnim}>
                    <Box
                      className="link"
                      onClick={() => {
                        setTimeout(() => navigate("/Art_me/gallery"), 2000);
                      }}
                    >
                      Gallery
                    </Box>
                  </li>
                  <li className="nav-container-link" onClick={startAnim}>
                    <Box
                      className="link"
                      onClick={() => {
                        setTimeout(() => navigate("/Art_me/home"), 2000);
                      }}
                    >
                      About
                    </Box>
                  </li>
                </ul>
              </Box>
            </Box>

            {/* creating search buttons profile and upload button */}
            <Box
              className="nav-buttons"
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Box className="nav-search">
                <IconButton className="icon">
                  <SearchIcon />
                </IconButton>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Search"
                />
              </Box>
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
                      dispatch(resetDetails())
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

            <Box
              className="hamburger"
              sx={{
                display: { xs: "flex", md: "none" },
              }}
              onClick={handleOpenSlideNav}
            >
              <IconButton
                aria-label="menu"
                sx={{ width: "50px", height: "50px" }}
              >
                <MenuIcon sx={{ fontSize: 40, color: "#000000" }} />
              </IconButton>
            </Box>
          </nav>
          <NavSlide openSideNavValue={open} closeSideNav={CloseSideNav} />
          <NotLogged
            LoggedModalStatus={LoggedModalStatus}
            handleLoggedModalClose={handleLoggedModalClose}
          />
        </>
      ) : (
        <>
          <nav className="nav-container">
            <Box className="nav-title">
              <Box className="anim">
                <motion.div
                  animate={animation}
                  transition={{ duration: 2 }}
                  className="anim-circle"
                >
                  {showText && (
                    <Typography className="anim-circle-text">
                      Artme ..
                    </Typography>
                  )}
                </motion.div>
              </Box>
              <Typography
                variant="h3"
                className="nav-title-text"
                onClick={() => {
                  setTimeout(() => navigate("/Art_me/home"), 2000);
                }}
              >
                Artme{" "}
              </Typography>
            </Box>

            <Box
              className="nav-links"
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <ul>
                <li className="nav-container-link" onClick={startAnim}>
                  <Box
                    className="link"
                    onClick={() => {
                      setTimeout(() => navigate("/Art_me/home"), 2000);
                    }}
                  >
                    Home
                  </Box>
                </li>
                <li className="nav-container-link" onClick={startAnim}>
                  <Box
                    className="link"
                    onClick={() => {
                      setTimeout(() => navigate("/Art_me/home"), 2000);
                    }}
                  >
                    Find Artist
                  </Box>
                </li>

                {/* i can later hide this link to be viewable by only those who are logged in  */}
                {/* <li className="nav-container-link">
                  <Box className="link" onClick={handleLoggedModalOpen}>
                    Gallery
                  </Box>
                </li> */}
                <li className="nav-container-link" onClick={startAnim}>
                  <Box
                    className="link"
                    onClick={() => {
                      setTimeout(() => navigate("/Art_me/home"), 2000);
                    }}
                  >
                    About
                  </Box>
                </li>
              </ul>
            </Box>
            <Box
              className="nav-buttons"
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Box className="nav-btn-link" onClick={startAnim}>
                <Button
                  onClick={() => {
                    setTimeout(() => navigate("/Art_me/login"), 2000);
                  }}
                  variant="outlined"
                  className="nav-main-btn"
                >
                  Login
                </Button>
              </Box>
              <Box className="nav-btn-link" onClick={startAnim}>
                <Button
                  onClick={() => {
                    setTimeout(() => navigate("/Art_me/signup"), 2000);
                  }}
                  variant="outlined"
                  className="nav-main-btn"
                >
                  Signup
                </Button>
              </Box>
            </Box>

            <Box
              className="hamburger"
              sx={{
                display: { xs: "flex", md: "none" },
              }}
              onClick={handleOpenSlideNav}
            >
              <IconButton
                aria-label="menu"
                sx={{ width: "50px", height: "50px" }}
              >
                <MenuIcon sx={{ fontSize: 40, color: "#000000" }} />
              </IconButton>
            </Box>
          </nav>
          <NavSlide openSideNavValue={open} closeSideNav={CloseSideNav} />
          <NotLogged
            LoggedModalStatus={LoggedModalStatus}
            handleLoggedModalClose={handleLoggedModalClose}
          />
        </>
      )}
    </>
  );
};

export default Nav;
