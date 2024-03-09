/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "images.pexels.com",
      //   port: "",
      //   pathname: "/photos/**",
      // },
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
        port: "",
        pathname: "/*/**",
      },
    ],
  },

  output: "export",
};

module.exports = nextConfig;
