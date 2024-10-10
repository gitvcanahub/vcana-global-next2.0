/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  // reactStrictMode: false,
  images: {
    // domains: [
    //   "vcanaglobal.com",
    //   "apis.vcanaglobal.com",
    //   "vcana-website-assets.s3.amazonaws.com",
    // ],

    // loader: "default",

    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        // source: "/login",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "unsafe-none",
          },
        ],
      },
    ];
  },
  redirects: async () => [
    {
      source: "/:path*",
      has: [{ type: "host", value: "vcanaglobal.com" }],
      destination: "https://www.vcanaglobal.com/:path*",
      permanent: true,
    },
  ],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.worker\.js$/,
      use: { loader: "worker-loader" },
    });
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
