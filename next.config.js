/** @type {import('next').NextConfig} */
const withExportImages = require("next-export-optimize-images");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error"],
          }
        : false,
  },
};

module.exports = withExportImages(nextConfig);
