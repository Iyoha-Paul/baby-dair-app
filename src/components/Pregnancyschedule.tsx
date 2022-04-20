import React from "react";
import pregnancySchedule from "../images/pregnancySchedule.svg";

const Pregnancyschedule = () => {
  return (
    <div className="pregnancy-schedule">
      <h2>Your pregnancy week by week</h2>
      <img
        src={pregnancySchedule}
        alt="pregnancy schedule"
        className="pregnancy-schedule__img"
      />
    </div>
  );
};

export default Pregnancyschedule;
