import weBuild from "@/data/weBuild";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import Title from "../Reuseable/Title";

const { image, icon, content, tagline, title, points } = weBuild;

const WeBuild = () => {
  return (
    <section className="we-build">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="we-build__left animated slideInLeft">
              <div className="we-build__img">
                <Image src={image.src} alt="" />
                <div className="we-build__founded">
                  <div className="we-build__founded-icon">
                    <span className={icon}></span>
                  </div>
                  <div className="we-build__content">
                    <h4>
                      <TextSplit text={content} />
                    </h4>
                  </div>
                </div>
                <div className="we-build__box-1"></div>
                <div className="we-build__box-2"></div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="we-build__right">
              <Title title={title} tagline={tagline} className="text-left" />
              <ul className="we-build__points list-unstyled">
                {points.map(({ id, title, text }) => (
                  <li key={id}>
                    <div className="icon">
                      <span className="icon-tick"></span>
                    </div>
                    <div className="text-box">
                      <h4 className="we-build__points-title">{title}</h4>
                      <p className="we-build__points-text">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WeBuild;
