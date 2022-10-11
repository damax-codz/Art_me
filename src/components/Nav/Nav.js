import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Nav.scss";
import { Box, Button, Typography,IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavSlide from "./NavSlide";

const Nav = () => {
  const [animation, setAnimation] = useState();
  const [showText, setShowText] = useState(false);

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
      }, 2000);
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
              transition={{ duration: 2.5 }}
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
              <Link to="Art_me/home" className="link">
                Home
              </Link>
            </li>
            <li className="nav-container-link" onClick={startAnim}>
              <Link to="Art_me/home" className="link">
                Artist
              </Link>
            </li>
            <li className="nav-container-link" onClick={startAnim}>
              <Link to="Art_me/gallery" className="link">
                shop
              </Link>
            </li>
            <li className="nav-container-link" onClick={startAnim}>
              <Link to="Art_me/home" className="link">
                About
              </Link>
            </li>
          </ul>
        </Box>
        <Box
          className="btns"
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <Link to='Art_me/signup' className="nav-btn-link" onClick={startAnim}>
          <Button variant="outlined" className="nav-btn">
            Login
          </Button>
          </Link>
          <Link to='Art_me/signup' className="nav-btn-link" onClick={startAnim}>
          <Button variant="outlined" className="nav-btn">
            Signup
          </Button>
          </Link>
        </Box>

        <Box className="hamburger"  sx={{
            display: { xs: "flex", md: "none" },
          }} onClick={handleOpenSlideNav}>
          <IconButton aria-label="menu" sx={{width:"50px",height:"50px"}}>
            <MenuIcon sx={{ fontSize: 40,color:"#000000" }} />
          </IconButton>
        </Box>
        
        
      </nav>
        <NavSlide openSideNavValue={open} closeSideNav={CloseSideNav} />

 
    </>
  );
};

export default Nav;
