import React from "react";
import Layout from "../../components/layout";
import FeatureCard from "../../components/molecules/FeatureCard";
import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";

const IndexIntegration = ({ integrations }) => {
  return (
    <Layout>
      <Seo
        seo={{
          metaTitle: "Integrations",
        }}
      />
      <section className="body-font min-h-screen">
        <h1 className="text-5xl md:pl-10 pl-5 pt-10 md:text-7xl font-bold">
          Integrations
        </h1>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex md:flex-row flex-col -m-4">
            {integrations.map((integration) => (
              <FeatureCard key={integration._id} integration={integration} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexIntegration;

export async function getServerSideProps(context) {
  try {
    const [integrations] = await Promise.all([fetchAPI("/integrations")]);
    return {
      props: {
        integrations: integrations,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
