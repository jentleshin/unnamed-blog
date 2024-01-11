/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // productionBrowserSourceMaps: true,
  images: {
    loader: "akamai",
    path: "",
  // Add basePath
  basePath: '/unnamed-blog',
  }
};

module.exports = nextConfig
