/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...config.externals,  'socket.io-client'];
    }
    return config;
  },
}

module.exports = nextConfig
