import servicesThree from "@/data/servicesThree";
import Link from "next/link";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import SingleService from "./SingleService";

const { bg, tagline, title, bottomText, services } = servicesThree;

const ServicesThree = () => {
  return (
    <section className="services-three">
      <div
        className="services-three-shape"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <Title title={title} tagline={tagline} className="text-center" />
        <div className="services-three__top">
          <Row>
            {services.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
          </Row>
        </div>
        <div className="services-three__bottom">
          <p className="services-three__bottom-text">
            {bottomText} <Link href="/services">Get in touch</Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ServicesThree;
