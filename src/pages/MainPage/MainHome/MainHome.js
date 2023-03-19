import { Box, Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import "./MainHome.scss";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Comments from "../../../components/modals/Comments/Comments";
import { useEffect } from "react";
import axios from "axios";

const MainHome = () => {
  const like = useRef();
  const [comment, setComment] = useState(false);
  const [posts, setPosts] = useState([]);

  function LikeAction() {
    if (like.current.style.fill == "red") {
      like.current.style.fill = "black";
    } else {
      like.current.style.fill = "red";
    }
  }

  function CloseComment() {
    setComment(!comment);
  }

  async function Call() {
    try {
      const response = await axios({
        method: "get",
        url: "https://artme-backend-production.up.railway.app/api/art/",
      });

      setPosts(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Call();
  }, []);

  return (
    <>
      <Box
        className="main_home_page"
        sx={{
          width: { xs: "100%", lg: "60%" },
        }}
      >
        <Box className="post_wrapper">
          {posts.reverse().map((items, index) => {
            return (
              <Box className="post_container" key={index}>
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
                    <p className="poster_name"> {items.createdBy.full_name}</p>
                    <p className="post_details">{items.description}</p>
                  </Box>
                </Box>
                <Grid
                  container
                  direction="row"
                  className="post_image"
                  sx={{height: { xs: "200px",md:"400px" }}}
                >
                  {items.image.map((item, index) => {
                    return (
                      <>
                        <Grid item xs={ items.image.length === 1 ? 12 : items.image.length > 1 ? 6 : null } className="post_image_single_wrapper" key={index}>
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
                <Box className="post_actions">
                  <MapsUgcRoundedIcon onClick={CloseComment} />
                  <FavoriteBorderOutlinedIcon onClick={LikeAction} ref={like} />
                  <SendOutlinedIcon />
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
