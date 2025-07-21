import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: 'export',
	reactStrictMode: true,
	webpack(config, { }) {
		// Memastikan file .glb dapat diimport sebagai modul
		config.module.rules.push({
		test: /\.glb$/,
		use: [
			{
				loader: 'file-loader', // Memungkinkan pengimporan file .glb
				options: {
					name: '[path][name].[ext]',
					publicPath: '/_next/static/files/', // Menentukan jalur file output
					outputPath: 'static/files/', // Menentukan jalur file output
				},
			},
		],
		});

		return config;
	},
};

export default nextConfig;
