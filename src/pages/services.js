import BrandOne from "@/components/BrandOne/BrandOne";
import DesignStudio from "@/components/DesignStudio/DesignStudio";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import ServicesOne from "@/components/ServicesOne/ServicesOne";
import ServicesThree from "@/components/ServicesThree/ServicesThree";
import ServicesTwo from "@/components/ServicesTwo/ServicesTwo";
import TwoBoxes from "@/components/TwoBoxes/TwoBoxes";
import React from "react";

const Services = () => {
  return (
    <Layout pageTitle="Services">
      <PageHeader title="Services" />
      <ServicesThree />
      <TwoBoxes />
      <ServicesOne />
      <DesignStudio className="services-page-design-studio" />
      <ServicesTwo className="services-page-services-two" />
      <BrandOne />
    </Layout>
  );
};

export default Services;
