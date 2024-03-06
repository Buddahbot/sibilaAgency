import projectTwo from "@/data/projectTwo";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Masonry from "react-masonry-component";
import SingleProject from "../ProjectOne/SingleProject";

const { tagline, title, filters, projects } = projectTwo;

const getFilteredProjects = (filterData) =>
  filterData === "filter-item"
    ? projects
    : projects.filter((project) => project.filter.includes(filterData));

const getCount = (filterData) => getFilteredProjects(filterData).length;

const masonryOptions = {
  transitionDuration: 500,
};

const ProjectTwo = () => {
  const [filter, setFilter] = useState("filter-item");
  const filteredProjects = getFilteredProjects(filter);

  return (
    <section className="project-two">
      <Container>
        <div className="project-two__top">
          <Row className="align-items-center">
            <Col xl={6}>
              <div className="project-two__left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">{tagline}</span>
                  <h2 className="section-title__title">{title}</h2>
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className="project-two__right">
                <ul className="project-filter style1 post-filter has-dynamic-filters-counter list-unstyled">
                  {filters.map(({ id, name, filterData }) => (
                    <li
                      key={id}
                      onClick={() => setFilter(filterData)}
                      className={filter === filterData ? "active" : ""}
                    >
                      <span className="filter-text">
                        {name}
                        <span className="count">{getCount(filterData)}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="project-two__work">
        <div className="project-two__work-inner">
          <Masonry
            options={masonryOptions}
            className="row filter-layout position-relative"
          >
            {filteredProjects.map((project) => (
              <SingleProject project={project} key={project.id} />
            ))}
          </Masonry>
        </div>
      </div>
      <Container>
        <div className="project-two__bottom">
          <p className="project-two__bottom-text">
            Mibooz services built specifically for your business.{" "}
            <Link href="/about">Find Your Solution</Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ProjectTwo;
