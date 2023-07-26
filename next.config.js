/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
    reactStrictMode: true,
    staticPageGenerationTimeout: 1000,
    env: {
        URL: process.env.URL
    },
    i18n
};

module.exports = nextConfig;
