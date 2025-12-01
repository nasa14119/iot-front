import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["websocket"],
  experimental: {
    typedEnv: true,
  },
};

export default nextConfig;
