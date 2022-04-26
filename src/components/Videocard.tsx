import React from "react";
import pregnantWoman4 from "../images/pregnantWoman4.svg";
import pregnantWoman3 from "../images/pregnantWoman3.svg";
import pregnantWoman2 from "../images/pregnantWoman2.svg";
import pregnantWoman1 from "../images/pregnantWoman1.svg";

const Videocard = () => {
  const videos = [
    {
      videoThumbnail: pregnantWoman1,
      videoInfo: `7 baby's Checklist `,
      length: "12mins",
    },
    {
      videoThumbnail: pregnantWoman2,
      videoInfo: `Awesome baby name ideas `,
      length: "12mins",
    },

    {
      videoThumbnail: pregnantWoman3,
      videoInfo: `10 signs that you're pregnant `,
      length: "12mins",
    },

    {
      videoThumbnail: pregnantWoman4,
      videoInfo: `Pregnancyand back pain `,
      length: "12mins",
    },
  ];
  return (
    <div className="videocard">
      {videos.map((video) => (
        <div className="videocard__card">
          <div className="videocard__card__img-container">
            <img
              src={video?.videoThumbnail}
              alt="pregnant woman"
              className="videocard__card__img-container__img"
            />
            <button className="videocard__card__img-container__btn">
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
          <div className="videocard__card__details">
            <p className="videocard__card__details__name">{video?.videoInfo}</p>
            <p className="videocard__card__details__duration">
              {video?.length}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videocard;
