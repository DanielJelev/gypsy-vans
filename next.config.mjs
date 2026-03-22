/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { optimizePackageImports: ['react','react-dom'] },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com', pathname: '/pw/**' },
    ],
  },
};
export default nextConfig;