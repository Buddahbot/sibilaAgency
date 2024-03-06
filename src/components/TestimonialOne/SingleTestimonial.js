import React from "react";
import { Image } from "react-bootstrap";

const SingleTestimonial = ({ testimonial = {}, listRef }) => {
  const { image, text, name, title } = testimonial;

  return (
    <div
      ref={listRef}
      style={{ userSelect: "none" }}
      className="testimonial-one__single"
    >
      <div className="testimonial-one__content">
        <p className="testimonial-one__text">{text}</p>
      </div>
      <div className="testimonial-one__client-info">
        <div className="testimonial-one__client__img">
          <Image
            src={require(`@/images/testimonial/${image}`).default.src}
            alt=""
          />
        </div>
        <h4 className="testimonial-one__name">{name}</h4>
        <p className="testimonial-one__title">{title}</p>
      </div>
    </div>
  );
};

export default SingleTestimonial;
