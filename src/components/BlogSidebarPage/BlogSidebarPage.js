import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogSidebarLeft from "./BlogSidebarLeft";
import Sidebar from "./Sidebar";

const BlogSidebarPage = () => {
  return (
    <section className="blog-sidebar">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <BlogSidebarLeft />
          </Col>
          <Col xl={4} lg={5}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSidebarPage;
