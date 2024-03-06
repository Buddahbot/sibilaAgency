import servicesTwo from "@/data/servicesTwo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const { bg, tagline, title, services } = servicesTwo;

const ServicesTwo = ({ className = "" }) => {
  return (
    <section className={`services-two ${className}`}>
      <div
        className="services-two-shape"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">{tagline}</span>
          <h2 className="section-title__title">{title}</h2>
        </div>
        <ul className="list-unstyled clearfix services-two__list">
          {services.map(({ id, title, icon, text, href }) => (
            <li key={id} className="services-two__single animated fadeInUp">
              <div className="services-two__icon">
                <span className={icon}></span>
              </div>
              <h3 className="services-two__title">
                <Link href={href}>
                  <a>
                    {title.split("\n").map((t, i) => (
                      <Fragment key={i}>
                        {t} <br />
                      </Fragment>
                    ))}
                  </a>
                </Link>
              </h3>
              <p className="services-two__text">{text}</p>
            </li>
          ))}
        </ul>
        <Row>
          <Col lg={12} className="animated fadeInUp">
            <div className="services-two__btn-box">
              <Link href="/services">
                <a className="services-two__btn">view all services</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesTwo;
