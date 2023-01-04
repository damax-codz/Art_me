import {
  Box,
  Button,
  Dialog,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Upload.scss";
import { ToastContainer,toast } from "react-toastify";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { Formik } from "formik";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Upload = (props) => {
  const [postImage, setpostImage] = useState([]);
  const { token } = useSelector((state) => state.user);

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
        url: "https://api-artme.onrender.com/api/create",
        data: body,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      // console.log(response);
      toast.success("Post created");
    } catch (error) {
      toast.error("Error creating post");
    }
    console.log(body)
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
              name: "",
              details: "",
            }}
            onSubmit={async (values) => {
              const body = {
                name: values.name,
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
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onBlur={handleBlur}
                    value={values.name}
                    className="post_details_input"
                  ></input>
                </Box>
                <Box className="form_input_wrapper">
                  <input
                    type="text"
                    id="details"
                    name="details"
                    placeholder="Write something about this post"
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onBlur={handleBlur}
                    value={values.details}
                    className="post_details_input"
                  ></input>
                </Box>

                <Box
                  className="post_image_container"
                  onClick={() => postWidget.open()}
                >
                  <IconButton>
                    <AddPhotoAlternateOutlinedIcon />
                  </IconButton>
                  <p>Click to Add Photos</p>
                </Box>
                <Box className="nav-buttons">
                  <Button
                    variant="outlined"
                    className="nav-main-btn"
                    onClick={props.CloseUpload}
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
