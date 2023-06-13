import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ article }) => {
  const imageUrl = process.env.NEXT_PUBLIC_API_URL + article.image;

  const myLoader = () => {
    return `${imageUrl}`;
  };

  return (
    <Link href={`/blogs/${article.slug}`}>
      <div className="p-5 my-2 border-2 w-80 h-96 rounded-md md:w-96">
        <div className="w-full h-52 overflow-hidden bg-black">
          <Image
            src={imageUrl}
            alt={article.title}
            width={400}
            height={400}
            loader={myLoader}
          />
        </div>
        <div>
          <h1 id="title" className="text-xl mt-2">
            {article.title}
          </h1>
          <p className="mt-2">{article.description.substring(0, 80)}...</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
