module.exports =
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
