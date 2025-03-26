/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  webpack: (config) => {
    config.cache = false; // Отключение кэша Webpack
    return config;
  },
};
