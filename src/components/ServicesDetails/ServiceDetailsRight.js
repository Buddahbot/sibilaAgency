import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Faq from "../Faq/Faq";

const ServiceDetailsRight = ({ service = {} }) => {
  const {
    title,
    image,
    text,
    points,
    benefitsText,
    benefits,
    benefitsImg,
    faqs,
  } = service;

  return (
    <div className="service-details__right">
      <div className="service-details__img">
        <Image src={image.src} alt="" />
      </div>
      <div className="service-details__content">
        <h3 className="service-details__title">{title}</h3>
        <p className="service-details__text">{text}</p>
      </div>
      <ul className="service-details__points list-unstyled">
        {points.map((point, i) => (
          <li key={i}>
            <h4>{point}</h4>
            <div className="service-details__points-count"></div>
          </li>
        ))}
      </ul>
      <div className="service-details__benefits">
        <Row>
          <Col xl={6}>
            <div className="service-details__benefits-content">
              <h3 className="service-details__benefits-title">Our Benefits</h3>
              <p className="service-details__benefits-text">{benefitsText}</p>
              <ul className="list-unstyled service-details__benefits-list">
                {benefits.map((benefit, i) => (
                  <li key={i}>
                    <div className="icon">
                      <span className="icon-check"></span>
                    </div>
                    <div className="text">
                      <p>{benefit}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col xl={6}>
            <div className="service-details__benefits-img">
              <Image src={benefitsImg.src} alt="" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="service-details__faq">
        <Faq faqs={faqs} />
      </div>
    </div>
  );
};

export default ServiceDetailsRight;
