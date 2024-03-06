import teamOne from "@/data/teamOne";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";

const { title, tagline, socials, teams } = teamOne;

const TeamOne = ({ className = "" }) => {
  return (
    <section className={`team-one ${className}`}>
      <Container>
        {!className && (
          <Title title={title} tagline={tagline} className="text-center" />
        )}
        <Row>
          {teams
            .slice(0, className ? undefined : 4)
            .map(({ id, name, title, image }) => (
              <Col key={id} xl={3} lg={6} md={6} className="animated fadeInUp">
                <div className="team-one__single">
                  <div className="team-one__img">
                    <Image
                      src={require(`@/images/team/${image}`).default.src}
                      alt=""
                    />
                    <div className="team-one__details">
                      <p className="team-one__title">{title}</p>
                      <h4 className="team-one__name">{name}</h4>
                    </div>
                    <div className="team-one__social">
                      {socials.map((social, index) => (
                        <a key={index} href="#">
                          <i className={social}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default TeamOne;
