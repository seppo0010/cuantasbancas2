import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true
  },
  // Configurar favicon
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ico|png|jpg|jpeg|gif|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/images',
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
