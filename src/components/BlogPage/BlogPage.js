import SingleBlog from "@/components/BlogOne/SingleBlog";
import blogPage from "@/data/blogPage";
import Link from "next/link";
import React from "react";
import { Container, Row } from "react-bootstrap";

const BlogPage = () => {
  return (
    <section className="blog-page">
      <Container>
        <Row>
          {blogPage.map((blog) => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </Row>
        <div className="blog-sidebar__load-more text-center">
          <Link href="/blog-details">
            <a className="thm-btn blog-sidebar__load-more-btn">
              Load more posts
            </a>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogPage;
