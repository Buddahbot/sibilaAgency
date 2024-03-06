import BlogSidebarPage from "@/components/BlogSidebarPage/BlogSidebarPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const BlogSidebar = () => {
  return (
    <Layout pageTitle="Blog Sidebar">
      <PageHeader page="Blog" title="Blog Sidebar" />
      <BlogSidebarPage />
    </Layout>
  );
};

export default BlogSidebar;
