import weCare from "@/data/weCare";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { image, title, text } = weCare;

const WeCare = () => {
  return (
    <section className="we-care">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="we-care__inner">
              <div className="we-care__img">
                <Image src={image.src} alt="" />
              </div>
              <div className="we-care__content">
                <h3 className="we-care__title">{title}</h3>
                <p className="we-care__text">{text}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WeCare;
