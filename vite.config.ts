/*
 * @Descripttion:
 * @version:
 * @Author: ZmSama
 * @Date: 2022-09-06 15:33:10
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			include: [
				"./src/components/index.ts",
				"./src/components/chromeTab/index.tsx",
			],
			beforeWriteFile(filePath, content) {
				return {
					filePath: filePath.replace("/dist/src/", "/dist/"),
					content,
				};
			},
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "./src/components/index.ts"),
			name: "zm-react-chrome-tab",
			formats: ["es"],
			fileName: `index`,
		},
		rollupOptions: {
			external: ['react'],
			output: {
				globals: {
					vue: 'React'
				}
			}
		}
	},
});
