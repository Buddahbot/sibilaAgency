import ctaTwo from "@/data/ctaTwo";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { icon, title } = ctaTwo;

const CTATwo = () => {
  return (
    <section className="cta-two">
      <div className="cta-two__box-1"></div>
      <div className="cta-two__box-2"></div>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="cta-two__inner">
              <div className="cta-two__left">
                <div className="cta-two__icon">
                  <span className={icon}></span>
                </div>
                <div className="cta-two__title-box">
                  <h2 className="cta-two__title">
                    <TextSplit text={title} />
                  </h2>
                </div>
              </div>
              <div className="cta-two__right">
                <Link href="/contact">
                  <a className="thm-btn cta-two__btn">let’s get started</a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTATwo;
