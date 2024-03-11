import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../BlogSidebarPage/Sidebar";
import BlogDetailsLeft from "./BlogDetailsLeft";

const BlogDetailsPage = ({id}) => {

  return (
    <section className="blog-details">
      <Container>
        <Row>
          <Row xl={8} lg={7}>
            <BlogDetailsLeft id={id}/>
          </Row>
          <Col xl={4} lg={5}>
            {/* <Sidebar /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetailsPage;
