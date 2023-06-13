import Link from "next/link";
import React from "react";

const FeatureCard = ({ integration }) => {
  return (
    <div className="p-4 lg:w-1/3">
      <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          Most Tranding
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {integration.title}
        </h1>
        <p className="leading-relaxed mb-3">{integration.description}</p>
        <div className="mt-4 mx-auto">
          <Link
            href={`/integration/${integration.slug}`}
            className="text-white bg-black hover:text-black hover:bg-white border border-black rounded-lg py-2 px-4 inline-flex items-center"
          >
            Learn More
          </Link>
          <Link
            href={`/contactus`}
            className="text-black border border-black hover:text-white hover:bg-black bg-white rounded-lg py-2 px-4 ml-4 inline-flex items-center"
          >
            Let&apos;s Go
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
