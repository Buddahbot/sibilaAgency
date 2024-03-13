import BlogPage from "@/components/BlogPage/BlogPage";
import BlogOne from "@/components/BlogOne/BlogOne";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Blog = () => {
  return (
    <Layout pageTitle="Blog">
      <PageHeader page="Blog" title="Blog Posts" />
      <BlogOne />
    </Layout>
  );
};

export default Blog;
