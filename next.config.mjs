import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Environment variable validation
  env: {
    CUSTOM_BUILD_TIME: new Date().toISOString(),
  },
  // Optimize for Vercel deployment
  experimental: {
    serverComponentsExternalPackages: ['axios'],
  },
  // Better error handling in production
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default withNextIntl(nextConfig);
