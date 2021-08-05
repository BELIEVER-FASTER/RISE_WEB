module.exports = {
  reactStrictMode: true,
  async rewrites() {
    if (process.env.NODE_ENV !== 'production') {
      return {
        fallback: [
          {
            source: '/:path*',
            destination: `https://api.riseenm.com/:path*`,
          },
        ],
      };
    } else {
      return [];
    }
  },
};
