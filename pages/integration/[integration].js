import React from "react";
import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";
import Link from "next/link";
import Image from "next/image";
import TopIntroCard from "../../components/molecules/integrations/TopIntroCard";

const Integration = ({ integration }) => {
  return (
    <Layout>
      <section className="min-h-screen body-font">
        <div className="container py-10 mx-auto">
          <TopIntroCard integration={integration} />
        </div>
      </section>
    </Layout>
  );
};

export default Integration;

export async function getServerSideProps(context) {
  try {
    const { integration } = context.query;

    const integrationRes = await Promise.all([
      fetchAPI(`/integration/${integration}`),
    ]);

    if (!integrationRes || integrationRes.length == 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        integration: integrationRes[0],
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
