import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ServicesDetails from "@/components/ServicesDetails/ServicesDetails";
import { websiteDevelopmentService } from "@/data/servicesDetails";
import React from "react";

const WebsiteDevelopment = () => {
  return (
    <Layout pageTitle="Website Development || Service Details">
      <PageHeader
        parent="Services"
        title="Website Development"
        page="Service Details"
      />
      <ServicesDetails service={websiteDevelopmentService} />
    </Layout>
  );
};

export default WebsiteDevelopment;
