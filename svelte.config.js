import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// fallback: '200.html' // enable only if your app must be SPA
		}),
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					'$': path.resolve('./src'),
					'$lib': path.resolve('./src/lib'),
				},
			},
			plugins: [
				WindiCSS(),
			],
		},
	}
};

export default config;
