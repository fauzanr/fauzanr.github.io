/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repo = process.env.REPO_NAME

const nextConfig = {
  output: 'export',
  assetPrefix: `/${repo}/`,
  basePath: `/${repo}`,
};

export default nextConfig;
