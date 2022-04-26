import React from "react";
import { NavLink } from "react-router-dom";
import Babydairy from "../images/Babydairy.svg";
import BDlogo from "../images/BDlogo.svg";
import Videocard from "./Videocard";
const VideosSection = () => {
  return (
    <div className="video-section">
      <div className="video-section__header">
        <img src={BDlogo} alt="baby" className="video-section__logo" />
        <img src={Babydairy} alt="baby" className="video-section__head" />
      </div>
      <div className="tetimonials__cta">
        <h3>What people are watching now</h3>
        <NavLink to="/" className="btn btn--white">
          View more videos
        </NavLink>
      </div>
      <div className="video-section__videos">
        <div className="tstimonials__videos__item">
          <Videocard />
        </div>
      </div>
    </div>
  );
};

export default VideosSection;
