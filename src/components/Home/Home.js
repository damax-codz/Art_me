import React, {useState} from 'react'
import { link , Outlet} from "react-router-dom";
import anim from './../images/anim.jpg'
import dance from './../images/dance.png'
import eat from './../images/eat.jpg'
import flow from './../images/flow.jpg'
import hand from './../images/hand.jpg'
import haus from './../images/haus.jpg'
import lit from './../images/lit.jpg'
import mam from './../images/mam.jpg'
import mast from './../images/mast.jpg'
import mil from './../images/mil.jpg'
import mon from './../images/mon.jpg'
import nig from './../images/nig.jpg'
import umb from './../images/umb.jpg'
import video from './../video/video.mp4';
import './home.css'
let showVid = (e)=>{
let vid = document.getElementById('video')
e.target.style.opacity = '.7'
}
let hideVid = (e)=>{
let vid = document.getElementById('video')
e.target.style.opacity = '0'
}

const Home = () => {
  return (
    <div className="main">
      <div class="arrow">
        {/* <p>Scroll down</p> */}
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="page">
        <div className="img-text">
          <img src="https://cdn.pixabay.com/photo/2018/03/22/08/11/art-3249631_1280.png" />
          <span id="a" className="SPAN">
            A
          </span>
          <span id="r" className="SPAN">
            r
          </span>
          <span id="t" className="SPAN">
            t
          </span>
          <span id="m" className="SPAN">
            m
          </span>
          <span id="e" className="SPAN">
            e
          </span>
          <video
            muted
            autoPlay
            loop
            className="video"
            id="video"
            onMouseEnter={showVid}
            onMouseLeave={hideVid}
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <h1 id="COLLECTION">
        CHECK OUR <span id="COL">COLLECTION</span>
      </h1>
      <div className="imageslide">
      <marquee width="100%" direction="left" scrollamount="12" behavior="scroll" >
        <img src={dance} alt="anim" />
        <img src={eat} alt="anim" />
        <img src={flow} alt="anim" />
        <img src={hand} alt="anim" />
        <img src={haus} alt="anim" />
        <img src={lit} alt="anim" />
        <img src={mam} alt="anim" />
        <img src={mast} alt="anim" />
        <img src={mil} alt="anim" />
        <img src={mon} alt="anim" />
        <img src={nig} alt="anim" />
        <img src={umb} alt="anim" />
        </marquee>
      </div>
      <Outlet />
    </div>
  );
}

export default Home