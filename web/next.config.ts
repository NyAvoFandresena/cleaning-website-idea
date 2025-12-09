import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // <=== Enables static exports
  reactStrictMode: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  
  images: {
    unoptimized: true, // <=== Required for GitHub Pages
  },

  // !!! IMPORTANT !!!
  // If your repo is "my-repo", set this to "/my-repo"
  // If your repo is "username.github.io", delete this line
  basePath: "/cleaning-website-idea",
};

export default nextConfig;
