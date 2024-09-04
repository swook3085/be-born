/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    reactCompiler: true,
    ppr: 'incremental',
    scrollRestoration: true
  },
  env: {
    PET_API_KEY: process.env.PET_API_KEY,
    PET_API_URL: process.env.PET_API_HOST + process.env.PET_API_BASEURL
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    domains: ['www.animal.go.kr'],
    minimumCacheTTL: 60 * 60 * 24 * 365
  }
}

module.exports = nextConfig
