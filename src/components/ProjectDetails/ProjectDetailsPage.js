import projectDetails from "@/data/projectDetails";
import React from "react";
import Link from "next/link";
import { Col, Container, Image, Row } from "react-bootstrap";

// const { image, title, texts, points, name, category, date, socials } =
//   projectDetails;

const ProjectDetailsPage = ({ id }) => {
  console.log("prohectdetailspage id", id);

  const currentProjectDetails = projectDetails.find(
    (project) => project.id === parseInt(id)
  );
  console.log("here is project :", currentProjectDetails);

  const { link, image, title, texts, points, name, category, date, socials } =
    currentProjectDetails;

  console.log("here is link", link);

  return (
    <section className="project-details">
      <Container>
        <Row>
          <Col xl={12}>
            <Link href={link} passHref>
            <a target="_blank" rel="noopener noreferrer">
                <div className="project-details__img">
                  <Image src={image.src} alt="Tatyana Kronbichler Front Page" />
                </div>
              </a>
            </Link>
          </Col>
        </Row>{" "}
        <div className="project-details__content">
          <Row>
            <Col xl={8} lg={7}>
              <div className="project-details__content-left">
                <h3 className="project-details__content-title">{title}</h3>
                {texts.map((text, i) => (
                  <p
                    key={i}
                    className={`project-details__content-text-${i + 1}`}
                  >
                    {text}
                  </p>
                ))}
                <ul className="list-unstyled project-details__points">
                  {points.map((point, i) => (
                    <li key={i}>
                      <div className="icon">
                        <span className="icon-check"></span>
                      </div>
                      <div className="text">
                        <p>{point}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xl={4} lg={5}>
              <div className="project-details__content-right">
                <div className="project-details__details-box">
                  <div className="project-details__details-info">
                    <div className="project-details__details-info-single">
                      <h5 className="project-details__details-info-client">
                        Client:
                      </h5>
                      <p className="project-details__details-info-name">
                        {name}
                      </p>
                    </div>
                    <div className="project-details__details-info-single">
                      <h5 className="project-details__details-info-client">
                        Category:
                      </h5>
                      <p className="project-details__details-info-name">
                        {category}
                      </p>
                    </div>
                    {/* <div className="project-details__details-info-single">
                      <h5 className="project-details__details-info-client">
                        Date:
                      </h5>
                      <p className="project-details__details-info-name">
                        {date}
                      </p>
                    </div> */}
                  </div>
                  <div className="project-details__details-social-list">
                    {socials.map(({ id, icon, href }) => (
                      <a key={id} href={href}>
                        <i className={icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xl={12}>
            <div className="project-details__pagination-box">
              <ul className="project-details__pagination list-unstyled">
                <li className="next">
                  <a href="#" aria-label="Previous">
                    <i className="icon-arrow-left"></i>Previous
                  </a>
                </li>
                <li className="count">
                  <a href="#"></a>
                </li>
                <li className="count">
                  <a href="#"></a>
                </li>
                <li className="count">
                  <a href="#"></a>
                </li>
                <li className="count">
                  <a href="#"></a>
                </li>
                <li className="previous">
                  <a href="#" aria-label="Next">
                    Next<i className="icon-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectDetailsPage;
