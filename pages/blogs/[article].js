import React from "react";
import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const ArticlesPage = ({ article }) => {
  const seoData = {
    metaTitle: article.metaTitle,
    metaDescription: article.metaDescription,
    shareImage: article.image,
  };
  return (
    <Layout>
      <Seo seo={seoData} />
      <main className="min-h-screen">
        <div className="prose lg:prose-xl mx-auto">
          <div className="px-3 py-8">
            <div
              style={{
                background: `url(${process.env.NEXT_PUBLIC_API_URL}${article.image})`,
                width: "100%",
                height: 500,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-5xl md:text-7xl px-5 font-bold text-white">
                {article.title}
              </h1>
            </div>
          </div>
          <div className="px-3 conatienr mx-auto">
            <div className="my-8 mx-auto">
              <ReactMarkdown>{`${article.content}`}</ReactMarkdown>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ArticlesPage;

export async function getServerSideProps(context) {
  try {
    const { article } = context.query;

    const [articlesRes] = await Promise.all([fetchAPI(`/article/${article}`)]);

    if (!articlesRes) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        article: articlesRes,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
