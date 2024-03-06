import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProjectOne from "@/components/ProjectOne/ProjectOne";
import React from "react";

const Project = () => {
  return (
    <Layout pageTitle="Project">
      <PageHeader title="Projects" />
      <ProjectOne projectPage />
    </Layout>
  );
};

export default Project;
