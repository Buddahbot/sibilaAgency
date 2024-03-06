import twoBoxes from "@/data/twoBoxes";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-tilt";

const TwoBoxes = () => {
  return (
    <section className="two-boxes">
      <Container>
        <Row>
          {twoBoxes.map(({ id, bg, tagline, title, slide }) => (
            <Col key={id} xl={6} lg={6} className={`animated ${slide}`}>
              <div className="two-boxes__single">
                <Tilt
                  className="two-boxes__bg"
                  style={{ backgroundImage: `url(${bg.src})` }}
                  options={{ scale: 1 }}
                />
                <p className="two-boxes__tagline">{tagline}</p>
                <h4 className="two-boxes__title">{title}</h4>
                <div className="two-boxes__arrow">
                  <a href="#">
                    <span className="icon-arrow-right"></span>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TwoBoxes;
