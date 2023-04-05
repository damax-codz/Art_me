import { Box, Button, IconButton, Typography } from "@mui/material";
import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import GoogleIcon from "./../../../components/images/icons/google.png";
import Art_lover from "./../../../components/images/Making_art.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { logged } from "../../../redux/Logged";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaTags from "react-meta-tags";
import { setDetails, setToken } from "../../../redux/UserDetail";

const Login = () => {
  const [passwordState, SetPasswordState] = useState(true);
  const { logvalue } = useSelector( (state) => state.logged)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const passwordVisibility = () => {
    SetPasswordState(!passwordState);
  };

  async function handleFormSubmit(body) {
    try {
      const response = await axios({
        method: "post",
        url: "https://artme-backend-production.up.railway.app/api/login",
        data: body,
        headers: { "Content-Type": "application/json" },
      });
      // console.log(response);
      // console.log("heyy")
      if (response.status === 200) {
        toast.success("Login Successful");
        dispatch(logged(true));
        dispatch(setToken(response.data.data));
        axios
.get(
            "https://artme-backend-production.up.railway.app/api/users/logged-in",
            {
              headers: {
                Authorization: response.data.data,
              },
            }
          )
          .then(function (response) {
            dispatch(setDetails(response.data.data));

            console.log(logvalue)
          })
          .catch(function (error) {});

        navigate("/Art_me/homepage/home");
      }
    } catch (error) {
      if (error) {
        toast.error("Login Unsuccessful");
      }
    }
  }

  return (
    <>
      <MetaTags>
        <title>Login | Artme</title>
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
            <Typography className="welcome_back">Welcome back !</Typography>
            <Typography className="welcome_back_text">
              Enter your details to get signed in to your account
            </Typography>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .required("Email is required !")
                  .email("invalid email !"),
                password: Yup.string()
                  .required("Password is required !")
                  .min(8, "Password has to be 8 or more characters"),
              })}
              onSubmit={async (values) => {
                const body = {
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

                  <Box className="btn_container">
                    <Button
                      type="submit"
                      variant="contained"
                      className="sign_in_btn"
                      sx={{
                        backgroundColor: "rgba(165, 42, 42, 1)",
                      }}
                      // disabled={!isSubmitting}
                    >
                      Sign in
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
                      Sign in with Google
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>

          <Box className="no_account">
            Don't have an account? <Link to="/Art_me/signup">Signup</Link>{" "}
          </Box>
        </Box>
        <Box className="image_box" sx={{ width: { xs: "0%", md: "60%" } }}>
          <img src={Art_lover} alt="art_lover" className="art_image" />
        </Box>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
