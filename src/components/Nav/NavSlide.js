import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import { Box, Button, IconButton, Slide, Typography } from "@mui/material";
import "./NavSlide.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const NavSlide = (props) => {
  const navigate = useNavigate();
  const { logvalue } = useSelector((state) => state.logged);

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
                  <Box className="profile_pics"></Box>
                  <Button variant="contained" className="log-nav-main-btn">
                    upload
                  </Button>
                </Box>

                <Box className="nav-search">
                  <IconButton className="icon">
                    <SearchIcon />
                  </IconButton>
                  <input class="input-field" type="text" placeHolder="Search" />
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
