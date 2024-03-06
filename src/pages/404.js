import ErrorPage from "@/components/ErrorPage/ErrorPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const NotFound = () => {
  return (
    <Layout pageTitle="404 Error">
      <PageHeader page="404 Error" />
      <ErrorPage />
    </Layout>
  );
};

export default NotFound;
