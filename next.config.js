/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	eslint: {
		dirs: ["src", "pages", "app"]
	}
};

module.exports = nextConfig;
