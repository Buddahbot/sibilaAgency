import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ServicesDetails from "@/components/ServicesDetails/ServicesDetails";
import { digitalMarketingService } from "@/data/servicesDetails";
import React from "react";

const DigitalMarketing = () => {
  return (
    <Layout pageTitle="Digital Marketing || Service Details">
      <PageHeader
        parent="Services"
        title="Digital Marketing"
        page="Service Details"
      />
      <ServicesDetails service={digitalMarketingService} />
    </Layout>
  );
};

export default DigitalMarketing;
