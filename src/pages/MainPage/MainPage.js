import { Avatar, Box, Button, Fab, Typography } from "@mui/material";
import React, {  useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import LogoutIcon from "@mui/icons-material/Logout";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./MainPage.scss";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import NavSlide from "../../components/Nav/NavSlide";
import Upload from "../../components/modals/Upload/Upload";
import { logged } from "../../redux/Logged";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { resetDetails } from "../../redux/UserDetail";
import { resetPost } from "../../redux/posts";

const MainPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [upload, setUpload] = useState(false);
  const dispatch = useDispatch();

  function handleOpenSlideNav() {
    setOpen(!open);
  }
  function CloseUpload() {
    setUpload(!upload);
  }

  return (
    <>
      <Box
        className="nav-main-title"
        sx={{
          display: { xs: "flex", lg: "none" },
        }}
      >
        <Box className="anim"></Box>
        <Typography variant="h3" className="nav-title-text">
          Artme
        </Typography>
      </Box>
      <Box className="profile_container">
        <Box
          className="profile_left_nav"
          sx={{
            display: { xs: "none", lg: "flex" },
            width: { xs: "0%", lg: "20%" },
          }}
        >
          <Box className="nav-title">
            <Box className="anim"></Box>
            <Typography variant="h3" className="nav-title-text">
              Artme
            </Typography>
          </Box>
          {/* <Typography className="left_nav_title">MENU</Typography> */}
          <NavLink to="/Art_me/homepage/home" onClick={window.scrollTo(0, 0)}>
            <Typography className="left_nav_link">
              <HomeIcon /> Home
            </Typography>
          </NavLink>
          <Typography className="left_nav_link">
            {" "}
            <EmailIcon /> Messages
          </Typography>
          <Typography className="left_nav_link">
            <NotificationsIcon />
            Notifications
          </Typography>
          <Typography className="left_nav_link">
            <ColorLensIcon />
            Arts
          </Typography>
          <NavLink to="/Art_me/homepage/profile">
            <Typography className="left_nav_link">
              <PersonIcon /> Profile
            </Typography>
          </NavLink>

          <Link to="/Art_me" onClick={ ()=> { dispatch(logged(false)); dispatch(resetDetails()); dispatch(resetPost()) } }>
            <Typography className="left_nav_link">
              <LogoutIcon /> Logout
            </Typography>
          </Link>
          <Button variant="contained" className="upload" onClick={CloseUpload}>
            upload
          </Button>
          <Typography className="left_nav_title">YOUR FAVORITES</Typography>
          <Typography className="left_nav_link">Lorem 1</Typography>
          <Typography className="left_nav_link">Lorem 2</Typography>
          <Typography className="left_nav_link">Lorem 3</Typography>
          <Typography className="left_nav_link">Lorem 4</Typography>
          <Typography className="left_nav_link">Lorem 5</Typography>
          <Typography className="left_nav_link">Lorem 6</Typography>
          <Typography className="left_nav_link">Lorem 7</Typography>
        </Box>

        <Outlet />

        <Box
          className="profile_right_nav"
          sx={{
            display: { xs: "none", lg: "flex" },
            width: { xs: "0%", lg: "20%" },
          }}
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
      </Box>
      {/* <Footer /> */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          display: { xs: "flex", lg: "none" },
        }}
        className=" z-10 !sticky bottom-[60px] left-[78%]  !bg-theme"
        onClick={CloseUpload}
      >
        <AddIcon />
      </Fab>

      <Box
        className="nav_bottom z-20 "
        sx={{
          display: { xs: "flex", lg: "none" },
        }}
      >
        <HomeIcon
          sx={{ fontSize: "25px" }}
          onClick={() => navigate("/Art_me/homepage/home")}
        />

        <PersonIcon
          sx={{ fontSize: "25px" }}
          onClick={() => navigate("/Art_me/homepage/profile")}
        />
        <MenuIcon sx={{ fontSize: "25px" }} onClick={handleOpenSlideNav} />
      </Box>

      <NavSlide openSideNavValue={open} closeSideNav={handleOpenSlideNav} />
      <Upload CloseUpload={CloseUpload} Upload={upload} />
    </>
  );
};

export default MainPage;
