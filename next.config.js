/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		// remotePatterns: [
		// 	// {
		// 	// 	protocol: 'https',
		// 	// 	hostname: 'github.com',
		// 	// 	pathname: '/mosgizy/**',
		// 	// },
		// 	{
		// 		protocol: 'https',
		// 		hostname: 'raw.githubusercontent.com',
		// 		pathname: '/mosgizy/**',
		// 	},
		// ],
		domains: ['github.com', 'raw.githubusercontent.com'],
	},
};

module.exports = nextConfig;
