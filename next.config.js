/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  output: "export",
  env: {
    WEB_URL: process.env.WEB_URL,
    API_URL: process.env.API_URL,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
