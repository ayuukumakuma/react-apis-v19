import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { routeTypesPlugin } from "./src/utils/typed-routes/vite-plugin-route-types";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), routeTypesPlugin()],
});
