import BlogPage from "@/components/BlogPage/BlogPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Blog = () => {
  return (
    <Layout pageTitle="Blog">
      <PageHeader page="Blog" title="Blog Posts" />
      <BlogPage />
    </Layout>
  );
};

export default Blog;
