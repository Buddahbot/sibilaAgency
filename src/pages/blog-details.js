import BlogDetailsPage from "@/components/BlogDetails/BlogDetailsPage";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
import {useRouter} from 'next/router';

const BlogDetails = () => {
  const router = useRouter()
  const {id} = router.query

  return (
    <Layout pageTitle="Blog Details">
      <PageHeader page="Blog" title="Blog" />
      <BlogDetailsPage id={id}/>
    </Layout>
  );
};

export default BlogDetails;
