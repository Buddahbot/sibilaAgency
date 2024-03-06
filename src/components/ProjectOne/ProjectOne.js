import projectOne from "@/data/projectOne";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Masonry from "react-masonry-component";
import Title from "../Reuseable/Title";
import SingleProject from "./SingleProject";

const { title, tagline, projects, filters } = projectOne;

const masonryOptions = {
  transitionDuration: 500,
};

const getFilteredProjects = (filterData) =>
  filterData === "filter-item"
    ? projects
    : projects.filter((project) => project.filter.includes(filterData));

const getCount = (filterData) => getFilteredProjects(filterData).length;

const ProjectOne = ({ projectPage = false }) => {
  const [filter, setFilter] = useState("filter-item");
  const filteredProjects = getFilteredProjects(filter);

  return (
    <section className="project-one">
      <Container>
        {!projectPage && (
          <Title title={title} tagline={tagline} className="text-center" />
        )}
        <Row>
          <Col xl={12}>
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
          </Col>
        </Row>
        <Masonry
          options={masonryOptions}
          className="row filter-layout position-relative"
        >
          {filteredProjects.map((project) => (
            <SingleProject project={project} key={project.id} />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default ProjectOne;
