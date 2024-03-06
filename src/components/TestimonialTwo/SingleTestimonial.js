import React from "react";
import { Image } from "react-bootstrap";

const SingleTestimonial = ({ testimonial = {}, listRef }) => {
  const {
    text,
    client: { image, name, title },
  } = testimonial;

  return (
    <div
      ref={listRef}
      style={{ userSelect: "none" }}
      className="testimonial-two__single"
    >
      <p className="testimonial-two__text">{text}</p>
      <div className="testimonial-two__client-info">
        <div className="testimonial-two__client-img">
          <Image
            src={require(`@/images/testimonial/${image}`).default.src}
            alt=""
          />
        </div>
        <div className="testimonial-two__client-details">
          <h4 className="testimonial-two__client-name">{name}</h4>
          <p className="testimonial-two__client-title">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
