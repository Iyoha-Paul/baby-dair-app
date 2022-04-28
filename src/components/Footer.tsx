import React from "react";
import { NavLink } from "react-router-dom";

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
            of this site is subject to our <span>Terms of Use</span> and
            <span> Privacy Policy</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
