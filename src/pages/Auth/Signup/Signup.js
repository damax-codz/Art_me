import React, { useState } from "react";
import "./Signup.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { Box, Button, IconButton, Typography } from "@mui/material";
import GoogleIcon from "./../../../components/images/icons/google.png";
import Art_lover from "./../../../components/images/focus.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MetaTags from "react-meta-tags";
import axios from "axios";
import { loggedIn } from "../../../redux/Logged";
import { useDispatch } from "react-redux/es/exports";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [passwordState, SetPasswordState] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const passwordVisibility = () => {
    SetPasswordState(!passwordState);
  };

  // WAITING FOR CHANGE IN BACKEND

  async function handleFormSubmit(body) {
    try {
      const response = await axios({
        method: "post",
        url: "https://api-artme.onrender.com/api/signup",
        data: body,
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);

      if (response.status === 200) {
        toast.success("Signup Successful");
        dispatch(loggedIn());
        navigate("/Art_me/homepage/home");
      }
    } catch (error) {
      if (error) {
        toast.error("Signup Unsuccessful");
      }
      console.log(error);
    }
  }

  return (
    <>
      <MetaTags>
        <title>Signup | Artme</title>
        <meta
          name="description"
          content="Check out some of today’s popular collections. "
        />
      </MetaTags>

      <div className="login_container">
        <Box className="form_box" sx={{ width: { xs: "100%", md: "40%" } }}>
          <Box className="logo">
            <Box className="logo_circle"></Box>
            <Typography
              variant="h3"
              className="nav-title-text"
              onClick={() => {
                setTimeout(() => navigate("/Art_me/home"), 1000);
              }}
            >
              Artme{" "}
            </Typography>
          </Box>

          <Box className="form">
            <Typography className="welcome_back">Signup To Artme</Typography>
            <Typography className="welcome_back_text">
              Create a new account
            </Typography>

            <Formik
              initialValues={{
                fullname: "",
                email: "",
                password: "",
                confirmpassword: "",
              }}
              validationSchema={Yup.object().shape({
                fullname: Yup.string().required("Your name is required !"),
                email: Yup.string()
                  .required("Email is required !")
                  .email("invalid email !"),
                password: Yup.string()
                  .required("Password is required !")
                  .min(8, "Password has to be 8 or more characters"),
                confirmpassword: Yup.string()
                  .required("you need to renter your password")
                  .oneOf([Yup.ref("password"), null], "Passwords must match"),
              })}
              onSubmit={async (values) => {
                const body = {
                  full_name: values.fullname,
                  email: values.email,
                  password: values.password,
                };
                handleFormSubmit(JSON.stringify(body));
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
                    <label htmlFor="fullname">Fullname</label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      onChange={handleChange}
                      onSubmit={handleSubmit}
                      onBlur={handleBlur}
                      value={values.fullname}
                      className={
                        touched.fullname && errors.fullname
                          ? "info_error"
                          : null
                      }
                    ></input>
                    {errors.fullname && touched.fullname && (
                      <span className="error_message">{errors.fullname}</span>
                    )}
                  </Box>

                  <Box className="form_input_wrapper">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      onSubmit={handleSubmit}
                      onBlur={handleBlur}
                      value={values.email}
                      className={
                        touched.email && errors.email ? "info_error" : null
                      }
                    ></input>
                    {errors.email && touched.email && (
                      <span className="error_message">{errors.email}</span>
                    )}
                  </Box>
                  <Box className="form_input_wrapper">
                    <label htmlFor="email">Password</label>
                    <Box className="password_container">
                      <IconButton
                        onClick={passwordVisibility}
                        className="password_icon"
                      >
                        {passwordState ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                      <input
                        type={passwordState ? "password" : "text"}
                        id="password"
                        name="password"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        onBlur={handleBlur}
                        value={values.password}
                        className={
                          errors.password && touched.password
                            ? "info_error"
                            : null
                        }
                      ></input>
                    </Box>
                    {touched.password && errors.password && (
                      <span className="error_message">{errors.password}</span>
                    )}
                  </Box>

                  <Box className="form_input_wrapper">
                    <label htmlFor="confirm-password"> Confirm password </label>
                    <Box className="password_container">
                      <IconButton
                        onClick={passwordVisibility}
                        className="password_icon"
                      >
                        {passwordState ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                      <input
                        type={passwordState ? "password" : "text"}
                        id="confirmpassword"
                        name="confirmpassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmpassword}
                        className={
                          touched.confirmpassword && errors.confirmpassword
                            ? "info-error"
                            : null
                        }
                      />
                    </Box>
                    {errors.confirmpassword && touched.confirmpassword && (
                      <span className="error_message">
                        {errors.confirmpassword}
                      </span>
                    )}
                  </Box>

                  <Box className="btn_container">
                    <Button
                      type="submit"
                      variant="contained"
                      className="sign_in_btn"
                      sx={{
                        backgroundColor: "rgba(165, 42, 42, 1)",
                      }}
                    >
                      Sign up
                    </Button>
                    <Button variant="outlined" className="sign_in_ggl_btn">
                      <Box
                        component="img"
                        src={GoogleIcon}
                        sx={{
                          width: "20px",
                          marginRight: "5px",
                        }}
                      />{" "}
                      Sign up with Google
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>

          <Box className="no_account">
            Already have an account? <Link to="/Art_me/login">log in</Link>{" "}
          </Box>
        </Box>
        <Box className="image_box" sx={{ width: { xs: "0%", md: "60%" } }}>
          <img src={Art_lover} alt="art_lover" className="art_image" />
        </Box>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
