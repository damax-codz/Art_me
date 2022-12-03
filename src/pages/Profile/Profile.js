import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import Nav from "../../components/Nav/Nav";
import "./Profile.scss";
// import deer from "./../../components/images/deer.jpg";
// import girl from "./../../components/images/girl.jpg";
import like from "./../../components/images/like.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
// import SchoolIcon from "@mui/icons-material/School";
import AddLocationIcon from "@mui/icons-material/AddLocation";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import InstagramIcon from "@mui/icons-material/Instagram";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import UpdateProfile from "../../components/modals/UpdateProfile/UpdateProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const [value, setValue] = useState("one");
  const [updateprofile, setUpdateprofile] = useState(false);
  const { userdetails } = useSelector((state) => state.user);
  const [profile,setProfile] = useState("");
  const [bio,setBio] = useState("");
  const [cover,setCover] = useState("");
  const [number,setNumber] = useState("");


  useEffect(() => {
    // if (userdetails !== [] ) {
    //   setProfile(userdetails[0].profileImg); //problem
    // }
    userdetails.length === 0  ?  setProfile(""): setProfile(userdetails[0].profileImg)
    // if (userdetails !== [] ) {
    //   setBio(userdetails[0].bio); //problem
    // };
    userdetails.length === 0?  setBio("") : setBio(userdetails[0].bio) 
    // if (userdetails !== [] ) {
    //   setCover(userdetails[0].coverImg); //problem
    // }
    userdetails.length === 0 ?   setCover("") : setCover(userdetails[0].coverImg)
  
    // if (userdetails !== [] ) {
    //   setNumber(userdetails[0].phone_number); //problem
    // }

    userdetails.length === 0 ?   setNumber("") : setNumber(userdetails[0].phone_number) 


    console.log(
      profile
    )
  
  }, []);







  const handleChangeValue = (event, newValue) => {
    setValue(newValue);
  };

  function CloseUpdateProfile() {
    setUpdateprofile(!updateprofile);
  }

  // useEffect(() => {
  //   console.log(userdetails);
  // }, []);

  return (
    <>
      <MetaTags>
        {/* would later change profile to "users name" */}
        <title>Profile | Artme</title>
        <meta name="description" content=".." />
      </MetaTags>
      <Nav />

      <Box className="profile_container">
        <Box
          className="profile_left_nav"
          sx={{
            display: { xs: "none", lg: "flex" },
            width: { xs: "0%", lg: "20%" },
          }}
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
          className="profile_image_container"
          sx={{ width: { xs: "100%", lg: "60%" } }}
        >
          <Box className="image_wrapper">
            {cover ? (
              <Box className="main_cover_true" component="img" src={cover} />
            ) : (
              <Box className="cover_profile"></Box>
            )}

            {profile ? (
              <Box
                className="main_profile_true"
                component="img"
                src={profile}
              />
            ) : (
              <Box className="main_profile"></Box>
            )}

            <Box className="upload_button">
              <Button
                variant="contained"
                className="log-nav-main-btn"
                onClick={() => CloseUpdateProfile()}
              >
                <CameraAltIcon sx={{ fontSize: "15px", marginRight: "5px" }} />{" "}
                Edit Profile
              </Button>
            </Box>
            <Box sx={{ width: "100%" }} className="profile_tabs">
              <Tabs
                value={value}
                onChange={handleChangeValue}
                textColor="secondary"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "rgba(165, 42, 42, 1)",
                  },
                }}
                aria-label="secondary tabs example"
              >
                <Tab value="one" label="Shots"></Tab>
                <Tab value="two" label="Collections" />
                <Tab value="three" label="Liked Shots" />
                <Tab value="four" label="About" />
              </Tabs>
            </Box>
          </Box>

          {value === "one" ? (
            <Box className="uploads">
              <Box className="uploader">
                <p className="upload_text_one">Upload your first art</p>
                <p className="upload_text_two">
                  Show off your best work. Get feedback, likes and be a part of
                  a growing community.
                </p>
                <Button variant="contained" className="log-nav-main-btn">
                  upload
                </Button>
              </Box>

              <Box className="uploaded"></Box>
              <Box className="uploaded"></Box>
              <Box className="uploaded"></Box>
              <Box className="uploaded"></Box>
              <Box className="uploaded"></Box>
            </Box>
          ) : value === "two" ? (
            <Box className="go_collection">
              Go to <Link to="/Art_me/gallery">Gallery</Link> page to view
              collections
            </Box>
          ) : value === "three" ? (
            <Box className="liked_shot">
              <img src={like} alt="like" className="like_gif" />
              <p className="like_text_one">Express your appreciation</p>
              <p className="like_text_two">
                Show your appreciation for other's work by liking the shots you
                love. We'll collect all of your likes here for you to revisit
                anytime.
              </p>
            </Box>
          ) : value === "four" ? (
            <Box className="about">
              <div className="about_head">
                <p>About</p>
              </div>

              <Box className="about_details">
                <Box className="detail">
                  <Avatar sx={{ width: 35, height: 35 }}>
                    {" "}
                    <PersonIcon />
                  </Avatar>
                  {bio ? <p className="detail_text"> {bio} </p>  : <p className="detail_text">Add bio</p>}
                </Box>

                <Box className="detail">
                  <Avatar sx={{ width: 35, height: 35 }}>
                    {" "}
                    <AddIcon />
                  </Avatar>
                  <p className="detail_text">Add Education</p>{" "}
                </Box>

                <Box className="detail">
                  <Avatar sx={{ width: 35, height: 35 }}>
                    {" "}
                    <AddLocationIcon />
                  </Avatar>
                  <p className="detail_text">Add Location</p>
                </Box>
                <Box className="detail">
                  <Avatar sx={{ width: 35, height: 35 }}>
                    {" "}
                    <PhoneAndroidIcon />
                  </Avatar>
                  {number ? <p className="detail_text"> {number} </p>  : <p className="detail_text">Add Phone</p>}
                </Box>
                <Box className="detail">
                  <Avatar sx={{ width: 35, height: 35 }}>
                    {" "}
                    <InstagramIcon />
                  </Avatar>
                  <p className="detail_text">Add Instagram</p>
                </Box>
              </Box>
            </Box>
          ) : null}
        </Box>

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
      <UpdateProfile
        updateprofile={updateprofile}
        CloseUpdateProfile={CloseUpdateProfile}
      />
    </>
  );
};

export default Profile;
