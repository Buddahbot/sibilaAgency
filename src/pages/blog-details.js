import BlogDetailsPage from "@/components/BlogDetails/BlogDetailsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const BlogDetails = () => {
  return (
    <Layout pageTitle="Blog Details">
      <PageHeader page="Blog" title="Blog" />
      <BlogDetailsPage />
    </Layout>
  );
};

export default BlogDetails;
