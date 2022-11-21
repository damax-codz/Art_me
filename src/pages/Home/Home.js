import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

import "./home.scss";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/Nav/Nav";
import FlightIcon from "../../components/images/icons/flight.png";
import LoveIcon from "../../components/images/icons/heart.png";
import MyGif from "../../components/images/icons/dizzy.gif";
import axios from "axios";
import { useEffect } from "react";
import NotLogged from "../../components/modals/NotLogged/NotLogged";

const Home = () => {
  const [unsplashImages, setUnsplashImages] = useState([]);
  const [ LoggedModalStatus,setLoggedModalStatus ] = useState(false)

  async function getImages() {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=art&count=40&client_id=g6gZZ_6ytLizxTOCGRUijH2d-aAJ0Yul2bWy7CUzTyo`
      );
      setUnsplashImages(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  
  function handleLoggedModalClose(){
    setLoggedModalStatus(!LoggedModalStatus)
  }
  function handleLoggedModalOpen(){
    // would first useSelector to check if the person is logged in if not prompt the login modal if the
    // person is logged in, would navigate to gallery
    // navigate("/Art_me/gallery") if person is logged in 
    setLoggedModalStatus(!LoggedModalStatus)
  }

  useEffect(() => {
    getImages();
  }, []);
  return (
    <>
      <Nav />

      <div className="main">
        <div className="page">
          <div className="left-text">
            <span>
              Exploring <span className="left-text-art"> Art </span>{" "}
            </span>
            <span>Around</span>
            <span className="left-text-world">
              {" "}
              <img src={FlightIcon} alt="flight" /> The World
            </span>
          </div>
          <div className="img-text">
            <img src={MyGif}  alt="gif"/>
          </div>
        </div>

        <div className="collection-scroll"></div>

        <div className="image-grid-container">
          <div className="disappear-text">
            <h2 className="text-one">Art in the Collection</h2>
            <h2 className="text-two">Check Them Out</h2>
          </div>

          <Grid container className="image-grid" spacing={4}>
            {unsplashImages
              ? unsplashImages.map((item, index) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={3}
                      key={index}
                      className="grid_container"
                    >
                      <Box
                        component="img"
                        className="grid_image"
                        src={item.urls.full}
                        alt="art-images"
                      />

                      <Box className="grid_image_details">
                        <Box className="profile">
                          <Box
                            className="detail_profile"
                            component="img"
                            src={item.user.profile_image.small}
                            alt="profile"
                          />
                          <Typography className="detail_name">
                            {item.user.first_name} {item.user.last_name}
                          </Typography>
                        </Box>
                        <Box className="detail_likes">
                          {" "}
                          <Box
                            className="detail_love"
                            component="img"
                            src={LoveIcon}
                            sx={{width:"15px",marginRight:"3px"}}
                            alt="like"
                          />
                          {item.likes}
                        </Box>
                      </Box>
                    </Grid>
                  );
                })
              : null}
          </Grid>

          <Box className="more_collections_wrapper">
            <Button className="more_collections" variant="contained" onClick={handleLoggedModalOpen}>
              Discover more collections{" "}
              <CallMadeIcon sx={{ fontSize: 15, marginLeft: "3px" }} />
            </Button>
          </Box>
        </div>

        <Footer />
        <NotLogged LoggedModalStatus={LoggedModalStatus} handleLoggedModalClose={handleLoggedModalClose} />
      </div>
    </>
  );
};

export default Home;

