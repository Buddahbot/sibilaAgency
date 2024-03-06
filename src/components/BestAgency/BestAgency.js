import bestAgency from "@/data/bestAgency";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Faq from "../Faq/Faq";

const { bg, tagline, title, points, experienceIcon, experience, faqs } =
  bestAgency;

const BestAgency = ({ className = "" }) => {
  return (
    <section className={`best-agency ${className}`}>
      <div
        className="best-agency-shape"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <div className="best-agency__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">{tagline}</span>
                <h2 className="section-title__title">{title}</h2>
              </div>
              <ul className="list-unstyled best-agency__points">
                {points.map((point, i) => (
                  <li key={i}>
                    <div className="icon">
                      <span className="icon-check"></span>
                    </div>
                    <div className="text">
                      <p>{point}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="best-agency__experience">
                <div className="best-agency__experience-icon">
                  <span className={experienceIcon}></span>
                </div>
                <div className="best-agency__experience-text-box">
                  <p className="best-agency__experience-text">
                    We have <span>{experience}+</span> years of experiences for
                    give you <br /> better quality results.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="best-agency__right">
              <Faq faqs={faqs} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BestAgency;
