import AboutPage from "@/components/AboutPage/AboutPage";
import BestAgency from "@/components/BestAgency/BestAgency";
import BrandOne from "@/components/BrandOne/BrandOne";
import DesignStudio from "@/components/DesignStudio/DesignStudio";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import TeamOne from "@/components/TeamOne/TeamOne";
// import TestimonialTwo from "@/components/TestimonialTwo/TestimonialTwo";
import React from "react";

const About = () => {
  return (
    <Layout pageTitle="About">
      <PageHeader page="About" title="About us" />
      <AboutPage />
      <BrandOne />
      {/* <DesignStudio className="services-page-design-studio" /> */}
      {/* <TestimonialTwo className="about-page-testimonial-two" /> */}
      {/* <TeamOne />
      <BestAgency className="about-page-best-agency" /> */}
    </Layout>
  );
};

export default About;
