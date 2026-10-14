import path from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// Standalone Vite config. This project began as a Hostinger Horizons export;
// the builder-specific dev plugins and the parent-frame error-reporting script
// injection have been removed so it runs, builds, and deploys anywhere.
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		// .tsx/.ts first: the site source is TypeScript.
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		host: true,
		port: 3000,
	},
	preview: {
		port: 3000,
	},
});
