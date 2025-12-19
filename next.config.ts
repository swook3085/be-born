import { env, rewrites } from 'config'
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  reactCompiler: true,
  experimental: {
    scrollRestoration: true
  },
  env,
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'openapi.animal.go.kr'
      }
    ],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    unoptimized: true
  },
  rewrites
}

module.exports = nextConfig
