import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav container">
      <div className="nav--margin"><div className="nav__login container">
        <form className="nav__login__search">
          <div className="nav__login__search__inputbar">
            <i className="fa-solid fa-magnifying-glass nav__login__search__inputbar__icon"></i>
            <input
              type="text"
              required
              placeholder={"Find Information"}
              className="nav__login__search__inputbar__input"
            />
          </div>
          <button className="nav__login__search__btn">Search</button>
        </form>
        <div className="nav__login__action">
          <NavLink to="/" className="link">
            About Baby Dairy
          </NavLink>
          <NavLink to="/" className="link">
            Sign in
          </NavLink>
          <NavLink to="/" className="link btn">
            Sign up
          </NavLink>
        </div>
      </div></div>
      <div className="nav__sections container">
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
