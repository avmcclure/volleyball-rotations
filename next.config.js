/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true'

const repoName = 'volleyball-rotations'
const githubUser = 'avmcclure'

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Conditionally set basePath and assetPrefix for GitHub Pages
  ...(isGithubPages
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `https://${githubUser}.github.io/${repoName}/`,
        images: {
          unoptimized: true,
        },
      }
    : {}),
}

module.exports = nextConfig
