import companyNumbers from "@/data/companyNumbers";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JarallaxImage from "../Jarallax/JarallaxImage";
import VideoModal from "../VideoModal/VideoModal";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const { bg, videoBg, videoId, tagline, title, counters } = companyNumbers;

const CompanyNumbers = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <section className="company-numbers">
        <div className="company-numbers-bg-box">
          <Jarallax
            speed={0.2}
            imgPosition="50% 0%"
            className="company-numbers-bg"
          >
            <JarallaxImage src={bg.src} />
          </Jarallax>
        </div>
        <Container>
          <div className="company-numbers__inner">
            <Row>
              <Col xl={7} lg={7}>
                <div className="company-numbers__left">
                  <div className="company-numbers__video-box">
                    <div
                      className="company-numbers__video-bg"
                      style={{ backgroundImage: `url(${videoBg.src})` }}
                    ></div>
                    <div className="company-numbers__video-link">
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={handleOpen}
                        className="video-popup"
                      >
                        <div className="company-numbers__video-icon">
                          <span className="icon-play-button"></span>
                          <i className="ripple"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="company-numbers__content">
                    <p className="company-numbers__tagline">{tagline}</p>
                    <h2 className="company-numbers__title">
                      {title} <span>agency</span>
                    </h2>
                  </div>
                </div>
              </Col>
              <Col xl={5} lg={5}>
                <div className="company-numbers__right">
                  <ul className="list-unstyled company-numbers__counter">
                    {counters.map(({ id, count, title }) => (
                      <li key={id}>
                        <div className="company-numbers__counter-content">
                          <h3 className="odometer">
                            <VisibilityCountUp count={count} />
                          </h3>
                          <p className="company-numbers__counter-text">
                            {title}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default CompanyNumbers;
