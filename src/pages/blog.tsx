import React from "react";
import Blog from "@/components/Blog";
import Layout from "@/components/Layout";

const BlogPage: React.FC = () => {
  return (
    <Layout title="Blogs Page">
      <Blog />
    </Layout>
  );
};

export default BlogPage;
