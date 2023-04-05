import { Box, Dialog, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useRef } from "react";
import { ToastContainer } from "react-toastify";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Formik } from "formik";
import "./Comments.scss";

const Comments = (props) => {
  const like = useRef();

  function LikeAction() {
    if (like.current.style.fill === "red") {
      like.current.style.fill = "black";
    } else {
      like.current.style.fill = "red";
    }
  }
  return (
    <>
      <Dialog onClose={props.CloseComment} open={props.comments}>
        <Box className="comment_box">
          <Toolbar className="comment_top">
            <Typography className="top_text">Comments</Typography>
            <CloseIcon
              onClick={props.CloseComment}
              sx={{ cursor: "pointer" }}
            />
          </Toolbar>

          <Box className="poster">
            <Box className="poster_image">
              {" "}
              <div></div>
            </Box>
            <Box className="poster_details">
              <p className="poster_name"> Bhadmus Damilola </p>
              <p className="post_details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, perferendis. Dignissimos quibusdam consequatur
              </p>
            </Box>
            <Box className="post_actions">
              <FavoriteBorderOutlinedIcon onClick={LikeAction} ref={like} />
            </Box>
          </Box>
          <Box className="poster">
            <Box className="poster_image">
              <div></div>
            </Box>
            <Box className="poster_details">
              <p className="poster_name"> Bhadmus Damilola </p>
              <p className="post_details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, perferendis. Dignissimos quibusdam consequatur
              </p>
            </Box>
            <Box className="post_actions">
              <FavoriteBorderOutlinedIcon onClick={LikeAction} ref={like} />
            </Box>
          </Box>
          <Box className="poster">
            <Box className="poster_image">
              <div></div>
            </Box>
            <Box className="poster_details">
              <p className="poster_name"> Bhadmus Damilola </p>
              <p className="post_details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, perferendis. Dignissimos quibusdam consequatur
              </p>
            </Box>
            <Box className="post_actions">
              <FavoriteBorderOutlinedIcon onClick={LikeAction} ref={like} />
            </Box>
          </Box>
          <Box className="poster">
            <Box className="poster_image">
              <div></div>
            </Box>
            <Box className="poster_details">
              <p className="poster_name"> Bhadmus Damilola </p>
              <p className="post_details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, perferendis. Dignissimos quibusdam consequatur
              </p>
            </Box>
            <Box className="post_actions">
              <FavoriteBorderOutlinedIcon onClick={LikeAction} ref={like} />
            </Box>
          </Box>
          <Box className="poster">
            <Box className="poster_image">
              <div></div>
            </Box>
            <Box className="poster_details">
              <p className="poster_name"> Bhadmus Damilola </p>
              <p className="post_details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, perferendis. Dignissimos quibusdam consequatur
              </p>
            </Box>
            <Box className="post_actions">
              <FavoriteBorderOutlinedIcon onClick={LikeAction} ref={like} />
            </Box>
          </Box>
          <Box className="poster">
            <Box className="poster_image">
              <div></div>
            </Box>
            <Box className="poster_details">
              <p className="poster_name"> Bhadmus Damilola </p>
              <p className="post_details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, perferendis. Dignissimos quibusdam consequatur
              </p>
            </Box>
            <Box className="post_actions">
              <FavoriteBorderOutlinedIcon onClick={LikeAction} ref={like} />
            </Box>
          </Box>
          <Box className="poster">
            <Box className="poster_image">
              <div></div>
            </Box>
            <Box className="poster_details">
              <p className="poster_name"> Bhadmus Damilola </p>
              <p className="post_details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, perferendis. Dignissimos quibusdam consequatur
              </p>
            </Box>
            <Box className="post_actions">
              <FavoriteBorderOutlinedIcon onClick={LikeAction} ref={like} />
            </Box>
          </Box>
          <Box className="poster">
            <Box className="poster_image">
              <div></div>
            </Box>
            <Box className="poster_details">
              <p className="poster_name"> Bhadmus Damilola </p>
              <p className="post_details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, perferendis. Dignissimos quibusdam consequatur
              </p>
            </Box>
            <Box className="post_actions">
              <FavoriteBorderOutlinedIcon onClick={LikeAction} ref={like} />
            </Box>
          </Box>
          <Box className="poster">
            <Box className="poster_image">
              <div></div>
            </Box>
            <Box className="poster_details">
              <p className="poster_name"> Bhadmus Damilola </p>
              <p className="post_details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, perferendis. Dignissimos quibusdam consequatur
              </p>
            </Box>
            <Box className="post_actions">
              <FavoriteBorderOutlinedIcon onClick={LikeAction} ref={like} />
            </Box>
          </Box>
          <Box className="poster">
            <Box className="poster_image">
              <div></div>
            </Box>
            <Box className="poster_details">
              <p className="poster_name"> Bhadmus Damilola </p>
              <p className="post_details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, perferendis. Dignissimos quibusdam consequatur
              </p>
            </Box>
            <Box className="post_actions">
              <FavoriteBorderOutlinedIcon onClick={LikeAction} ref={like} />
            </Box>
          </Box>

          <Formik
            initialValues={{
              comment: "",
            }}
            onSubmit={async (values) => {
              // const body = {
              //   comment: values.comment,
              // };
              // alert(JSON.stringify(body));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box className="comment_input_wrapper">
                  <input
                    type="text"
                    id="comment"
                    name="comment"
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onBlur={handleBlur}
                    value={values.comment}
                    className="form_input"
                  ></input>
                  <IconButton type="submit">
                    <SendOutlinedIcon sx={{ cursor: "pointer" }} />
                  </IconButton>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Dialog>
      <ToastContainer />
    </>
  );
};

export default Comments;
