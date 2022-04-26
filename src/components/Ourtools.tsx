import React from "react";
import calender from "../images/calender.svg";
import weighScale from "../images/weighScale.svg";
import timer from "../images/timer.svg";
import chart from "../images/chart.svg";
import timerCount from "../images/timerCount.svg";
import pictureIcon from "../images/pictureIcon.svg";
import calenderWithTimer from "../images/calender.svg";

const Ourtools = () => {
  return (
    <div className="tools container">
      <h3>Explore our tools</h3>
      <div className="tools__container">
        <div className="tools__tool">
          <div className="tools__tool__imgcontainer">
          <div className="tools__tool__imgcontainer__design"> &nbsp; </div>
            
            <img
              src={calender}
              alt="pregnancy schedule"
              className="tools__tool__imgcontainer__img"
            />
          </div>
          <p>Due Date Calculator</p>
        </div>
        <div className="tools__tool">
          <div className="tools__tool__imgcontainer">
          <div className="tools__tool__imgcontainer__design"> &nbsp; </div>

            <img src={weighScale} alt="pregnancy schedule" className="tools__tool__imgcontainer__img" />
          </div>
          <p>Pregnancy Weight Gain Calculator</p>
        </div>
        <div className="tools__tool">
          <div className="tools__tool__imgcontainer">
            <div className="tools__tool__imgcontainer__design"> &nbsp; </div>
            <img
              src={timerCount}
              alt="pregnancy schedule"
              className="tools__tool__imgcontainer__img"
            />
          </div>
          <p>Contraction Timer</p>
        </div>
        <div className="tools__tool">
          <div className="tools__tool__imgcontainer">
            <div className="tools__tool__imgcontainer__design"> &nbsp; </div>
            <img
              src={chart}
              alt="pregnancy schedule"
              className="tools__tool__imgcontainer__img"
            />
          </div>
          <p>Ghild Growth Chart</p>
        </div>
        <div className="tools__tool">
          <div className="tools__tool__imgcontainer">
          <div className="tools__tool__imgcontainer__design"> &nbsp; </div>

            <img
              src={calenderWithTimer}
              alt="pregnancy schedule"
              className="tools__tool__imgcontainer__img"
            />
          </div>
          <p>Immunization Scheduler</p>
        </div>
        <div className="tools__tool">
          <div className="tools__tool__imgcontainer">
          <div className="tools__tool__imgcontainer__design"> &nbsp; </div>

            <img
              src={pictureIcon}
              alt="pregnancy schedule"
              className="tools__tool__imgcontainer__img"
            />
          </div>
          <p>Memories Save</p>
        </div>
      </div>
    </div>
  );
};

export default Ourtools;
