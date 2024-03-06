import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleProject = ({ project = {} }) => {
  const { image, title, tagline, col = 4, filter = [] } = project;

  return (
    <Col xl={col} lg={6} md={6} className={`filter-item ${filter.join(" ")}`}>
      <div className="project-one__single">
        <div className="project-one__img">
          <Image
            src={require(`@/images/resources/${image}`).default.src}
            alt=""
          />
          <div className="project-one__hover">
            <p className="project-one__tagline">{tagline}</p>
            <h3 className="project-one__title">
              <Link href="/project-details">{title}</Link>
            </h3>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleProject;
