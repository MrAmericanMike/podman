import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		appDir: "app",
		files: {
			appTemplate: "src/index.html",
			assets: "src/public"
		},
		adapter: adapter({
			pages: "../server/public",
			assets: "../server/public",
			fallback: "index.html",
			precompress: false
		})
	}
};

export default config;

