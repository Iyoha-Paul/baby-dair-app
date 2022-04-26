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
    <div className="q-and-a__cards">
      {qAndACList.map((qAndA) => (
        <div className="q-and-a__cards__card"
        style={{
          background: `linear-gradient(
           rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
             ),url(${qAndA.picture})   no-repeat center / cover`,
          backgroundRepeat: "no-repeat",
          height: "38rem",
        }}
        >
          
          <div className="q-and-a__cards__card__question">{qAndA.question}</div>
        </div>
      ))}
    </div>
  );
};

export default QandASectionCard;
