import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["localhost", "viettriptourist.com", "www.viettriptourist.com", "facebook.com"],
  },
  poweredByHeader: false,
};

export default nextConfig;
