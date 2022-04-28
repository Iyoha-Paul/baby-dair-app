import React from "react";
import lowerPhone from "../images/lowerPhone.svg";
import appStore from "../images/appStore.svg";
import playStore from "../images/playStore.svg";
import phoneLight from "../images/phoneLight.svg";
import phoneDark from "../images/phoneDark.svg";
import { NavLink } from "react-router-dom";

const BabyDairyPromo = () => {
  return (
    <div className="bdp container">
      <div className="bdp__promo">
        <div className="bdp__promo__container">
          <div className="bdp__promo__container__cta">
            <h3>Get the BbayCenter app</h3>
            <p>The #1 app for tracking pregnancy and baby growth</p>
            <div className="bdp__promo__container__cta__btns">
              <NavLink to="/" className="bdp__promo__container__cta__btns__btn">
                <img
                  src={appStore}
                  alt="pregnancy schedule"
                  className="tools__tool__imgcontainer__img"
                />
              </NavLink>

              <NavLink to="/" className="bdp__promo__container__cta__btns__btn">
                <img
                  src={playStore}
                  alt="pregnancy schedule"
                  className="tools__tool__imgcontainer__img"
                />
              </NavLink>
            </div>
          </div>
          <div className="bdp__promo__container__pictures">
            <div className="bdp__promo__container__pictures__picture bdp__promo__container__pictures__picture--left">
              <img src={phoneDark} alt="pregnancy schedule" className=" " />
            </div>
            <div className="bdp__promo__container__pictures__picture bdp__promo__container__pictures__picture--right">
              <img src={phoneLight} alt="pregnancy schedule" className=" " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabyDairyPromo;
