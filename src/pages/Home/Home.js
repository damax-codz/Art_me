import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { link, Outlet } from "react-router-dom";
import anim from "../../components/images/anim.jpg";
import dance from "../../components/images/dance.png";
import eat from "../../components/images/eat.jpg";
import flow from "../../components/images/flow.jpg";
import hand from "../../components/images/hand.jpg";
import haus from "../../components/images/haus.jpg";
import lit from "../../components/images/lit.jpg";
import mam from "../../components/images/mam.jpg";
import mast from "../../components/images/mast.jpg";
import mil from "../../components/images/mil.jpg";
import mon from "../../components/images/mon.jpg";
import nig from "../../components/images/nig.jpg";
import umb from "../../components/images/umb.jpg";
import video from "../../components/video/video.mp4";
import "./home.scss";
import CallMadeIcon from "@mui/icons-material/CallMade";
let showVid = (e) => {
  let vid = document.getElementById("video");
  e.target.style.opacity = ".7";
};
let hideVid = (e) => {
  let vid = document.getElementById("video");
  e.target.style.opacity = "0";
};

const Home = () => {
  return (
    <div className="main">
      <div className="page">
        <div className="img-text">
          <img src="https://cdn.pixabay.com/photo/2018/03/22/08/11/art-3249631_1280.png" />
        </div>
        <div className="left-text">
          <span>Exploring Art </span>
          <span>Around</span>
          <span> The World</span>
        </div>
      </div>

      <div className="collection-scroll"></div>

      <div className="image-grid-container">
        <div className="disappear-text">
          <h2 className="text-one">Art in the Collection</h2>
          <h2 className="text-two">Check Them Out</h2>
        </div>
        <Grid container className="image-grid">
          <Grid item className="image-container long-row">
            <Box className="container">
              <Box
                component="img"
                src={anim}
                alt="green iguana"
                className="container-img"
              />
              <Box className="container-text">
                <Typography gutterBottom variant="p" className="artist-name">
                  by Damax and Ezra
                </Typography>
                <p className="art-description">Lorem Ipsum</p>
              </Box>
            </Box>
          </Grid>

          <Grid item className="image-container">
            <Box className="container">
              <Box
                component="img"
                src={dance}
                className="container-img"
                alt="green iguana"
              />
              <Box className="container-text">
                <Typography gutterBottom variant="p" className="artist-name">
                  by Damax and Ezra
                </Typography>
                <p className="art-description">Lorem Ipsuum</p>
              </Box>
            </Box>
          </Grid>
          <Grid item className="image-container long-row-three">
            <Box className="container">
              <Box
                component="img"
                src={eat}
                className="container-img"
                alt="green iguana"
              />
              <Box className="container-text">
                <Typography gutterBottom variant="p" className="artist-name">
                  by Damax and Ezra
                </Typography>
                <p className="art-description">Lorem Ipsum</p>
              </Box>
            </Box>
          </Grid>
          <Grid item className="image-container ">
            <Box className="container">
              <Box
                component="img"
                src={flow}
                className="container-img"
                alt="green iguana"
              />
              <Box className="container-text">
                <Typography gutterBottom variant="p" className="artist-name">
                  by Damax and Ezra
                </Typography>
                <p className="art-description">Lorem Ipsum</p>
              </Box>
            </Box>
          </Grid>
          <Grid item className="image-container ">
            <Box className="container">
              <Box
                component="img"
                src={hand}
                className="container-img"
                alt="green iguana"
              />
              <Box className="container-text">
                <Typography gutterBottom variant="p" className="artist-name">
                  by Damax and Ezra
                </Typography>
                <p className="art-description">Lorem Ipsum</p>
              </Box>
            </Box>
          </Grid>
          <Grid item className="image-container long-row-two">
            <Box className="container">
              <Box
                component="img"
                src={lit}
                className="container-img"
                alt="green iguana"
              />
              <Box className="container-text">
                <Typography gutterBottom variant="p" className="artist-name">
                  by Damax and Ezra
                </Typography>
                <p className="art-description">Lorem Ipsum</p>
              </Box>
            </Box>
          </Grid>
          <Grid item className="image-container ">
            <Box className="container">
              <Box
                component="img"
                src={mam}
                className="container-img"
                alt="green iguana"
              />
              <Box className="container-text">
                <Typography gutterBottom variant="p" className="artist-name">
                  by Damax and Ezra
                </Typography>
                <p className="art-description">Lorem Ipsum</p>
              </Box>
            </Box>
          </Grid>
          <Grid item className="image-container long-row-three">
            <Box className="container">
              <Box
                component="img"
                src={eat}
                className="container-img"
                alt="green iguana"
              />
              <Box className="container-text">
                <Typography gutterBottom variant="p" className="artist-name">
                  by Damax and Ezra
                </Typography>
                <p className="art-description">Lorem Ipsum</p>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Button className="more_collections" variant="contained">
          Discover more collections{" "}
          <CallMadeIcon sx={{ fontSize: 15, marginLeft: "3px" }} />
        </Button>
      </div>

      {/* <h1 id="COLLECTION">
        CHECK OUR <span id="COL">COLLECTION</span>
      </h1> */}
      {/* wanna add some disabled buttons scrolling showing types of art present */}
      {/* <div className="imageslide">
      <marquee width="100%" direction="left" scrollamount="12" behavior="scroll" >
        <img src={dance} className="container-img" alt="anim" />
        <img src={eat} a className="container-img"lt="anim" />
        <img src={flow}  className="container-img"alt="anim" />
        <img src={hand}  className="container-img"alt="anim" />
        <img src={haus}  className="container-img"alt="anim" />
        <img src={lit} alt="anim" />
        <img src={mam} alt="anim" />
        <img src={mast} alt="anim" />
        <img src={mil} alt="anim" />
        <img src={mon} alt="anim" />
        <img src={nig} alt="anim" />
        <img src={umb} alt="anim" />
        </marquee>
      </div> */}
      {/* <Outlet /> */}
    </div>
  );
};

export default Home;
