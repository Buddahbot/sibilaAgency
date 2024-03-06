import blogTwo from "@/data/blogTwo";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleBlog from "../BlogOne/SingleBlog";
import Title from "../Reuseable/Title";

const { bg, tagline, title, blogs } = blogTwo;

const BlogTwo = () => {
  return (
    <section className="blog-two">
      <div
        className="blog-two-shape"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <Title title={title} tagline={tagline} className="text-center" />
        <Row>
          {blogs.map((blog) => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogTwo;
