/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Экспорт проекта в статические файлы
  basePath: "/product-app", // Имя репозитория
  assetPrefix: "/product-app", // Префикс для корректной загрузки файлов
  webpack: (config) => {
    config.cache = false; // Отключение кэша Webpack
    return config;
  },
};

module.exports = nextConfig;
