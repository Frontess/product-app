/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Экспорт проекта в статические файлы
  basePath: "/product-app", // Имя репозитория
  assetPrefix: "/product-app/", // Префикс для корректной загрузки файлов
  images: {
    unoptimized: true, // Отключение оптимизации изображений
  },
  trailingSlash: true, // Добавить слэши в конце URL (опционально)
  webpack: (config) => {
    config.cache = false; // Отключение кэша Webpack
    return config;
  },
};

module.exports = nextConfig;
