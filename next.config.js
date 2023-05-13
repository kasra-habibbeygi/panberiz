/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
    reactStrictMode: true,
    env: {
        URL: process.env.URL
    },
    i18n
};

module.exports = nextConfig;
