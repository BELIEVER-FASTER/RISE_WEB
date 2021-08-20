/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const nextConfig =
  process.env.NODE_ENV === 'production'
    ? {
        reactStrictMode: true,
        async redirects() {
          return [
            {
              source: '/develope/:path*',
              destination: '/',
              permanent: true,
            },
          ];
        },
      }
    : {
        reactStrictMode: true,
        async rewrites() {
          return {
            fallback: [
              {
                source: '/:path*',
                destination: `https://api.riseenm.com/:path*`,
              },
            ],
          };
        },
      };

module.exports = withBundleAnalyzer(nextConfig);
