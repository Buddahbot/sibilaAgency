import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ServicesDetails from "@/components/ServicesDetails/ServicesDetails";
import { contentWritingService } from "@/data/servicesDetails";
import React from "react";

const ContentWriting = () => {
  return (
    <Layout pageTitle="Content Writing || Service Details">
      <PageHeader
        parent="Services"
        title="Content Writing"
        page="Service Details"
      />
      <ServicesDetails service={contentWritingService} />
    </Layout>
  );
};

export default ContentWriting;
