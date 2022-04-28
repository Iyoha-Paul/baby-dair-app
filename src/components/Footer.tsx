import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__links">
          <div className="footer__links__left">
            <div>
              <h5>About</h5>
              <div className="footer__links__left--left">
                <NavLink to="/" className="link">
                  Careers
                </NavLink>
                <NavLink to="/" className="link">
                  Press &amp; News
                </NavLink>
                <NavLink to="/" className="link">
                  Privacy Policy
                </NavLink>
              </div>
            </div>
            <div className="footer__links__left--right">
              <NavLink to="/" className="link">
                Terms of Service
              </NavLink>
              <NavLink to="/" className="link">
                Intellectual Property Claims
              </NavLink>
            </div>
          </div>
          <div className="footer__links__center">
            <div>
              <h5>Support</h5>
              <div className="footer__links__center--left">
                <NavLink to="/" className="link">
                  FAQ
                </NavLink>
                <NavLink to="/" className="link">
                  Help &amp; Support
                </NavLink>
              </div>
            </div>
            <div className="footer__links__center--right">
              <NavLink to="/" className="link">
                Trust &amp; Safety
              </NavLink>
              <NavLink to="/" className="link">
                Contact us
              </NavLink>
            </div>
          </div>
          <div className="footer__links__right">
            <div>
              <h5>Community</h5>
              <div className="footer__links__right--left">
                <NavLink to="/" className="link">
                  Blog
                </NavLink>
                <NavLink to="/" className="link">
                  Forum
                </NavLink>
                <NavLink to="/" className="link">
                  Podcast
                </NavLink>
              </div>
            </div>
            <div className="footer__links__right--right">
              <NavLink to="/" className="link">
                Affiliates
              </NavLink>
              <NavLink to="/" className="link">
                Invite a friend
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
