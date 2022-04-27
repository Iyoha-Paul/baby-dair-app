import React from "react";
import testimonialPic1 from "../images/testimonialPic1.svg";
import Testimonials from "./Testimonials";

const Testimonialcard = () => {
  const testimonials = [
    {
      picture: testimonialPic1,
      message: `Love this app! I've been using it since I found out I was pregnant. My daughter is now 8 months old, and I still rely on the information provided. I would be lost without it. `,
      author: "Oyinkansola Salami",
    },
  ];
  return (
    <div className="testimonials__testimonial">
      {testimonials.map((testimonial) => (
        <div className="testimonials__testimonial">
          <div className="testimonials__testimonial__message">
            <div className="testimonials__testimonial__message__bg">
              Our Testimonials
            </div>
            <p className="testimonials__testimonial__message__msg">
              {testimonial.message}
            </p>
            <div className="testimonials__testimonial__message__author">
              {testimonial.author}
            </div>
          </div>
          <img
            src={testimonial.picture}
            alt="pregnant woman"
            className="testimonials__testimonial__img"
          />
        </div>
      ))}
    </div>
  );
};

export default Testimonialcard;
