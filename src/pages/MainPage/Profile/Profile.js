import React from "react";
import "./Profile.scss";
import { Avatar, Box, Button, Grid, IconButton, Menu, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import like from "./../../../components/images/like.png";
import moon from "./../../../components/images/icons/new-moon.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import InstagramIcon from "@mui/icons-material/Instagram";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import UpdateProfile from "../../../components/modals/UpdateProfile/UpdateProfile";
import { useDispatch, useSelector } from "react-redux";
import Upload from "../../../components/modals/Upload/Upload";
import axios from "axios";
import { setUserPost } from "../../../redux/userposts";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import likeIcon from "./../../../components/images/icons/like.png";
import love from "./../../../components/images/icons/love.png";
import angry from "./../../../components/images/icons/angry.png";
import dislike from "./../../../components/images/icons/dislike.png";
import Comments from "../../../components/modals/Comments/Comments";

const Profile = () => {
  const [value, setValue] = useState("one");
  const { userdetails } = useSelector((state) => state.user);
  const { userposts } = useSelector((state) => state.userPosts);
  const [updateprofile, setUpdateprofile] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profile, setProfile] = useState("");
  const [bio, setBio] = useState("");
  const [cover, setCover] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [Id, setId] = useState("");
  const { token } = useSelector((state) => state.user);
  const [postID, setPostID] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [comment, setComment] = useState(false);
  const likeOpen = Boolean(anchorEl);


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
    userdetails.length === 0 ? setId("") : setId(userdetails[0]._id);
  }, []);

  const handleChangeValue = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();

  function CloseUpdateProfile() {
    setUpdateprofile(!updateprofile);
  }
  function CloseUpload() {
    setUpload(!upload);
  }

  (async function getUserPost() {
    try {
      const response = await axios({
        method: "get",
        url: `https://artme-backend-production.up.railway.app/api/post/user-post/${Id}`,
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data.data.post.reverse());
      dispatch(setUserPost(response.data.data.post.reverse()));
    } catch (error) {
      // console.log(error);
    }
  })();

  function CloseComment() {
    setComment(!comment);
  }

  const handleLikeClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLikeClose = () => {
    setAnchorEl(null);
  };

  async function handleReaction(type) {
    setAnchorEl(null);
    const body = {
      reaction: type
    }
    try {
       await axios({
        method: "post",
        url: `https://artme-backend-production.up.railway.app/api/post/like-post?postId=${postID}`,
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        },
        data: JSON.stringify(body),
      });
      // console.log(response);

    } catch (error) {
      // console.log(error);
    }
  }

 

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
              <Box className="main_profile">
                <img src={moon} alt="profile" />
              </Box>
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
            <p className="text-[200px] ">{name}</p>
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
              <Tab value="one" label="Posts"></Tab>
              <Tab value="two" label="Collections" />
              <Tab value="three" label="Liked Shots" />
              <Tab value="four" label="About" />
            </Tabs>
          </Box>
        </Box>

        {value === "one" ? (
             <Box
             className="main_home_page"
             sx={{
               width: { xs: "100%",  },
             }}
           >
             <Box className="post_wrapper">
               {userposts?.map((items, index) => {
                 return (
                   <Box
                     className="post_container"
                     key={index}
                     onClick={() => setPostID(items._id)}
                   >
                     <Box className="poster">
                       {items.createdBy.profileImg ? (
                         <Box
                           className="poster_image_true"
                           sx={{ background: `url(${items.createdBy.profileImg})` }}
                         />
                       ) : (
                         <Box className="poster_image"></Box>
                       )}
                       <Box className="poster_details">
                         <p className="poster_name mb-1"> {items.createdBy.full_name}</p>
                         <p className="post_details">{items.description}</p>
                       </Box>
                     </Box>
                     <Grid
                       container
                       direction="row"
                       className={ items.image.length === 0 ? "post_image !min-h-0 " : "post_image min-h-[400px]"  }
                       
                     >
                       {items.image.map((item, index) => {
                         return (
                           <>
                             <Grid
                               item
                               xs={
                                 items.image.length === 1
                                   ? 12
                                   : items.image.length > 1
                                   ? 6
                                   : null
                               }
                               className="post_image_single_wrapper cursor-pointer"
                               key={index}
                             >
                               <Box
                                 sx={{
                                   background: `url(${item})`,
                                   height: "100%",
                                   width: "100%",
                                 }}
                                 className="post_image_single"
                               ></Box>
                             </Grid>
                           </>
                         );
                       })}
                     </Grid>
                     <Box className="post_actions justify-between">
                       
                       <IconButton>
                         <MapsUgcRoundedIcon
                           onClick={CloseComment}
                           className="m-0"
                         />
                       </IconButton>
                       <Box className="flex items-center">
                       <IconButton>
                         <FavoriteBorderOutlinedIcon
                           onClick={handleLikeClick}
                           className=" m-0 " 
                         />
                       </IconButton>
                       <p className="m-0 text-black">{ items.likes >= 0 ? items.likes : "0" }</p>
                       </Box>
                       <Menu
                         id="action"
                         anchorEl={anchorEl}
                         open={likeOpen}
                         onClose={handleLikeClose}
                         MenuListProps={{
                           "aria-labelledby": "basic-button",
                         }}
                       >
                         <ul className="flex list-none pl-0">
                           <li
                             onClick={() => {
                               handleReaction("LIKE");
                             }}
                           >
                             <Tooltip title="Like">
                               <IconButton>
                                 <img
                                   src={likeIcon}
                                   alt="like"
                                   className=" w-[20px] h-[20px] "
                                 />
                               </IconButton>
                             </Tooltip>
                           </li>
                           <li
                             onClick={() => {
                               handleReaction("LOVE");
                             }}
                           >
                             <Tooltip title="Love">
                               <IconButton>
                                 <img
                                   src={love}
                                   alt="dislike"
                                   className=" w-[20px] h-[20px] "
                                 />
                               </IconButton>
                             </Tooltip>
                           </li>
                           <li
                             onClick={() => {
                               handleReaction("DISLIKE");
                             }}
                           >
                             <Tooltip title="Dislike">
                               <IconButton>
                                 <img
                                   src={dislike}
                                   alt="dislike"
                                   className=" w-[20px] h-[20px] "
                                 />
                               </IconButton>
                             </Tooltip>
                           </li>
     
                           <li
                             onClick={() => {
                               handleReaction("ANGRY");
                             }}
                           >
                             <Tooltip title="Angry">
                               <IconButton>
                                 <img
                                   src={angry}
                                   alt="dislike"
                                   className=" w-[20px] h-[20px] "
                                 />
                               </IconButton>
                             </Tooltip>
                           </li>
                         </ul>
                       </Menu>
                       <IconButton>
                         <SendOutlinedIcon className="m-0" />
                       </IconButton>
                     </Box>
                   </Box>
                 );
               })}
             </Box>
           </Box>
        ) : value === "two" ? (
          <Box className="uploads">
            <Box className="uploader">
              <p className="upload_text_one">Create a collection</p>
              <p className="upload_text_two">
                Show off your best work. Get feedback, likes and be a part of a
                growing community.
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
      <Comments CloseComment={CloseComment} comments={comment} />
    </>
  );
};

export default Profile;
