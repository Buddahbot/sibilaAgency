import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ServicesDetails from "@/components/ServicesDetails/ServicesDetails";
import { socialMarketingService } from "@/data/servicesDetails";
import React from "react";

const SocialMarketing = () => {
  return (
    <Layout pageTitle="Social Marketing || Service Details">
      <PageHeader
        parent="Services"
        title="Social Marketing"
        page="Service Details"
      />
      <ServicesDetails service={socialMarketingService} />
    </Layout>
  );
};

export default SocialMarketing;
