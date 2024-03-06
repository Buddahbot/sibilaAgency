import BestAgency from "@/components/BestAgency/BestAgency";
import BlogOne from "@/components/BlogOne/BlogOne";
import BrandOne from "@/components/BrandOne/BrandOne";
import CounterOne from "@/components/CounterOne/CounterOne";
import CTAOne from "@/components/CTAOne/CTAOne";
import DesignStudio from "@/components/DesignStudio/DesignStudio";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import ProjectOne from "@/components/ProjectOne/ProjectOne";
import ServicesOne from "@/components/ServicesOne/ServicesOne";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import WeCare from "@/components/WeCare/WeCare";
import WelcomeOne from "@/components/WelcomeOne/WelcomeOne";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Home One">
      <MainSlider />
      <ServicesOne />
      <WelcomeOne />
      <BrandOne />
      <DesignStudio />
      <CounterOne />
      <WeCare />
      <ProjectOne />
      <WhyChoose />
      <TestimonialOne />
      <CTAOne />
      <BestAgency />
      <BlogOne />
      <GoogleMap />
    </Layout>
  );
};

export default Home;
