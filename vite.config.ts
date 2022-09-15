import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { createAliases } from "./createAliases";

const [aliases] = await createAliases({
	root: "./src",
	aliases: {
		"+": "components",
	},
});

export default defineConfig({
	plugins: [sveltekit()],
	...aliases,
});
