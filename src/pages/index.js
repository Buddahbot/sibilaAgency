
import dotenv from 'dotenv';
import BlogOne from "@/components/BlogOne/BlogOne";
import BrandOne from "@/components/BrandOne/BrandOne";
import CounterOne from "@/components/CounterOne/CounterOne";
import CTATwo from "@/components/CTATwo/CTATwo";
import EveryStage from "@/components/EveryStage/EveryStage";
import Layout from "@/components/Layout/Layout";
import MainSliderThree from "@/components/MainSliderThree/MainSliderThree";
import ProjectOne from "@/components/ProjectOne/ProjectOne";
import ServicesThree from "@/components/ServicesThree/ServicesThree";
import WatchVideo from "@/components/WatchVideo/WatchVideo";
import WeBuild from "@/components/WeBuild/WeBuild";
import WeCan from "@/components/WeCan/WeCan";
import WelcomeThree from "@/components/WelcomeThree/WelcomeThree";
import React from "react";

// Load environment variables from .env file
dotenv.config();

const Home = () => {
  return (
    <Layout pageTitle="Your Partner">
      <MainSliderThree />
      {/* <CTATwo /> */}
      <ServicesThree />
      <WelcomeThree />
      {/* <WatchVideo /> */}
      <EveryStage />
      <ProjectOne />
      <WeBuild />
      <WeCan />
      {/* <CounterOne /> */}
      <BlogOne />
      <BrandOne className="brand-three" />
    </Layout>
  );
};

export default Home;