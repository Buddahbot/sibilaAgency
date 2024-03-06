import welcomeTwo from "@/data/welcomeTwo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { tagline, title, image, smallImage, bigText, rightText, points } =
  welcomeTwo;

const WelcomeTwo = () => {
  return (
    <section className="welcome-two">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">{tagline}</span>
          <h2 className="section-title__title">
            {title.split("\n").map((t, i) => (
              <Fragment key={i}>
                {t} <br />
              </Fragment>
            ))}
          </h2>
        </div>
        <Row>
          <Col xl={6}>
            <div className="welcome-two__left animated slideInLeft">
              <div className="welcome-two__img-box">
                <div className="welcome-two__img">
                  <Image src={image.src} alt="" />
                </div>
                <div className="welcome-two__small-img">
                  <Image src={smallImage.src} alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="welcome-two__right">
              <div className="welcome-two__big-text">{bigText}</div>
              <p className="welcome-two__right-text">{rightText}</p>
              <ul className="welcome-two__points list-unstyled">
                {points.map(({ id, title, text }) => (
                  <li key={id}>
                    <div className="icon">
                      <span className="icon-tick"></span>
                    </div>
                    <div className="text">
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <a className="thm-btn welcome-two__btn">Discover More</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WelcomeTwo;
