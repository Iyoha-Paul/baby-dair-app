import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav__login">
        <div className="nav__login__search">
          <input type="text" className="nav__login__search__input" />
          <button className="nav__login__search__btn">Search</button>
        </div>
        <div className="nav__login__action">
          <NavLink to="/" className="link">
            About Baby Dairy
          </NavLink>
          <NavLink to="/" className="link">
            Sign in
          </NavLink>
          <NavLink to="/" className="link">
            Sign up
          </NavLink>
        </div>
      </div>
      <div className="nav__sections">
        <NavLink to="/" className="link">
          Community
        </NavLink>
        <NavLink to="/" className="link">
          Getting Pregnant
        </NavLink>
        <NavLink to="/" className="link">
          Pregnancy
        </NavLink>
        <NavLink to="/" className="link">
          Baby
        </NavLink>
        <NavLink to="/" className="link">
          Health
        </NavLink>
        <NavLink to="/" className="link">
          Video
        </NavLink>
        <NavLink to="/" className="link">
          For you
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
