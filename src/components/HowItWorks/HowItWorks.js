import howItWorks from "@/data/howItWorks";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import Title from "../Reuseable/Title";
import SingleHowItWorks from "./SingleHowItWorks";

const { tagline, title, processes, text } = howItWorks;

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <Container>
        <Title tagline={tagline} className="text-center" title={title} />
        <div className="how-it-works__top">
          <ul className="list-unstyled how-it-works__process clearfix">
            {processes.map((process) => (
              <SingleHowItWorks key={process.id} process={process} />
            ))}
          </ul>
        </div>
        <div className="how-it-works__bottom animated fadeInUp">
          <Row>
            <Col xl={12}>
              <div className="how-it-works__bottom-inner">
                <p className="how-it-works__bottom-text">
                  <TextSplit>{text}</TextSplit>
                </p>
                <Link href="/contact">
                  <a className="thm-btn how-it-works__btn">get a free quote</a>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
