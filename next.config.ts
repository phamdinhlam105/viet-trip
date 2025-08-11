import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "viettriptourist.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.viettriptourist.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "facebook.com",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
