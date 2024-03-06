import { similarWork } from "@/data/projectDetails";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleProject from "../ProjectOne/SingleProject";
import Title from "../Reuseable/Title";

const { tagline, title, projects } = similarWork;

const SimilarWork = () => {
  return (
    <section className="similar-work">
      <Container>
        <Title title={title} tagline={tagline} className="text-center" />
        <Row>
          {projects.map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SimilarWork;
