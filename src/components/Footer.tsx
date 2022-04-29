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
            <a href="/">
              <svg
                className="M"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0V21H21V0H0ZM17.4469 4.97344L16.3219 6.05156C16.2234 6.12656 16.1766 6.24844 16.1953 6.36563V14.3016C16.1766 14.4234 16.2234 14.5453 16.3219 14.6156L17.4234 15.6937V15.9328H11.8922V15.7031L13.0312 14.5969C13.1438 14.4844 13.1437 14.4516 13.1437 14.2828V7.86563L9.975 15.9094H9.54844L5.85938 7.86563V13.2562C5.82656 13.4812 5.90625 13.7109 6.06562 13.875L7.54688 15.6703V15.9094H3.3375V15.6703L4.81875 13.875C4.97813 13.7109 5.04844 13.4812 5.01094 13.2562V7.02188C5.02969 6.84844 4.96406 6.67969 4.83281 6.5625L3.51562 4.97344V4.73438H7.60781L10.7672 11.6719L13.5469 4.73906H17.4469V4.97344Z"
                  fill="#7A7E84"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
