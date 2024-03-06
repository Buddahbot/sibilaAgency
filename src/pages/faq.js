import ContactPage from "@/components/ContactPage/ContactPage";
import CTAOne from "@/components/CTAOne/CTAOne";
import FaqPage from "@/components/FaqPage/FaqPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Faq = () => {
  return (
    <Layout pageTitle="FAQs">
      <PageHeader title="Our Faqs" page="Faqs" />
      <FaqPage />
      <ContactPage />
      <CTAOne />
    </Layout>
  );
};

export default Faq;
