import welcomeThree from "@/data/welcomeThree";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import Title from "../Reuseable/Title";

const { tagline, title, text, features, image, smallImage } = welcomeThree;

const WelcomeThree = () => {
  return (
    <section className="welcome-three">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="welcome-three__left">
              <Title title={title} tagline={tagline} className="text-left" />
              <p className="welcome-three__text">{text}</p>
              <div className="welcome-three__features">
                <ul className="list-unstyled welcome-three__features-box">
                  {features.map(({ id, text, icon }) => (
                    <li key={id}>
                      <div className="icon">
                        <span className={icon}></span>
                      </div>
                      <div className="text">
                        <p>
                          <TextSplit text={text} />
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/about">
                <a className="thm-btn welcome-three__btn">Get in touch</a>
              </Link>
            </div>
          </Col>
          <Col xl={6}>
            <div className="welcome-three__right">
              <div className="welcome-three__img-box animated slideInRight">
                <div className="welcome-three-img">
                  <Image src={image.src} alt="" />
                </div>
                <div className="welcome-three__small-img">
                  <Image src={smallImage.src} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WelcomeThree;
