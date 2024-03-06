import ContactPage from "@/components/ContactPage/ContactPage";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import Layout from "@/components/Layout/Layout";
import Location from "@/components/Location/Location";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <PageHeader title="Contact" />
      <Location />
      <ContactPage />
      <GoogleMap />
    </Layout>
  );
};

export default Contact;
