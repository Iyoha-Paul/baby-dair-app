import React from "react";
import q1 from "../images/q1.svg";
import q2 from "../images/q2.svg";
import q3 from "../images/q3.svg";
import q4 from "../images/q4.svg";
const QandASectionCard = () => {
  const qAndACList = [
    {
      picture: q1,
      question: `Is it safe?`,
    },
    {
      picture: q2,
      question: `Labour and delivery`,
    },
    {
      picture: q3,
      question: `Diapering`,
    },
    {
      picture: q4,
      question: `Bbay sleep`,
    },
  ];
  return (
    <div className="q-and-a__card">
      {qAndACList.map((qAndA) => (
        <div className="q-and-a__images">
          <img
            src={qAndA.picture}
            alt="pregnant woman"
            className="testimonials__testimonial__img"
          />
          <div className="q-and-a__images__question">{qAndA.question}</div>
        </div>
      ))}
    </div>
  );
};

export default QandASectionCard;
