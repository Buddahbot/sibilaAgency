import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProjectDetailsPage from "@/components/ProjectDetails/ProjectDetailsPage";
import SimilarWork from "@/components/ProjectDetails/SimilarWork";
import React from "react";

const ProjectDetails = () => {
  return (
    <Layout pageTitle="Project Details">
      <PageHeader page="projects" title="Project Details" />
      <ProjectDetailsPage />
      <SimilarWork />
    </Layout>
  );
};

export default ProjectDetails;
