import React from "react";
import "./Profile.scss";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import like from "./../../../components/images/like.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, Outlet } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import InstagramIcon from "@mui/icons-material/Instagram";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import UpdateProfile from "../../../components/modals/UpdateProfile/UpdateProfile";
import { useSelector } from "react-redux";
import Upload from "../../../components/modals/Upload/Upload";

const Profile = () => {
  const [value, setValue] = useState("one");
  const { userdetails } = useSelector((state) => state.user);
  // console.log(userdetails);
  const [updateprofile, setUpdateprofile] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profile, setProfile] = useState("");
  const [bio, setBio] = useState("");
  const [cover, setCover] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    userdetails.length === 0
      ? setProfile("")
      : setProfile(userdetails[0].profileImg);
    userdetails.length === 0 ? setBio("") : setBio(userdetails[0].bio);
    userdetails.length === 0 ? setCover("") : setCover(userdetails[0].coverImg);
    userdetails.length === 0
      ? setNumber("")
      : setNumber(userdetails[0].phone_number);
    userdetails.length === 0 ? setName("") : setName(userdetails[0].full_name);
  }, []);

  const handleChangeValue = (event, newValue) => {
    setValue(newValue);
  };

  function CloseUpdateProfile() {
    setUpdateprofile(!updateprofile);
  }
  function CloseUpload() {
    setUpload(!upload);
  }

  useEffect(() => {
    // console.log(userdetails);
  }, []);
  return (
    <>
      <MetaTags>
        {/* would later change profile to "users name" */}
        <title>{name} | Artme</title>
        <meta name="description" content=".." />
      </MetaTags>
      <Box
        className="profile_image_container"
        sx={{ width: { xs: "100%", lg: "60%" } }}
      >
        <Box className="image_wrapper">
          {cover ? (
            <Box
              className="main_cover_true"
              sx={{ background: `url(${cover})` }}
            />
          ) : (
            <Box className="cover_profile"></Box>
          )}

          <Box className="profile_btn_container">
            {profile ? (
              <Box
                className="main_profile_true"
                component="img"
                sx={{ background: `url(${profile})` }}
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
          </Box>

          <Box className="profile_lil_details">
            <p>{name}</p>
            <p>{bio}</p>
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
                Show off your best work. Get feedback, likes and be a part of a
                growing community.
              </p>
              <Button
                variant="contained"
                className="log-nav-main-btn"
                onClick={CloseUpload}
              >
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
                {bio ? (
                  <p className="detail_text"> {bio} </p>
                ) : (
                  <p className="detail_text">Add bio</p>
                )}
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
                {number ? (
                  <p className="detail_text"> {number} </p>
                ) : (
                  <p className="detail_text">Add Phone</p>
                )}
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
      <UpdateProfile
        updateprofile={updateprofile}
        CloseUpdateProfile={CloseUpdateProfile}
      />
      <Upload CloseUpload={CloseUpload} Upload={upload} />
    </>
  );
};

export default Profile;
