import React from "react";
// import BabyDairyBlogSection from './BabyDairyBlogSection'
import pregnantWoman4 from "../images/pregnantWoman4.svg";
import pregnantWoman3 from "../images/pregnantWoman3.svg";
import pregnantWoman2 from "../images/pregnantWoman2.svg";
import pregnantWoman1 from "../images/pregnantWoman1.svg";

const BabyDairyBlogCard = () => {
  const blogs = [
    {
      BlogThumbnail: pregnantWoman1,
      BlogBody: `From fertility to baby-name...`,
      BlogTopic: `  7 baby's Checklist`,
    },
    {
      BlogThumbnail: pregnantWoman2,
      BlogBody: `From fertility to baby-name... `,
      BlogTopic: `Awesome baby name ideas`,
    },

    {
      BlogThumbnail: pregnantWoman3,
      BlogBody: ` From fertility to baby-name...`,
      BlogTopic: `10 signs that youre pregnant`,
    },

    {
      BlogThumbnail: pregnantWoman4,
      BlogBody: `From fertility to baby-name...`,
      BlogTopic: `Pregnancy and back pain`,
    },
  ];
  return (
    <div className="bdb__bdb-card">
      {blogs.map((blog) => (
        <div className="bdb__bdb-card__card">
          <div className="bdb__bdb-card__card__img-container">
            <img
              src={blog.BlogThumbnail}
              alt="pregnant woman"
              className="bdb__bdb-card__card__img-container__img"
            />
          </div>
          <div className="bdb__bdb-card__card__details">
            <h4 className="bdb__bdb-card__card__details__topic">
              {blog.BlogTopic}
            </h4>
            <p className="bdb__bdb-card__card__details__body">
              {blog.BlogBody}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BabyDairyBlogCard;
