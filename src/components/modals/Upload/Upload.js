import {
  Box,
  Button,
  Dialog,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Upload.scss";
import { ToastContainer, toast } from "react-toastify";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { Formik } from "formik";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPost } from "../../../redux/posts";

const Upload = (props) => {
  const [postImage, setpostImage] = useState([]);
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(postImage);
  }, [postImage]);

  const postWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dfcrssub3",
      uploadPreset: "jhrm2ue1",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        // console.log("Done! Here is the image info: ", result.info);
        setpostImage((current) => [...current, result.info.url]);
      }
    }
  );

  async function createPost(body) {
    try {
      const response = await axios({
        method: "post",
        url: "https://artme-backend-production.up.railway.app/api/post",
        data: body,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      // console.log(response);
      if (response.status === 200) {
        toast.success("Post created");
        (async () => {
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
      }
    } catch (error) {
      toast.error("Error creating post");
    }
    // console.log(body)
  }
  return (
    <>
      <Dialog onClose={props.CloseUpload} open={props.Upload}>
        <Box className="upload_box">
          <Toolbar className="upload_top">
            <Typography className="top_text">Create Post</Typography>
            <IconButton>
              <CloseIcon
                onClick={props.CloseUpload}
                sx={{ cursor: "pointer" }}
              />
            </IconButton>
          </Toolbar>

          <Formik
            initialValues={{
              details: "",
            }}
            onSubmit={async (values) => {
              const body = {
                description: values.details,
                image: postImage,
              };
              // alert(JSON.stringify(body));
              createPost(JSON.stringify(body));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box className="form_input_wrapper">
                  <textarea
                    type="text"
                    id="details"
                    name="details"
                    placeholder="Write something about this post"
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onBlur={handleBlur}
                    value={values.details}
                    className="post_details_input"
                    autoCorrect="on"
                    maxLength={500}
                  ></textarea>
                </Box>

                {postImage.length !== 0 ? (
                  <Grid
                  container
                  direction="row"
                  className="min-h-[200px] w-[80%] px-[24px]"
                >
                  {postImage.map((items, index) => {
                    return (
                      <>
                        <Grid
                          item
                          xs={
                            postImage.length === 1
                              ? 12
                              : postImage.length > 1
                              ? 6
                              : null
                          }
                          className="post_image_single_wrapper"
                          key={index}
                        >
                          <Box
                            sx={{
                              background: `url(${items})`,
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
                ) : (
                  <Box
                    className="post_image_container"
                    onClick={() => postWidget.open()}
                  >
                    <IconButton>
                      <AddPhotoAlternateOutlinedIcon />
                    </IconButton>
                    <p>Click to Add Photos</p>
                  </Box>
                )}

                <Box className="nav-buttons">
                  <Button
                    variant="outlined"
                    className="nav-main-btn w-full px-[24px]"
                    onClick={ ()=>{ props.CloseUpload(); setpostImage([]) }}
                  >
                    CANCEL
                  </Button>

                  <Button
                    variant="outlined"
                    className="nav-main-btn save"
                    type="submit"
                    onClick={props.CloseUpload}
                  >
                    SAVE
                  </Button>
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

export default Upload;
