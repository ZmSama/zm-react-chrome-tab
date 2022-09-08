
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
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
const __unconfig_default =  defineConfig({
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

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;