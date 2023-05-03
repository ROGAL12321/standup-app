const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: !PHASE_DEVELOPMENT_SERVER,
};

module.exports = nextConfig;
