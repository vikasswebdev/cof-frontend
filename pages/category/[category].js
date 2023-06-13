import { useRouter } from "next/router";
import React from "react";
import Articles from "../../components/articles";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";

const Category = ({ categories, articles }) => {
  const router = useRouter();

  const { category } = router.query;

  return (
    <Layout categories={categories}>
      <Seo
        seo={{
          metaTitle: category.toUpperCase(),
        }}
      />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1 className="text-7xl ml-10 mt-10 font-bold uppercase">
            {category}
          </h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export default Category;

export async function getServerSideProps(context) {
  const { category } = context.query;

  const [categoriesRes, dataByCategories] = await Promise.all([
    fetchAPI("/categories"),
    fetchAPI(`/category/${category}`),
  ]);
  return {
    props: {
      categories: categoriesRes,
      articles: dataByCategories,
    },
  };
}
