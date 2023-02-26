import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import handlebars from "vite-plugin-handlebars";

// https://vitejs.dev/config/
const SRC_FOLDER = "src";
export default defineConfig({
	plugins: [
		// https://stackoverflow.com/questions/70818545/how-to-include-html-partials-using-vite
		// @ts-ignore
		handlebars({
			partialDirectory: path.resolve(__dirname, `${SRC_FOLDER}/html`),
		}),
		react(),
	],
	resolve: {
		alias: [{ find: "@", replacement: path.resolve(__dirname, SRC_FOLDER) }],
	},
});
