import aboutPage from "@/data/aboutPage";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Tilt from "react-tilt";
import Title from "../Reuseable/Title";

const { images, badge, tagline, title, text1, text2 } = aboutPage;

const AboutPage = () => {
  return (
    <section className="about-page">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="about-page__left">
              <ul className="list-unstyled about-page__images">
                {images.map((image, i) => (
                  <li key={i}>
                    <div className={`about-page__img-${i + 1}`}>
                      <Image
                        src={require(`@/images/resources/${image}`).default.src}
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="about-page__badge">
                <Tilt options={{ scale: 1 }}>
                  <Image src={badge.src} alt="" />
                </Tilt>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-page__right">
              <Title title={title} tagline={tagline} className="text-left" />
              <p className="about-page__right-text-1">{text1}</p>
              <h4 className="about-page__right-text-2">{text2}</h4>
              <Link href="/about">
                <a className="thm-btn abut-page__btn">Discover More</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
