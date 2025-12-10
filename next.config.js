/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Use standard img tags or unoptimized Next Image to maintain current behavior with external URLs
  },
}

module.exports = nextConfig