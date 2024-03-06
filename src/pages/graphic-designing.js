import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ServicesDetails from "@/components/ServicesDetails/ServicesDetails";
import { graphicDesigningService } from "@/data/servicesDetails";
import React from "react";

const GraphicDesigning = () => {
  return (
    <Layout pageTitle="Graphic Designing || Service Details">
      <PageHeader
        parent="Services"
        title="Graphic Designing"
        page="Service Details"
      />
      <ServicesDetails service={graphicDesigningService} />
    </Layout>
  );
};

export default GraphicDesigning;
