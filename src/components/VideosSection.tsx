import React from "react";
import { NavLink } from "react-router-dom";
import Babydairy from "../images/Babydairy.svg";
import BDlogo from "../images/BDlogo.svg";
import Videocard from "./Videocard";
const VideosSection = () => {
  return (
   <div className="video-section"> 
     <div className="container">
      <div className="video-section__header">
        <img src={BDlogo} alt="baby" className="video-section__logo" />
        <div className="video-section__header__head"><img src={Babydairy} alt="baby" className="video-section__head__img" />
        <p>VIDEOS</p>
        </div>
      </div>
      <div className="video-section__cta">
        <h3>What people are watching now</h3>
        <div>
          <NavLink to="/" className="btn btn--white">
          View more videos
        </NavLink>
        </div>
      </div>
      <div className="video-section__videos">
        <div className="tstimonials__videos__item">
          <Videocard />
        </div>
      </div>
    </div>
    </div>
  );
};

export default VideosSection;
