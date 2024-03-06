import BlogTwo from "@/components/BlogTwo/BlogTwo";
import BrandOne from "@/components/BrandOne/BrandOne";
import CompanyNumbers from "@/components/CompanyNumbers/CompanyNumbers";
import CTAOne from "@/components/CTAOne/CTAOne";
import FeatureOne from "@/components/FeatureOne/FeatureOne";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import ProjectTwo from "@/components/ProjectTwo/ProjectTwo";
import ServicesTwo from "@/components/ServicesTwo/ServicesTwo";
import TeamOne from "@/components/TeamOne/TeamOne";
import TestimonialTwo from "@/components/TestimonialTwo/TestimonialTwo";
import TwoBoxes from "@/components/TwoBoxes/TwoBoxes";
import WelcomeTwo from "@/components/WelcomeTwo/WelcomeTwo";
import React from "react";

const Home2 = () => {
  return (
    <Layout pageTitle="Home Two">
      <MainSliderTwo />
      <FeatureOne />
      <WelcomeTwo />
      <CompanyNumbers />
      <ServicesTwo />
      <TwoBoxes />
      <ProjectTwo />
      <HowItWorks />
      <TestimonialTwo />
      <TeamOne />
      <BrandOne />
      <BlogTwo />
      <CTAOne />
    </Layout>
  );
};

export default Home2;
