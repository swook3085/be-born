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
        hostname: 'www.animal.go.kr'
      }
    ],
    minimumCacheTTL: 60 * 60 * 24 * 365
  },
  rewrites
}

module.exports = nextConfig
