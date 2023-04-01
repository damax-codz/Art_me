import { Box, Grid, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import React, { useRef, useState } from "react";
import "./MainHome.scss";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Comments from "../../../components/modals/Comments/Comments";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import likeIcon from "./../../../components/images/icons/like.png";
import love from "./../../../components/images/icons/love.png";
import angry from "./../../../components/images/icons/angry.png";
import dislike from "./../../../components/images/icons/dislike.png";
import { useDispatch } from "react-redux";
import { setPost } from "../../../redux/posts";

const MainHome = () => {
  const [comment, setComment] = useState(false);
  // const [posts, setPosts] = useState([]);
  const { logvalue } = useSelector((state) => state.logged);
  const { token } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const likeOpen = Boolean(anchorEl);
  const [postID, setPostID] = useState("");
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

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
      const response = await axios({
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

  (async function Call() {
    try {
      const response = await axios({
        method: "get",
        url: "https://artme-backend-production.up.railway.app/api/post/all",
        headers: {
          Authorization: token,
        },
      });

      dispatch(setPost(response.data.data.post.reverse()));
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  })();



  // useEffect(() => {
  //   // console.log(posts);
  //   Call()
  // }, []);

  return (
    <>
      <Box
        className="main_home_page"
        sx={{
          width: { xs: "100%", lg: "60%" },
        }}
      >
        <Box className="post_wrapper">
          {posts.map((items, index) => {
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
                  className="post_image"
                  // sx={{ height: { xs: "200px", md: "400px" } }}
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
                          className="post_image_single_wrapper"
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
                  <p className= "m-0 text-black">100</p>
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
      <Comments CloseComment={CloseComment} comments={comment} />
    </>
  );
};

export default MainHome;
