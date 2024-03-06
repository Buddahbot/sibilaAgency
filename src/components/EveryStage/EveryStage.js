import everyStage from "@/data/everyStage";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import SingleTab from "./SingleTab";

const { bg, tagline, title, texts, tabButtons, tabContents } = everyStage;

const EveryStage = () => {
  const [active, setActive] = useState("mission");

  return (
    <section className="every-stage">
      <div
        className="every-stage-shape"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={6}>
            <div className="every-stage__left">
              <Title title={title} tagline={tagline} className="text-left" />
              {texts.map((text, i) => (
                <p key={i} className={`every-stage__text-${i + 1}`}>
                  {text}
                </p>
              ))}
            </div>
          </Col>
          <Col xl={6}>
            <div className="every-stage__right">
              <div className="every-stage__tab-box tabs-box">
                <ul className="tab-buttons clearfix list-unstyled">
                  {tabButtons.map(({ id, title }) => (
                    <li
                      key={id}
                      className={`tab-btn${id === active ? " active-btn" : ""}`}
                      onClick={() => setActive(id)}
                    >
                      <span>{title}</span>
                    </li>
                  ))}
                </ul>
                <div className="tabs-content">
                  {tabContents.map((tab) => (
                    <SingleTab key={tab.id} tab={tab} active={active} />
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EveryStage;
