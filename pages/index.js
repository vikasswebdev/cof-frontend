import ConnectSection from "../components/ConnectSection";
import Layout from "../components/layout";
import HomeTop from "../components/molecules/HomeTop";
import MobileAppSection from "../components/molecules/MobileAppSection";
import Seo from "../components/seo";

export default function Home({}) {
  return (
    <Layout>
      <Seo
        seo={{
          metaTitle: "codeoflyf - let's understand together",
        }}
      />
      <main className="min-h-screen">
        <HomeTop />
        <MobileAppSection />
        {/* <ConnectSection /> */}
      </main>
    </Layout>
  );
}

// export async function getServerSideProps(context) {
//   try {
//     const [categoriesRes] = await Promise.all([fetchAPI("/categories")]);
//     return {
//       props: {
//         categories: categoriesRes,
//       },
//     };
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// }
