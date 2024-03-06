import weCan from "@/data/weCan";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import JarallaxImage from "../Jarallax/JarallaxImage";
import TextSplit from "../Reuseable/TextSplit";

const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const { bg, tagline, title } = weCan;

const WeCan = () => {
  return (
    <section className="we-can">
      <div className="we-can-bg-box">
        <Jarallax speed={0.2} imgPosition="50% 0%" className="we-can-bg">
          <JarallaxImage src={bg.src} />
        </Jarallax>
      </div>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="we-can__inner">
              <p className="we-can__tagline">{tagline}</p>
              <h2 className="we-can__title">
                <TextSplit text={title} />
              </h2>
              <Link href="/project">
                <a className="thm-btn we-can__btn">let’s start a project</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WeCan;
