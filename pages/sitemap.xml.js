// import { fetchAPI } from "../lib/api";

//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = "https://codeoflyf.com";

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://codeoflyf.com</loc>
     </url>
     <url>
       <loc>https://codeoflyf.com/ai</loc>
     </url>
     <url>
       <loc>https://codeoflyf.com/blockchain</loc>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  // const posts = await fetchAPI("/articles");

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
