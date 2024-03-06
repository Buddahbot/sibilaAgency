import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ServicesDetails from "@/components/ServicesDetails/ServicesDetails";
import { mobileService } from "@/data/servicesDetails";
import React from "react";

const MobileApplication = () => {
  return (
    <Layout pageTitle="Mobile Application || Service Details">
      <PageHeader
        parent="Services"
        title="Mobile Application"
        page="Service Details"
      />
      <ServicesDetails service={mobileService} />
    </Layout>
  );
};

export default MobileApplication;
