/** @type {import('next').NextConfig} */

const basePath = process.env.BASE_PATH

const nextConfig = {
  output: 'export',
  assetPrefix: basePath + '/',
  basePath: basePath,
};

export default nextConfig;
