import React from "react";
import { NavLink } from "react-router-dom";
import heroImg from "../images/heroImg.svg";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        background: `linear-gradient(
         rgba(0, 0, 0, 0.459),
          rgba(0, 0, 0, 0.459)
           ),url(${heroImg})   no-repeat center / cover`,
        backgroundRepeat: "no-repeat",
        height: "64.2rem",
      }}
    >
      {/* <img src={Rectangle6} alt="salesFunnelImage" /> */}

      <div className="container">
        <h1>Follow your baby's amazing development</h1>
        <p>
          Baby Diary is the world's number one digital parenting resource, with
          content that reaches more than 100 million people monthly.
        </p>
        <div className="hero__cta">
          <NavLink to="/" className="btn btn--pink">
            Get Started
          </NavLink>
          <NavLink to="/" className="btn btn--white">
            Sign in
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
