import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { Box, Button, Toolbar, Tooltip, Typography } from "@mui/material";
import "./UpdateProfile.scss";
import CloseIcon from "@mui/icons-material/Close";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux/es/exports";
import { setDetails } from "../../../redux/UserDetail";

const UpdateProfile = (props) => {
  const { userdetails } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  // console.log(token)
  // }, [])

  // cloudinary library for uploading image and getting back image url then posting it to my API
  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dfcrssub3",
      uploadPreset: "jhrm2ue1",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        // console.log("Done! Here is the image info: ", result.info);

        SubmitImage(result.info.url);
      }
    }
  );

  const myCoverWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dfcrssub3",
      uploadPreset: "jhrm2ue1",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        // console.log("Done! Here is the image info: ", result.info);

        SubmitCoverImage(result.info.url);
      }
    }
  );



  async function SubmitImage(data) {
    try {
      const response = await axios({
        method: "post",
        url: "https://artme-backend-production.up.railway.app/api/user/profileImg",
        data: JSON.stringify({
          profileImage: data,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      console.log(response)
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  async function SubmitCoverImage(data) {
    try {
      const response = await axios({
        method: "post",
        url: "https://artme-backend-production.up.railway.app/api/user/coverImg",
        data: JSON.stringify({
          coverImage: data,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      console.log(response)
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  }


  // function to check if bio is being updated, then after updating posts it to the bio API
  async function Submitbio(body) {
    const biodata = JSON.stringify({
      email: userdetails[0].email,
      bio: body.bio,
    });
    if (body.bio !== "") {
      try {
        const response = await axios({
          method: "patch",
          url: "https://artme-backend-production.up.railway.app/api/user/bio",
          data: biodata,
          headers: { "Content-Type": "application/json" },
        });
        toast.success(response.data.message);
        UpdateUserDetails();
      } catch (error) {}
    }
  }

  // when this function is called it fetches the users data and update the user details in the store
  async function UpdateUserDetails() {
    axios
      .get("https://artme-backend-production.up.railway.app/api/users/logged-in", {
        headers: {
          Authorization: token,
        },
      })
      .then(function (response) {
        console.log(response.data.data);
        dispatch(setDetails(response.data.data));
      })
      .catch(function (error) {
        //   console.log(error);
      });
  }

  return (
    <>
      <Dialog onClose={props.CloseUpdateProfile} open={props.updateprofile}>
        <Box className="update_box">
          <Toolbar className="update_top">
            <Typography className="top_text">Update profile</Typography>
            <CloseIcon
              onClick={props.CloseUpdateProfile}
              sx={{ cursor: "pointer" }}
            />
          </Toolbar>

          <Box className="upload_images">
            <Box className="profile" onClick={() => myWidget.open()}>
              <Tooltip title="Upload profile image">
                <InsertPhotoIcon
                  sx={{ color: "rgba(0,0,0,0.5)", fontSize: "35px" }}
                />
              </Tooltip>
            </Box>
            <Box className="cover" onClick={() => myCoverWidget.open()}>
              <Tooltip title="Upload cover image">
                <InsertPhotoIcon
                  sx={{ color: "rgba(0,0,0,0.5)", fontSize: "35px" }}
                />
              </Tooltip>
            </Box>
          </Box>

          <Formik
            initialValues={{
              fullname: "",
              bio: "",
            }}
            onSubmit={async (values) => {
              const body = {
                full_name: values.fullname,
                bio: values.bio,
              };
              Submitbio(body);
              UpdateUserDetails();
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
                <Box className="form_input_wrapper">
                  <label htmlFor="fullname">Full name</label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onBlur={handleBlur}
                    value={values.fullname}
                    className="form_input"
                  ></input>
                </Box>

                <Box className="form_input_wrapper">
                  <label htmlFor="bio">Bio</label>
                  <input
                    type="text"
                    id="bio"
                    name="bio"
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onBlur={handleBlur}
                    value={values.bio}
                    className="form_input"
                  ></input>
                </Box>

                <Box className="nav-buttons">
                  <Button
                    variant="outlined"
                    className="nav-main-btn"
                    onClick={props.CloseUpdateProfile}
                  >
                    CANCEL
                  </Button>

                  <Button
                    variant="outlined"
                    className="nav-main-btn save"
                    type="submit"
                    onClick={props.CloseUpdateProfile}
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

export default UpdateProfile;
