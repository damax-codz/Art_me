import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Nav.scss";
import { Box, Button, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavSlide from "./NavSlide";

const Nav = () => {
  const [animation, setAnimation] = useState();
  const [showText, setShowText] = useState(false);
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
          <Typography variant="h3" className="nav-title-text">
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
              <a
                className="link"
                onClick={() => {
                  setTimeout(() => navigate("Art_me/home"), 1000);
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-container-link" onClick={startAnim}>
              <a
                className="link"
                onClick={() => {
                  setTimeout(() => navigate("Art_me/home"), 1000);
                }}
              >
                Artist
              </a>
            </li>
            <li className="nav-container-link" onClick={startAnim}>
              <a
                className="link"
                onClick={() => {
                  setTimeout(() => navigate("Art_me/gallery"), 1000);
                }}
              >
                Gallery
              </a>
            </li>
            <li className="nav-container-link" onClick={startAnim}>
              <a
                className="link"
                onClick={() => {
                  setTimeout(() => navigate("Art_me/home"), 1000);
                }}
              >
                About
              </a>
            </li>
          </ul>
        </Box>
        <Box
          className="nav-buttons"
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Link to="Art_me/signup" className="nav-btn-link" onClick={startAnim}>
            <Button variant="outlined" className="nav-main-btn">
              Login
            </Button>
          </Link>
          <Link to="Art_me/signup" className="nav-btn-link" onClick={startAnim}>
            <Button variant="outlined" className="nav-main-btn">
              Signup
            </Button>
          </Link>
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
    </>
  );
};

export default Nav;
