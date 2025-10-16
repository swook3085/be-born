import { env } from '@beborn/config'
import { rewrites } from '@beborn/config/rewrites'
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  experimental: {
    reactCompiler: true,
    ppr: 'incremental',
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
