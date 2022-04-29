import React from "react";
import { NavLink } from "react-router-dom";
import NameDark from "../images/NameDark.svg";
import LogoDark from "../images/LogoDark.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__links">
          <div className="footer__links__left">
            <h5>About</h5>
            <div className="footer__links__sublist">
              <ul className="column">
                <li>
                  <NavLink to="/" className="link">
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="link">
                    Press &amp; News
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="link">
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>

              <ul className="column">
                <li>
                  <NavLink to="/" className="link">
                    Terms of Service
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="link">
                    Intellectual Property Claims
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__links__center">
            <h5>Support</h5>
            <div className="footer__links__sublist">
              <ul className="column">
                <li>
                  <NavLink to="/" className="link">
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="link">
                    Help &amp; Support
                  </NavLink>
                </li>
              </ul>

              <ul className="column">
                <li>
                  <NavLink to="/" className="link">
                    Trust &amp; Safety
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="link">
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__links__right">
            <h5>Community</h5>
            <div className="footer__links__sublist">
              <ul className="column">
                <li>
                  <NavLink to="/" className="link">
                    Blog
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/" className="link">
                    Forum
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="link">
                    Podcast
                  </NavLink>
                </li>
              </ul>

              <ul className="column">
                <li>
                  <NavLink to="/" className="link">
                    Affiliates
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/" className="link">
                    Invite a friend
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__rights">
          {" "}
          <p>
            All rights reserved. Baby Diary is designed for educational purposes
            only.
          </p>
          <p>
            {" "}
            Consult with a medical professional if you have health concerns. Use
            of this site is subject to our{" "}
            <span>
              <NavLink to="/" className="link">
                Terms of Use
              </NavLink>
            </span>{" "}
            and
            <span>
              <NavLink to="/" className="link">
                Privacy Policy
              </NavLink>{" "}
            </span>
            .
          </p>
        </div>
      </div>
      <div className="copyrights">
        <div className="container copyrights__container">
          <div className="copyrights__container__rights">
            <div className="copyrights__container__rights__logo">
              <img
                src={LogoDark}
                alt="logo"
                className="copyrights__container__rights__logo__img"
              />
            </div>
            <div className="copyrights__container__rights__name">
              <img
                src={NameDark}
                alt="logo"
                className="copyrights__container__rights__name__img"
              />
            </div>
            <p>© Baby Dairy. 2020</p>
          </div>
          <div className="copyrights__container__social-media">
            <a href="/">
              <i className=" fa-brands fa-facebook"></i>
            </a>
            <a href="/">
              <i className=" fa-brands fa-twitter"></i>{" "}
            </a>
            <a href="/">
              <i className=" fa-brands fa-instagram"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
