/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Добавь, если используешь экспорт статического сайта
  // trailingSlash: true,

  // Если у тебя есть кастомные домены или нужно настроить базовый URL
  // basePath: '/my-base-path',
  
  // Опции для изображений
  // images: {
  //   unoptimized: true, // Полезно для статического экспорта, если тебе не нужен Image Optimization от Next.js
  // },

  // Если тебе нужно обрабатывать ENV-переменные, добавь их здесь
  // env: {
  //   CUSTOM_VAR: process.env.CUSTOM_VAR, // Пример переменной окружения
  // },
  
  // Если есть страницы, которые нужно пропустить при экспорте
  // exportPathMap: async function () {
  //   return {
  //     '/': { page: '/' },
  //     // Пример: исключение страницы
  //     // '/secret': { page: '/secret' }
  //   };
  // },
  
  // Дополнительные настройки для маршрутизации
  // async redirects() {
  //   return [
  //     {
  //       source: '/old-page',
  //       destination: '/new-page',
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
