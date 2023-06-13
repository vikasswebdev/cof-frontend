const path = require("path");

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     require("./scripts/sitemap-generator");
  //   }
  //   return config;
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/sitemap.xml",
  //       destination: "/api/sitemap",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
