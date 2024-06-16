import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	esbuild: {
		supported: {
			'top-level-await': true
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	define: {
		APP_VERSION: JSON.stringify(process.env.npm_package_version)
	}
});
