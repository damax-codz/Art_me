import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Nav.scss";
import { Box, Button, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavSlide from "./NavSlide";
import NotLogged from "../modals/NotLogged/NotLogged";

const Nav = () => {
  const [animation, setAnimation] = useState();
  const [showText, setShowText] = useState(false);
  const [ LoggedModalStatus,setLoggedModalStatus ] = useState(false)
  const navigate = useNavigate();
  

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

  function handleLoggedModalClose(){
    setLoggedModalStatus(!LoggedModalStatus)
  }
  function handleLoggedModalOpen(){
    // would first useSelector to check if the person is logged in if not prompt the login modal if the
    // person is logged in, would navigate to gallery
    // navigate("/Art_me/gallery") if person is logged in 
    setLoggedModalStatus(!LoggedModalStatus)
  }
  return (
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
                <Typography className="anim-circle-text">Artme ..</Typography>
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
            <li className="nav-container-link">
              <Box
                className="link"
                onClick={handleLoggedModalOpen}
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
          <IconButton aria-label="menu" sx={{ width: "50px", height: "50px" }}>
            <MenuIcon sx={{ fontSize: 40, color: "#000000" }} />
          </IconButton>
        </Box>
      </nav>
      <NavSlide openSideNavValue={open} closeSideNav={CloseSideNav} />
      <NotLogged  LoggedModalStatus={LoggedModalStatus} handleLoggedModalClose={handleLoggedModalClose} />
    </>
  );
};

export default Nav;