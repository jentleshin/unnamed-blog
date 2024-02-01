/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  reactStrictMode: false,
  trailingSlash: true,
  // productionBrowserSourceMaps: true,
  images: {
    loader: "custom",
    path: "",
  },
};

module.exports = nextConfig;
