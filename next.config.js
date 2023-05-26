/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["lh3.googleusercontent.com"],
		formats: ["image/webp"]
	},
	eslint: {
		dirs: ["src", "pages", "app"]
	}
};

module.exports = nextConfig;
