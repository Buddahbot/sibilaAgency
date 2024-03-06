import servicesOne from "@/data/servicesOne";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleService from "./SingleService";

const { bg, tagline, title, text, services } = servicesOne;

const ServicesOne = () => {
  return (
    <section className="services-one">
      <div
        className="services-one-shape"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <div className="services-one__top">
          <Row>
            <Col xl={7} lg={6}>
              <div className="services-one__top-left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">{tagline}</span>
                  <h2 className="section-title__title">
                    {title.split("\n").map((t, i) => (
                      <Fragment key={i}>
                        {t} <br />
                      </Fragment>
                    ))}
                  </h2>
                </div>
              </div>
            </Col>
            <Col xl={5} lg={6}>
              <div className="services-one__top-right">
                <p className="services-one__top-text">{text}</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="services-one__bottom">
          <Row>
            {services.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
            <Col xl={4} lg={4} className="animated fadeInUp">
              <div className="services-one__view-all">
                <div className="services-one__view-all-title-box">
                  <h3 className="services-one__view-all-title">
                    <Link href="/services">
                      <a>
                        View our <br /> all services
                      </a>
                    </Link>
                  </h3>
                </div>
                <div className="services-one__view-all-arrow">
                  <Link href="/services">
                    <a>
                      <span className="icon-arrow-right"></span>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ServicesOne;
