import { sveltekit } from '@sveltejs/kit/vite';
import extractorSvelte from '@unocss/extractor-svelte';
import { isDevelopment } from 'std-env';
import UnoCSS from 'unocss/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import { kitRoutes } from 'vite-plugin-kit-routes';

export default defineConfig({
	plugins: [
		UnoCSS({
			extractors: [
				extractorSvelte(),
			],
		}),
		Icons({
			compiler: 'svelte',
			autoInstall: isDevelopment,
		}),
		sveltekit(),
		kitRoutes({
			LINKS: {
				domain: `https://pr.mfyuu.com`,
				repo: 'https://github.com/mfyuu/pr.mfyuu.com',
				username: 'mfyuu',
				includeYourOwnPRs: 'true', // Include your own PRs 'true' or 'false'
				hideList: ([]).join(','),
			},
		}),
	],
});
