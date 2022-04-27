import React from "react";
import Testimonialcard from "./Testimonialcard";

const Testimonials = () => {
  return (
    <div className="testimonials container">
      <button className="testimonials__btn testimonials__btn--right">
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      <button className="testimonials__btn testimonials__btn--left">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <Testimonialcard />
    </div>
  );
};

export default Testimonials;
