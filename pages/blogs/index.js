import React from "react";
import Articles from "../../components/articles";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";

const Blogs = ({ articles }) => {
  return (
    <Layout>
      <Seo
        seo={{
          metaTitle: "Blogs",
        }}
      />
      <div className="container mx-auto min-h-screen">
        <div>
          <h1 className="text-7xl ml-10 mt-10 font-bold">Blogs</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;

export async function getServerSideProps(context) {
  try {
    const [articlesRes] = await Promise.all([fetchAPI("/articles")]);
    return {
      props: {
        articles: articlesRes,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
