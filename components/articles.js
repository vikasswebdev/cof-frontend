import React from "react";
// import { getStrapiMedia } from "../lib/media";
import Card from "./card";

const Articles = ({ articles }) => {
  return (
    <div className="p-5 w-full" data-uk-grid="true">
      <div className="flex flex-wrap justify-around">
        {articles.map((article, i) => {
          return <Card article={article} key={`${article.slug}`} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
