import CTAOne from "@/components/CTAOne/CTAOne";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import TeamOne from "@/components/TeamOne/TeamOne";
import React from "react";

const Team = () => {
  return (
    <Layout pageTitle="Team">
      <PageHeader page="Team" title="Our Team" />
      <TeamOne className="team-page" />
      <CTAOne />
    </Layout>
  );
};

export default Team;
