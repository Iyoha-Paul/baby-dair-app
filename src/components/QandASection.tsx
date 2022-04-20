import React from "react";
import q1 from "../images/q1.svg";
import q2 from "../images/q2.svg";
import q3 from "../images/q3.svg";
import q4 from "../images/q4.svg";

const QandASection = () => {
  return (
    <div className="q-and-a">
      <h3>Get expert advice and answers</h3>
      <div className="q-and-a__images">
        <div className="q-and-a__images__conatiner">
          <img src={q1} alt="baby" className="q-and-a__images__img" />
        </div>
        <div className="q-and-a__images__conatiner">
          <img src={q2} alt="baby" className="q-and-a__images__img" />{" "}
        </div>
        <div className="q-and-a__images__conatiner">
          <img src={q3} alt="baby" className="q-and-a__images__img" />{" "}
        </div>
        <div className="q-and-a__images__conatiner">
          <img src={q4} alt="baby" className="q-and-a__images__img" />{" "}
        </div>
      </div>
    </div>
  );
};

export default QandASection;
