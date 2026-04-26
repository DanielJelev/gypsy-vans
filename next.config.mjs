/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { optimizePackageImports: ['react','react-dom'] },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com', pathname: '/**' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*.webm',
        headers: [
          { key: 'Content-Type', value: 'video/webm' },
          { key: 'Accept-Ranges', value: 'bytes' },
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400, immutable' },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.(jpg|jpeg|png|webp|svg|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400' },
        ],
      },
    ];
  },
};
export default nextConfig;