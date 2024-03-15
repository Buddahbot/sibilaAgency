import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProjectDetailsPage from "@/components/ProjectDetails/ProjectDetailsPage";
import SimilarWork from "@/components/ProjectDetails/SimilarWork";
import React from "react";
import {useRouter} from 'next/router';

const ProjectDetails = () => {

  const router = useRouter()
  const {id} = router.query

  return (
    <Layout pageTitle="Project Details">
      <PageHeader page="projects" title="Project Details" />
      <ProjectDetailsPage id={id}/>
      {/* <SimilarWork /> */}
    </Layout>
  );
};

export default ProjectDetails;
