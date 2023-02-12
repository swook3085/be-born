/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  images: {
    domains: ['www.animal.go.kr'],
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
    optimizeCss: true,
    scrollRestoration: true,
    runtime: 'nodejs',
  },
  compiler: {
    styledComponents: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack(config, { webpack }) {
    config.resolve = {
      alias: {
        '@modules': path.resolve(__dirname, 'src/modules'),
        '@controller': path.resolve(__dirname, 'src/controller'),
        '@shared': path.resolve(__dirname, 'src/shared'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@interpace': path.resolve(__dirname, 'src/shared/interface'),
        '@template': path.resolve(__dirname, 'src/template'),
        '@resource': path.resolve(__dirname, 'src/resource'),
        '@images': path.resolve(__dirname, 'src/resource/images'),
      },
      ...config.resolve,
    }
    return config
  },
  async rewrites() {
    const url = 'http://api.vworld.kr/req/address'
    const apiKey = '5C21C2B8-8A8A-3E9B-89CD-160EB787B064'
    return [
      {
        source: '/api/location/:path*',
        destination: `${url}?service=address&request=getcoord&version=2.0&crs=epsg:4326&refine=true&simple=true&format=json&type=road&key=${apiKey}&address=:path*`,
      },
    ]
  },
}

module.exports = nextConfig
