import React from "react";
import calender from "../images/calender.svg";
import weighScale from "../images/weighScale.svg";
import timer from "../images/timer.svg";
import chart from "../images/chart.svg";
import pictureIcon from "../images/pictureIcon.svg";
import calenderWithTimer from "../images/calender.svg";

const Ourtools = () => {
  return (
    <div className="tools">
      <h3>Explore our tools</h3>
      <div className="tools__container">
        <div className="tools__tool">
          <div className="tools__tool__img">
            <img
              src={calender}
              alt="pregnancy schedule"
              className="pregnancy-schedule__img"
            />
          </div>
          <p>Due Date Calculator</p>
        </div>
        <div className="tools__tool">
          <div className="tools__tool__img">
            <img src={weighScale} alt="pregnancy schedule" className="" />
          </div>
          <p>Pregnancy Weight Gain Calculator</p>
        </div>
        <div className="tools__tool">
          <div className="tools__tool__img">
            <img
              src={timer}
              alt="pregnancy schedule"
              className="pregnancy-schedule__img"
            />
          </div>
          <p>Contraction Timer</p>
        </div>
        <div className="tools__tool">
          <div className="tools__tool__img">
            <img
              src={calenderWithTimer}
              alt="pregnancy schedule"
              className="pregnancy-schedule__img"
            />
          </div>
          <p>Immunization Scheduler</p>
        </div>
        <div className="tools__tool">
          <div className="tools__tool__img">
            <img
              src={pictureIcon}
              alt="pregnancy schedule"
              className="pregnancy-schedule__img"
            />
          </div>
          <p>Memories Save</p>
        </div>
      </div>
    </div>
  );
};

export default Ourtools;
