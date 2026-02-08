/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'voltaccept.com'],
  },
  async headers() {
    return [
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'voltaccept.com'
          }
        ]
      }
    ];
  }
}

module.exports = nextConfig
