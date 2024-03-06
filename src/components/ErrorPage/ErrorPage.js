import errorPage from "@/data/errorPage";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const { title, tagline, text } = errorPage;

const ErrorPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
  };

  return (
    <section className="error-page">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="error-page__inner">
              <h2 className="error-page__title">{title}</h2>
              <h3 className="error-page__tagline">
                <TextSplit text={tagline} />
              </h3>
              <p className="error-page__text">{text}</p>
              <form onSubmit={handleSubmit} className="error-page__form">
                <div className="error-page__form-input">
                  <input
                    type="search"
                    placeholder="Search here"
                    name="search"
                  />
                  <button type="submit">
                    <i className="icon-magnifying-glass"></i>
                  </button>
                </div>
              </form>
              <Link href="/">
                <a className="thm-btn error-page__btn">back to home</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ErrorPage;
